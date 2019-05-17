module.exports = {
  siteMetadata: {
    title: `Slave Ship Leusden`,
    description: `This book is an adaptation of Leo Balai's scientific research into the history of the Slave Ship Leusden, one of the last slave ships of the West Indian Company.`,
    author: ``,
    siteUrl: `https://serene-roentgen-874893.netlify.com`,
    shareImage: `/img/share-default.jpg`,
    facebook: `https://www.facebook.com/The-Slave-Ship-Leusden-1450426695179198/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms-paths',
      options: {
        cmsConfig: 'static/admin/config.yml'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `static/admin/config.yml`
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              showCaptions: true,
              withWebp: true
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      },
    },
    'gatsby-plugin-netlify-cms',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify'
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': `MarkdownRemark.frontmatter.author_id`
  }
}
