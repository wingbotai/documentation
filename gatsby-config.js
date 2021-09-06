module.exports = {
  pathPrefix: "/documentation",
  siteMetadata: {
    title: "Wingbot documentation",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "sasalele",
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/images/icon.png'
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    // "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
              // terminal: 'none',
              // theme: 'vscode'
            }
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "api",
        path: "./src/pages/api",
      },
      __key: "api",
    },
  ],
};
