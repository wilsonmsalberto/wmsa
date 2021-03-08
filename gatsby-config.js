module.exports = {
  siteMetadata: {
    title: 'Wilson Alberto - Frontend Developer - Personal Website',
    description: 'The personal website of Wilson Alberto, a Frontend Developer based in Portugal',
    author: '@wilsonmsalberto',
    siteUrl: 'https://www.wilsonalberto.com',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wilson-alberto-website',
        short_name: 'wmsa',
        start_url: '/',
        background_color: '#272727',
        theme_color: '#272727',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
