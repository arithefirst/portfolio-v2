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
  live?: string;
  source?: string;
}

export const projectArray: ProjectType[] = [
  {
    title: 'Shibedrill.site',
    description: 'A Custom-built blog site for ShibeDrill',
    src: '/images/cheesecake.webp',
    alt: 'Cheesecake, the harbinger of the end times',
    badges: ['AstroJS', 'DaisyUI', 'TailwindCSS', 'Vercel'],
    slug: 'shibedrill-site',
    live: 'https://www.shibedrill.site',
    source: 'https://github.com/arithefirst/shibedrill-homepage',
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
    source: 'https://github.com/arithefirst/lockbox',
    images: [
      {
        src: '/images/lockbox/upload.png',
        alt: 'The upload page for Lockbox',
      },
      {
        src: '/images/lockbox/admin.png',
        alt: 'The admin dashboard for Lockbox',
      },
    ],
  },
  {
    title: 'SVChat',
    description: 'A simple chat application built in SvelteKit',
    src: '/images/svchat.svg',
    alt: 'The logo for SVChat',
    badges: ['Cassandra', 'SQLite', 'SvelteKit', 'TailwindCSS', 'TypeScript'],
    slug: 'svchat',
    source: 'https://github.com/arithefirst/svchat',
    images: [
      {
        src: '/images/svchat/channel-sent.png',
        alt: 'A SVChat channel with messages sent',
      },
      {
        src: '/images/svchat/channel-empty.png',
        alt: 'An empty SVChat channel',
      },
      {
        src: '/images/svchat/account.png',
        alt: 'SVChat SVChat ccount settings page',
      },
      {
        src: '/images/svchat/change-pfp.png',
        alt: 'SVchat change profile picture dialog',
      },
      {
        src: '/images/svchat/login.png',
        alt: 'SVChat Login page',
      },
      {
        src: '/images/svchat/signup.png',
        alt: 'SVChat Sign up page',
      },
      {
        src: '/images/svchat/channel-dark.png',
        alt: 'A SVChat channel in dark mode',
      },
    ],
  },
  {
    title: 'Unbias',
    description: 'A freemium SAAS that is designed to help detect bias in educational materials',
    src: 'https://www.unbias-ai.org/favicon.svg',
    live: 'https://www.unbias-ai.org',
    alt: '',
    badges: ['Clerk', 'PostgreSQL', 'Svelte', 'SvelteKit', 'Typescript', 'Vercel'],
    slug: 'unbias',
    images: [
      {
        src: '/images/unbias/home.png',
        alt: 'Unbias home page',
      },
      {
        src: '/images/unbias/select.png',
        alt: 'Unbias analysis type picker page',
      },
      {
        src: '/images/unbias/analysis.png',
        alt: 'Unbias analysis results page',
      },
    ],
  },
];
