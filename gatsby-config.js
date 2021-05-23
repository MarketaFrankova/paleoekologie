module.exports = {
  siteMetadata: {
    title: "Muni-paleolab",
    siteUrl: `https://paleolab.netlify.app/`,
    description: `Oddělení paleoekologie (Botanický ústav AV ČR) se zabývá výzkumem dlouhodobé dynamiky vegetace a přírodního prostředí.`,
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
      resolve: "gatsby-plugin-robots-txt",
      options: {},
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
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
