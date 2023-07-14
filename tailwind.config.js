/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orion-nebula': 'url("./assets/orion-nebula.png")',
        'orion': 'url("./assets/orion.png")',
        'left-hero': 'url("./assets/left-hero.png")',
        'right-hero': 'url("./assets/right-hero.png")',
        'red-button': 'url("./assets/red-button.png")',
        'purple-button': 'url("./assets/purple-button.png")',
        'news': 'url("./assets/news-bg.png")',
        'footer': 'url("./assets/pc_footer 1.png")',
        'orange': 'url("./assets/orange.png")'
      },
      colors: {
        'purple': '#863281',
        'transparent-card': "rgba(12, 13, 33, 0.84)",
        'card-border': '#1E214B',
        'input-card': 'rgba(217, 217, 217, 0.15)'
      },
      fontFamily: {
        'sans': 'Inter',
        'banger': 'Bangers'
      }
    },
  },
  plugins: [],
}

