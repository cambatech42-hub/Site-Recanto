export default async function handler(req: any, res: any) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const language = process.env.GOOGLE_REVIEWS_LANGUAGE; // se não definido, não envia parâmetro

  // If envs are missing, return empty list to let frontend fallback
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
  const fiveStar = reviews.filter((r: any) => r.rating === 5);
  const sortedDesc = fiveStar.sort((a: any, b: any) => (b.time ?? 0) - (a.time ?? 0));
  const topThree = sortedDesc.slice(0, 3);
  const simplified = topThree.map((r: any) => ({
    author_name: r.author_name,
    profile_photo_url: r.profile_photo_url,
    rating: r.rating,
    text: r.text,
    relative_time_description: r.relative_time_description,
    time: r.time,
  }));

    // Cache at the edge/CDN for 1h; allow stale for 24h
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(simplified);
  } catch (error) {
    res.status(500).json({ error: 'failed_to_fetch_reviews' });
  }
}