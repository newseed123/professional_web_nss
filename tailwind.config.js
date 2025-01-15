/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        red: {
          1: "#000",
          2: "#000",
        },
        fontFamily: {
          kh: "Kh Battambang",
          kh: "Khmer Muol",
          kh: "Kh Koulen L",
        },
        fontsize: {
          size: "100rem",
          size: "50rem",
        },
        heigth: {
          vh: "500px"
          
        }
        
      },
    },
  },
  plugins: [],
};
