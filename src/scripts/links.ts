import type { Link } from './types';

import Amazon from '$lib/icons/amazon.svelte';
import Bluesky from '$lib/icons/bluesky.svelte';
import Discogs from '$lib/icons/discogs.svelte';
import Discord from '$lib/icons/discord.svelte';
import Mail from '$lib/icons/mail.svelte';
import GitHub from '$lib/icons/github.svelte';
import Instagram from '$lib/icons/instagram.svelte';
import FileCert from '$lib/icons/file_cert.svelte';
import Signal from '$lib/icons/signal.svelte';
import Spotify from '$lib/icons/spotify.svelte';
import Steam from '$lib/icons/steam.svelte';
import TikTok from '$lib/icons/tiktok.svelte';
import Youtube from '$lib/icons/youtube.svelte';

export const links: Link[] = [
  {
    title: 'Amazon Wishlist',
    href: 'https://www.amazon.com/hz/wishlist/ls/1F2RJS322A2NR?sort=price-asc',
    icon: Amazon,
  },
  {
    title: 'Bluesky',
    href: 'https://bsky.app/profile/arithefirst.com',
    icon: Bluesky,
  },
  {
    title: 'Discogs',
    href: 'https://www.discogs.com/user/arithefirst/collection?header=1',
    icon: Discogs,
  },
  {
    title: 'Discord',
    href: 'https://discord.com/users/613358761901424652',
    icon: Discord,
  },
  {
    title: 'E-Mail',
    href: 'mailto:ari@arithefirst.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/arithefirst/',
    icon: GitHub,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/_arithefirst_/',
    icon: Instagram,
  },
  {
    title: 'PGP Public Key',
    href: '/pgp-pubkey',
    icon: FileCert,
    overrideTarget: true,
  },
  {
    title: 'Signal',
    href: 'https://signal.me/#eu/NytIaD7wOcX0wBjv-rUs9T2jiOvF3691v0Ec1wa2CHNBvO5aeZ9BDoN6_uLod-TX',
    icon: Signal,
  },
  {
    title: 'Spotify',
    href: 'https://stats.fm/arithefirst',
    icon: Spotify,
  },
  {
    title: 'Steam',
    href: 'https://steamcommunity.com/id/arithefirst/',
    icon: Steam,
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@arithefirst_',
    icon: TikTok,
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com/@arithefirst_',
    icon: Youtube,
  },
];
