import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#E9E5D8',
        cream: '#F1EEE5',
        ink: '#2B2A21',
        moss: '#456B39',
        sage: '#6E7360',
        haze: '#DDD8C7',
      },
      fontFamily: {
        serif: ['Cormorant Variable', 'Georgia', 'serif'],
        sans: ['Instrument Sans Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
