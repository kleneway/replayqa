module.exports = {
  siteMetadata: {
    title: `Replay QA`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1165804453454570'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
  pathPrefix: '/'
};
