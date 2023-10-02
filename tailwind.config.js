/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#363ae4",
        accent: "#ececfb",
      },
    },
  },
  plugins: [],
};
