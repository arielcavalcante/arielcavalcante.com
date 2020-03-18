module.exports = {
  siteMetadata: {
    title: "ariel cavalcante | product designer",
    author: "Ariel Cavalcante",
    description:
      "Overwatch Tanker and Healer. Dog and cat person. Beyhive and Little Monster. Perfectly balanced. As all things should be.",
    siteUrl: "https://arielcavalcante.com",
  },
  plugins: [
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-component",
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 650
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-responsive-iframe",
    //         options: {
    //           wrapperStyle: "margin-bottom: 1.0725rem"
    //         }
    //       },
    //       "gatsby-remark-prismjs",
    //       "gatsby-remark-copy-linked-files",
    //       "gatsby-remark-smartypants"
    //     ]
    //   }
    // },
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ariel cavalcante | product designer",
        short_name: "arielcavalcante.com",
        start_url: "/",
        background_color: "#F5E4C3",
        theme_color: "#34A7B2",
        display: "minimal-ui",
        icon: "static/favicon.png",
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-140803948-3",
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
  ]
}
