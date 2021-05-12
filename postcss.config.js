const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    // require('@tailwindcss/ui'),
    require('autoprefixer'),
  ],
};
