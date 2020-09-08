module.exports = {
  purge: [
    'public/index.html',
    'src/**/*.vue'
  ],
  theme: {
    colors: {
      black: '#222',
      gray: {
        50: '#f7f7f7'
      },
      blue: {
        500: '#337ab7',
        550: '#286090',
        600: '#204d74'
      },
      white: '#fff',
      yellow: '#fde546'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  experimental: {
    applyComplexClasses: true
  }
}
