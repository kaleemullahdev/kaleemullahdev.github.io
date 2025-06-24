import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'rgba(245, 56, 56, 1)',
        secondary: 'rgba(245, 56, 56, 0.35)',
        textPrimary: 'rgba(79, 86, 101, 1)',
        headingText: 'rgba(11, 19, 42, 1)',
      },
      fontFamily: {
        primary: ['Rubik,serif'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.section-container': {
          maxWidth: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          paddingTop: theme('spacing.20'),
        },
        '.pricing-card': {
          backgroundColor: 'white',
          padding: theme('spacing.8'),
          borderRadius: theme('breakpoint.2xl'),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: `2px solid ${theme('colors.gray.200')}`,
          transition: 'all 300ms ease-in-out',
          '&:hover': {
            borderColor: theme('colors.red.200'),
            transform: 'translateY(-4px)',
          },
        },
      })
    }),
  ],
} satisfies Config
