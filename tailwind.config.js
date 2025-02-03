/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff8901",
        secondary: "#fb923c",
        text_primary:"#090909",
        text_secondary: "#171717"

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

