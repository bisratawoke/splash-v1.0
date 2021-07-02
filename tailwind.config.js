module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      height:{

        'section':'600px',
        'services-section':'800px',
        'footer-section':'150px',
        'lg':'900px',
        'md':'400px',
        
      }


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
