/**
 * Prerender script: sobe um servidor local, usa Puppeteer para renderizar
 * a homepage com React e salva o HTML estático em dist/index.html.
 * Executado automaticamente após `vite build` via script "postbuild".
 */
import { createServer } from 'http';
import { createReadStream, writeFileSync } from 'fs';
import { resolve, extname, join } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = resolve(__dirname, '../dist');
const PORT = 5999;

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
      const ext = extname(filePath) || '.html';
      const contentType = MIME[ext] || 'application/octet-stream';

      const stream = createReadStream(filePath);
      stream.on('error', () => {
        // SPA fallback
        res.writeHead(200, { 'Content-Type': 'text/html' });
        createReadStream(join(DIST_DIR, 'index.html')).pipe(res);
      });
      stream.on('open', () => {
        res.writeHead(200, { 'Content-Type': contentType });
        stream.pipe(res);
      });
    });

    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log('🔄 Prerender: iniciando servidor local...');
  const server = await startServer();

  console.log('🔄 Prerender: iniciando Puppeteer...');
  const launchOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Aguarda o Footer estar no DOM (indica que o React terminou de renderizar)
  await page.waitForSelector('footer', { timeout: 15000 });

  const html = await page.content();
  writeFileSync(join(DIST_DIR, 'index.html'), html, 'utf-8');

  console.log('✅ Prerender: dist/index.html salvo com conteúdo completo.');

  await browser.close();
  server.close();
}

prerender().catch((err) => {
  console.error('❌ Prerender falhou:', err.message);
  process.exit(1);
});
