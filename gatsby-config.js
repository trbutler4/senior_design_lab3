module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "University of Iowa Senior Design 2022",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages'
      }
    }
  ],
};
