/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2B211A',
        coffee: '#4A3B30',
        mocha: '#7A5E4E',
        'mocha-soft': '#8A6F5E',
        clay: '#A88C7A',
        sand: '#C9B4A3',
        cream: '#F6EEE1',
        ivory: '#F1E8DA',
        primary: { DEFAULT: '#6B5140', hover: '#574032' },
        muted: '#6E5B4C',
        line: '#D8C7B5',
        'line-dark': '#4A3B30',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.08em',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(43,33,26,.35)',
        card: '0 6px 20px -10px rgba(43,33,26,.25)',
      },
      maxWidth: {
        container: '1200px',
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
