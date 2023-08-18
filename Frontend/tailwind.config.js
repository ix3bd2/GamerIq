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
        'logo-color': '#dcaf67',
      },
      backgroundColor: {
        'logo-color': '#dcaf67',
        'logo-color-hover': '#dca367' 
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

