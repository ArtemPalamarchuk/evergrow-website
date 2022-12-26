module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
  // plugins: [
  //   require('postcss-import'),
  //   require('tailwindcss/nesting')(require('postcss-nesting')),
  //   require('autoprefixer'),
  //   require('tailwindcss'),
  // ]
}
