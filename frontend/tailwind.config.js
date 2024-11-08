// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All files where Tailwind classes might be used
    "./public/index.html",        // Include index.html if you use Tailwind classes there
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Custom primary color
        secondary: '#ffed4a', // Additional custom colors if needed
        accent: '#38b2ac',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example of a custom font
      },
      spacing: {
        '128': '32rem', // Custom spacing values
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better styling of form elements
    require('@tailwindcss/typography'), // If you need rich text styling
  ],
};
