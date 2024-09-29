/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FOUNDERSGROTESK: ["FOUNDERSGROTESK", "cursive"], // Replace with your font name
        NEUEMONTREAL: ["NEUE-MONTREAL", "cursive"],
      },
      boxShadow: {
        custom:
          "0 5px 45px rgba(0,0,0,0.2), inset 0 0 15px #93B1AE, inset 0 0 15px #93B1AE",
      },
    },
  },
  plugins: [],
};
