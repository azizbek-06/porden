/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        730: "753px",
        880: "649px",
        719: "719px",
      },
      maxWidth: {
        1146: "1146px",
        1800: "1800px",
      },
      colors: {
        "regal-black": "#0F0F0F",
        "regal-grey": "#969696",
        "regal-black-2": "#1F1F1F",
        "regal-black-3": "#191B1C",
      },
      fontFamily: {
        PT: ["PT Sans"],
        Display: ["Playfair Display"],
      },
      backgroundImage: {
        "hero-pattern": "url('/imge/img-1-bg.png')",
      },
    },
  },
  plugins: [],
};
