// background: linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%);   button     background: #8CB1FF99; 60%     
            // purple button background: linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%);
            // background: linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%);  circle button blue
            // background: linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%);



   


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'bgwhite':'#ffffff',
      'white':'#FCFCFC',
      'blue': '#9FB2FF',
      'blackt':'#252727',
      'textblack': '#2C2B2B',
      'gray': '#787878',
      'blues': '#89A1FF',
      'lightgray': '#F1F1F1',
      'inputtext':'#7F7F7F',
      
    },
    fontSize:{
      'h1':'20px',
      'h2':'16px',
      'h3':'15px', 
      'h4':'12px',
      'h5':'10px',

    },
    fontFamily: {
    'montserrat':['Montserrat', 'sans-serif'],
    },
    borderRadius: {
      '4xl': '12px',
    },
    extend: {},
  },
  plugins: [],
}