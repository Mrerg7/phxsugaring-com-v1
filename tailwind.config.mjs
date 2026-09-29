/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora Variable"', 'Sora', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#9A4F2E',
          soft: '#EFE8DC',
          ink: '#1F1C19',
        },
      },
    },
  },
  plugins: [],
};
