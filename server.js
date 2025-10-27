import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());

// API: Google Reviews
app.get('/api/google-reviews', async (req, res) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const language = process.env.GOOGLE_REVIEWS_LANGUAGE; // se não definido, não envia parâmetro

  if (!apiKey || !placeId) {
    res.status(200).json([]);
    return;
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'reviews,rating,user_ratings_total',
    key: apiKey,
    reviews_sort: 'newest'
  });
  if (language && language.trim() !== '') {
    params.set('language', language.trim());
  }
  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const reviews = data?.result?.reviews || [];
    const fourPlus = reviews.filter((r) => r.rating >= 4);
    const sortedDesc = fourPlus.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
    const topSix = sortedDesc.slice(0, 6);
    const simplified = topSix.map((r) => ({
      author_name: r.author_name,
      profile_photo_url: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      relative_time_description: r.relative_time_description,
      time: r.time,
    }));

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(simplified);
  } catch (error) {
    res.status(500).json({ error: 'failed_to_fetch_reviews' });
  }
});

// Diagnóstico: verifica se as variáveis de ambiente estão presentes (não expõe valores)
app.get('/api/debug-env', (req, res) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    hasApiKey: Boolean(apiKey),
    hasPlaceId: Boolean(placeId),
    nodeEnv: process.env.NODE_ENV || 'unknown'
  });
});

// Static files
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});