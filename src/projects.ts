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
        src: '/images/shibedrill-site/home.png',
        alt: "shibedrill.site's homepage",
      },
      {
        src: '/images/shibedrill-site/article.png',
        alt: 'An example article from shibedrill.site',
      },
      {
        src: '/images/shibedrill-site/about.png',
        alt: "Shibedrill.site's About page",
      },
      {
        src: '/images/shibedrill-site/contact.png',
        alt: "Shibedrill.site's Contact page",
      },
      {
        src: '/images/shibedrill-site/archive.png',
        alt: "Shibedrill.site's archive page",
      },
      {
        src: '/images/shibedrill-site/tags.png',
        alt: "Shibedrill.site's tags page",
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
