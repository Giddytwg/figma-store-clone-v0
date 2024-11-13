/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myyellow: '#ffc700',
        mygreen: '#10a958'
      },
      fontFamily: {
        myfont: ['MyFont', 'sans-serif']
      },
      animation: {
        'my-spin': 'spin 1.5s linear infinite'
      }
    },
  },
  plugins: [],
}

