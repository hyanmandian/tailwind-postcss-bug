const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const tailwind = require('tailwindcss');
const atImport = require("postcss-import");

module.exports = {
  plugins: [atImport(), mixins(), tailwind(), nested()],
};
