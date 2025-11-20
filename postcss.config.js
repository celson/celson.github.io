module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./layouts/**/*.html', './content/**/*.md'],
      safelist: ['dark', 'light', 'colorscheme-dark', 'colorscheme-light']
    }),
    require('autoprefixer'),
    require('cssnano')
  ]
}
