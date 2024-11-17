/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        input: "url('/assets/Path 2.svg')",
        cta: "url('/assets/Path.svg')",
      },
      colors: {
        primary: "#2BD0D0",
        primaryHover: "#9AE3E3",
        purple: "#3A3054",
        text: "#34313D",
      },
    },
  },
  plugins: [],
};
