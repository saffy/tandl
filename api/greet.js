// api/greet.js

import { get } from '@vercel/edge-config';

export const config = {
  runtime: 'edge', // this is a pre-requisite
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function GET(request) {
  try {
    const greeting = await get('greeting'); // Fetch from Edge Config
    return jsonResponse({ value: greeting }); 
  } catch (error) {
    console.error('Error fetching greeting:', error);
    return jsonResponse({ error: 'Failed to fetch greeting' }, 500); 
  }
}