/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 



  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        'logo-color': '#daae66',
      },
      backgroundColor: {
        'logo-color': '#daae66',
        'logo-color-hover': '#c09a5b' 
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

