exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-tailwind',
  })
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: {
      autoLabel: true,
      sourceMap: process.env.NODE_ENV !== 'production',
    },
  })
}
