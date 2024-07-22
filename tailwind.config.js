/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#F4F4F5",
        secondary: "#E8E8EA",
        "dark-primary": "#181A2A",
        "dark-secondary": "#242535",
        "status-blue": "#93C5FD",
        "status-yellow": "#FCD34D",
        "status-green": "#6EE7B7",
      },
      colors: {
        secondary: "#737373",
        blue: "#4B6BFB",
        "white-footer": "#F6F6F7",
        "black-footer": "#141624",
      },
      borderColor: {
        secondary: "#E8E8EA",
        "dark-secondary": "#52525B",
        "dark-primary": "#242535",
      },
      textColor: {
        primary: "#252B42",
        "dark-primary": "#BABABF",
        "head-dark": "#181A2A",
        "head-primary": "#FFFFFF",
        "table-head": "#B5B7C0",
      },
    },
  },
  plugins: [],
};
