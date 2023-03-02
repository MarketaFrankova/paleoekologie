const config = require("./data/config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: `${config.siteUrl}${process.env.GATSBY_PREFIX}`,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/homepage`, // wherever background images are stored
      },
    },
  ],
};
