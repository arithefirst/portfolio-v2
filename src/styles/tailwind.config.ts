import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      typography: (): Record<string, any> => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text)',
            '--tw-prose-lead': 'var(--color-subtext-0)',
            '--tw-prose-links': 'var(--color-mauve)',
            '--tw-prose-bold': 'var(--color-text)',
            '--tw-prose-counters': 'var(--color-overlay-0)',
            '--tw-prose-bullets': 'var(--color-overlay-1)',
            '--tw-prose-hr': 'var(--color-surface-2)',
            '--tw-prose-quotes': 'var(--color-text)',
            '--tw-prose-quote-borders': 'var(--color-surface-2)',
            '--tw-prose-captions': 'var(--color-subtext-1)',
            '--tw-prose-code': 'var(--color-peach)',
            '--tw-prose-pre-code': 'var(--color-base)',
            '--tw-prose-pre-bg': 'var(--color-surface-0)',
            '--tw-prose-th-borders': 'var(--color-surface-2)',
            '--tw-prose-td-borders': 'var(--color-surface-1)',
          },
        },
      }),
    },
  },
};

export default config;
