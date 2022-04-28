module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72px': '72px'
      },
      flex: {
        '1': '0 0 40%'
      },
      flex: {
        '2': '0 0 60%'
      },
      flex:{
        '50%': '0 0 50%'
      }
    },
    backgroundImage: {
      'bg-home': "url('../Assets/bg-home.jpg')"
    },
    top: {
      '-1px': '-1px'
    }
  },
  plugins: [],
}
