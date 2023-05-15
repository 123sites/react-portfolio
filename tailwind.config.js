/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = {
  // https://tailwindcss.com/docs/customizing-colors#using-custom-colors
  theme: {
    extend: {
    colors: {
      /* Main colors */
      blue: {
        900: '#03045E',
        800: '#023E8A',
        700: '#0077B6',
        600: '#0096C7',
        500: '#00B4D8',
        400: '#48CAE4',
        300: '#90E0EF',
        200: '#ADE8F4',
        100: '#CAF0F8',
      },

      // https://tailwindcss.com/docs/gradient-color-stops
      // theme: {
      //   extend: {
      //     gradientColorStopPositions: {

      // /* Grandient colors */
      // grandience: {
      //   background: 'hsla(213, 62%, 45%, 1)',
      //   background: 'linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)',
      //   background: '-moz-linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)',
      //   background: '-webkit-linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)',
      //   filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2c6cbc", endColorstr="#71c3f7", GradientType=1 )'
      // },

      // /* Neutral colors */
      // white: {
      //   900: '#FFFFFF',
      //   800: '#FFFFFF',
      //   700: '#FFFFFF',
      //   600: '#FFFFFF',
      //   500: '#FFFFFF',
      //   400: '#FFFFFF',
      //   300: '#FFFFFF',
      //   200: '#FFFFFF',
      //   100: '#FFFFFF',
      // },
      // gray: {
      //   900: '#1B1B1B',
      //   800: '#2D2D2D',
      //   700: '#3F3F3F',
      //   600: '#515151',
      //   500: '#636363',
      //   400: '#757575',
      //   300: '#878787',
      //   200: '#999999',
      //   100: '#ABABAB',
      // },
      // black: {
      //   900: '#000000',
      //   800: '#000000',
      //   700: '#000000',
      //   600: '#000000',
      //   500: '#000000',
      //   400: '#000000',
      //   300: '#000000',
      //   200: '#000000',
      //   100: '#000000',
      },
    },
  },

  fontFamily: {
    sans: ['Montserrat', 'sans-serif'],
  },

  container: {
    center: true,
    padding: '1rem',
  },

  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
}
  //   theme: {
  //     extend: {
  //     colors: {
  //     /* Grandient colors */
  //     { 
  //       grandience: background: hsla(213, 62%, 45%, 1);
  //       background: linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%);
  //       background: -moz-linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%);
  //       background: -webkit-linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%);
  //       filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#2c6cbc", endColorstr="#71c3f7", GradientType=1 )


  //   },
  // },




      
  

