/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        swing: "swing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
