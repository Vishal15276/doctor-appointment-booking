// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all folders that contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // define your custom colors like 'primary'
      },
    },
  },
  plugins: [],
};
