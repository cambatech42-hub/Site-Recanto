// Converte todas as fotos de public/ para WebP otimizado
// Redimensiona para max 1400px de largura mantendo proporção
// Salva no mesmo diretório com extensão .webp
// As originais .jpg são mantidas (pode deletar depois se quiser)

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const MAX_WIDTH = 1400;
const WEBP_QUALITY = 82;

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(full));
    } else if (/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const webpPath = filePath.replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/, '.webp');
  const before = (await stat(filePath)).size;

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);

  const after = (await stat(webpPath)).size;
  const reduction = Math.round((1 - after / before) * 100);
  return { filePath, before, after, reduction };
}

async function main() {
  console.log('Buscando imagens em', PUBLIC_DIR);
  const images = await findImages(PUBLIC_DIR);
  console.log(`Encontradas ${images.length} imagens. Convertendo...\n`);

  let totalBefore = 0, totalAfter = 0;
  let done = 0;

  for (const img of images) {
    try {
      const result = await optimizeImage(img);
      totalBefore += result.before;
      totalAfter += result.after;
      done++;
      const rel = path.relative(PUBLIC_DIR, img);
      process.stdout.write(
        `[${done}/${images.length}] ${rel} — ${(result.before/1024/1024).toFixed(1)}MB → ${(result.after/1024).toFixed(0)}KB (-${result.reduction}%)\n`
      );
    } catch (err) {
      console.error(`ERRO em ${img}:`, err.message);
    }
  }

  console.log('\n===== RESUMO =====');
  console.log(`Imagens processadas: ${done}`);
  console.log(`Antes: ${(totalBefore/1024/1024).toFixed(1)} MB`);
  console.log(`Depois: ${(totalAfter/1024/1024).toFixed(1)} MB`);
  console.log(`Redução total: ${Math.round((1 - totalAfter/totalBefore)*100)}%`);
}

main();
