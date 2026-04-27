export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenDark: "#1e3d20",
        greenMid: "#2d5a30",
        greenLight: "#4a7c4e",
        gold: "#c9922a",
        cream: "#f5f0e8",
        gd: "#1e3a2b",
        gm: "#2d5a3d",
        ga: "#4a8a5e",
        gl: "#7ab88a",
        sand: "#ede5d4",
        td: "#1a2e1f",
        tb: "#3d4f3e",
        tm: "#6b7d6c",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
