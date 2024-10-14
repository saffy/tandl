// src/api/greet.js

import { get } from '@vercel/edge-config';

export default async function handler(req, res) {
  try {
    const greeting = await get('greeting'); // Access your Edge Config
    res.status(200).json({ value: greeting });
  } catch (error) {
    console.error('Error fetching greeting:', error);
    res.status(500).json({ error: 'Failed to fetch greeting' });
  }
}