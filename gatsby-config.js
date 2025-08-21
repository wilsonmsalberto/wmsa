module.exports = {
  siteMetadata: {
    title: 'Wilson Alberto - Frontend Developer - Personal Website',
    description:
      'The personal website of Wilson Alberto, a Frontend Developer based in Portugal',
    author: '@wilsonmsalberto',
    siteUrl: 'https://www.wilsonalberto.com',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
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
  ],
};
