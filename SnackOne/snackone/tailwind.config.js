/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Verificar todos os arquivos dentro de 'src' que podem conter classes do Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
