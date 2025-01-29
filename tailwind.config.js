module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', // Ajusta esto según la estructura de tu proyecto
    './index.html' // Agrega otras rutas si es necesario
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Para títulos, encabezados, etc.
        body: ['Lato', 'sans-serif'], // Para texto del cuerpo
      },
      colors: {
        primary: '#CD853F', // Marrón principal
        secondary: '#4A3728', // Marrón para texto
        accent: '#E8B88C', // Beige claro
      },
    },
  },
  plugins: [],
};