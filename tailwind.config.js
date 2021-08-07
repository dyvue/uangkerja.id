const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: {
      primary: '#43c59e',
      'primary-hover': '#18dca6',
      body: '#0e1f50',
      'dark-body': '#041133',
      secondary: '#75809f',
      'secondary-hover': '#cfd5e4',
      white: '#ffffff',
      'white-hover': '#fafbfd',
      black: '#000000',
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
        'h5': { fontSize: theme('fontSize.base') },
        'h6': { fontSize: theme('fontSize.sm') },
      })
    })
  ]
};