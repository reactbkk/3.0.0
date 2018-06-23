module.exports = {
  siteMetadata: {
    title: 'React Bangkok 3.0.0',
  },
  pathPrefix: '/3.0.0',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-99360357-2',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
