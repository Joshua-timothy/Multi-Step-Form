/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "'Ubuntu', sans-serif",
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        StrawberryRed: "hsl(354, 84%, 57%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        DWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
