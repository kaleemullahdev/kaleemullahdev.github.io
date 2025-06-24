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
        card: 'var(--card)',
        'card-hover': 'var(--card-hover)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        border: 'var(--border)',
      },
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'primary': 'var(--shadow-primary)',
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
