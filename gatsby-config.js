module.exports = {
  siteMetadata: {
    title: `Replay QA`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1704540553098107'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
  pathPrefix: '/'
};
