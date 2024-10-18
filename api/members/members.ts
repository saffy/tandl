export function GET(request: Request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  }

  export function POST(request: Request) {
    return new Response(`Post from ${process.env.VERCEL_REGION}`);
  }