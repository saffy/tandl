// api/greet.js

import { get } from '@vercel/edge-config';

export const config = {
  runtime: 'edge', // this is a pre-requisite
};

export default async function GET(request) {
  try {
    const greeting = await get('greeting'); // Access your Edge Config
    return new Response({value: greeting}, {status:200});
  } catch (error) {
    console.error('Error fetching greeting:', error);
    return new Response({value: 'Failed to fetch greeting'}, {status:500});
  }
}