/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B1E',
          900: '#0A1633',
          800: '#10204D',
          700: '#1A2F6B',
        },
        electric: {
          400: '#22D3EE',
          500: '#0EA5E9',
          600: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(2, 132, 199, 0.25)',
        card: '0 8px 30px -8px rgba(5, 11, 30, 0.18)',
        glow: '0 0 40px -8px rgba(34, 211, 238, 0.5)',
      },
    },
  },
  plugins: [],
};
