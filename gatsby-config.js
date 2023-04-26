/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
          },
          {
            resolve: "gatsby-remark-autolink-headers",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-minify",
      options: {
        removeAttributeQuotes: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-3Y4NK60XKL", // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Delog GatbsyJS Starter",
        short_name: "Delog",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#381696",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          'https://thecodedose.us13.list-manage.com/subscribe/post?u=19b7830d6c32c9c9d4751d55d&amp;id=6ec0226340&amp;f_id=008ee6e2f0" method="post" id="mc-embedded-subscribe-form',
        timeout: 3500,
      },
    },
    {
      resolve: "gatsby-plugin-google-adsense",
      options: {
        publisherId: "ca-pub-5235026168912267",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-dark-mode",
    // siteURL is a must for sitemap generation
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
  ],
};
