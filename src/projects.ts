interface ProjectType {
  src: string;
  alt: string;
  title: string;
  slug: string;
  description: string;
  badges: string[];
  images?: {
    src: string;
    alt: string;
  }[];
}

export const projectArray: ProjectType[] = [
  {
    title: 'Shibedrill.site',
    description: 'A Custom-built blog site for ShibeDrill',
    src: '/images/cheesecake.webp',
    alt: 'Cheesecake, the harbinger of the end times',
    badges: ['AstroJS', 'DaisyUI', 'TailwindCSS', 'Vercel'],
    slug: 'shibedrill-site',
    images: [
      {
        src: '/images/cheesecake.webp',
        alt: 'alt',
      },
      {
        src: '/images/cheesecake.webp',
        alt: 'alt',
      },
    ],
  },
  {
    title: 'Lockbox',
    description: 'A password protected dropbox where users given a password can upload a file',
    src: '/images/lockbox.svg',
    alt: 'Lockbox Logo',
    badges: ['DaisyUI', 'Docker', 'SvelteKit', 'TailwindCSS', 'TypeScript'],
    slug: 'lockbox',
  },
  {
    title: 'SVChat',
    description: 'A simple chat application built in SvelteKit',
    src: '/images/svchat.svg',
    alt: '',
    badges: ['Cassandra', 'SQLite', 'SvelteKit', 'TailwindCSS', 'TypeScript'],
    slug: 'svchat',
  },
];
