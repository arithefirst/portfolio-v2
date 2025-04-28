import type { APIRoute } from 'astro';

export const prerender = false;
export const GET: APIRoute = ({ redirect }) => {
  return redirect('/contact?clip=1', 307);
};
