import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F6',
        foreground: '#1A0C0A',
        muted: '#9B5850',
        coral: {
          DEFAULT: '#B5322A',
          bg: '#FAE8E7',
          hover: '#9A2920',
        },
        surface: '#F7EAE8',
        border: '#EDD5D1',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      borderRadius: {
        brand: '16px',
      },
    },
  },
  plugins: [],
}

export default config
