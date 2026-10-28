/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0B0B0B',
          surface: '#111111',
          card: '#171717',
          cardHover: '#202020',
          border: '#292929',
          borderSubtle: '#1F1F1F',
          text: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#F2F2F2',
          card: '#FFFFFF',
          cardHover: '#EBEBEB',
          border: '#E5E5E5',
          borderSubtle: '#EDEDED',
          text: '#171717',
          secondary: '#666666',
          muted: '#858585',
        }
      }
    },
  },
  plugins: [],
}
