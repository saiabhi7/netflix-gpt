/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url(/src/assets/image.png)",
        "netflix-logo": "url(/src/assets/Netflix_Logo_PMS.png)",
      },
    },
  },
  plugins: [],
};
