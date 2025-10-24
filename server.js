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
  const language = 'pt-BR';

  if (!apiKey || !placeId) {
    res.status(200).json([]);
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=${language}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const reviews = data?.result?.reviews || [];
    const fiveStar = reviews.filter((r) => r.rating === 5);
    const sortedDesc = fiveStar.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
    const topThree = sortedDesc.slice(0, 3);
    const simplified = topThree.map((r) => ({
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