const urljoin = require('url-join')
require('dotenv').config()
module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: 'N8XPXSS3QO',
        apiKey: 'b9804d4c7ed7e2c1291769040e6ee5d5',
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/content/posts/img`
       
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Images Le',
        short_name: 'Images Le',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'standalone',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        // Add theme options here. Check documentation for available options.
        //siteUrl: process.env.URL || process.env.VERCEL_URL
        siteUrl: 'https://imagesle.com',

        services: {
          algolia: true,
          facebookComment: true,
          mailchimp: true
        }

      }
    },
    
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-ELT02ND9SJ"
        ],
        pluginConfig: {
          head: true,
        },
        gtagConfig: {
          send_page_view: true, // Explicitly set to true
        },
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_END_POINT
      }
    },
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            name: 'rss',
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]},
                limit: 100,
                filter: {frontmatter: {draft: {ne: true}, private: {ne: true}, protected: {ne: true}}}
                ) {
                edges {
                  node {
                    excerpt
                    html
                    slug
                    frontmatter {
                      date
                      title
                      seo {
                        description
                      }
                    }
                  }
                }
              }
            }
            `,
            normalize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: urljoin(site.siteMetadata.siteUrl, edge.node.slug),
                  html: edge.node.html,
                  description: edge.node.frontmatter.seo.description ? edge.node.frontmatter.seo.description : edge.node.excerpt
                }
              })
            },
          },
        ],
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        output: '/',
        resolveSiteUrl: () => 'https://imagesle.com'
      }
    }
    
  ],
  siteMetadata: {
    //General Site Metadata
    title: 'Download Latest Images',
    name: 'Images Le',
    description: 'Download good morning image, good night images, love images, flower images, krishna images, nature images, happy birthday images',
    address: 'India',
    email: 'hello@imagesle.com',
    phone: '+91 9501784647',
    siteUrl: 'https://imagesle.com',
    author: 'Pawneshwer Gupta',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/imagesle.official'
      },
      {
        name: 'Reddit',
        url: 'https://www.reddit.com/user/imagesle_'
      },
      {
        name: 'Pinterest',
        url: 'https://pinterest.com/imagesle/'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/images_le/'
      },
      
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Policy',
            slug: '/privacy-policy'
          },
          {
            name: 'Terms of Use',
            slug: '/terms-of-use'
          }
        ]
      }
    ]
  }
}
