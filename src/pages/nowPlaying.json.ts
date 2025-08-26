import type { LastFmErrorResponse, LastFmRecentTracksResponse } from '$lib/scripts/types';
import type { APIRoute } from 'astro';

async function getCurrentlyPlaying(): Promise<{
  status: number;
  json: LastFmRecentTracksResponse | LastFmErrorResponse;
}> {
  const user = 'PancakeAri';
  const apiKey = import.meta.env.LASTFM_APIKEY;
  let url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks`;
  url += `&user=${user}&api_key=${apiKey}&format=json`;

  const res = await fetch(url);
  const json = await res.json();

  return res.status !== 200
    ? { status: res.status, json: json as LastFmErrorResponse }
    : { status: res.status, json: json as LastFmRecentTracksResponse };
}

export const GET: APIRoute = async () => {
  const { status, json } = await getCurrentlyPlaying();

  if (status !== 200) {
    return new Response(JSON.stringify({ error: (json as LastFmErrorResponse).error }), {
      headers: {
        'content-type': 'application/json',
      },
      status,
    });
  } else {
    const currentlyPlaying = (json as LastFmRecentTracksResponse).recenttracks.track.filter(
      (v) => v['@attr']?.nowplaying === 'true',
    )[0];

    if (currentlyPlaying) {
      return new Response(
        JSON.stringify({
          track: {
            albumImage: currentlyPlaying.image.filter((v) => v.size === 'large') ?? currentlyPlaying.image[0],
            title: currentlyPlaying.name,
            artist: currentlyPlaying.artist['#text'],
          },
        }),
        {
          headers: {
            'content-type': 'application/json',
          },
          status,
        },
      );
    }

    return new Response(JSON.stringify({ error: 0 }), {
      headers: {
        'content-type': 'application/json',
      },
      status,
    });
  }
};

export type NowPlayingResponse =
  | { error: number }
  | {
      track: {
        albumImage: { '#text': string; size: string }[];
        title: string;
        artist: string;
      };
    };
