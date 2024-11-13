// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All files where Tailwind classes might be used
    "./public/index.html",        // Include index.html if you use Tailwind classes there
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6FFF', // Custom primary color
        secondary: '#ffed4a', // Additional custom colors if needed
        accent: '#38b2ac',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better styling of form elements
    require('@tailwindcss/typography'), // If you need rich text styling
  ],
};
