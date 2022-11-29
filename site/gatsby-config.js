module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/content/posts/img`,
      },
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    },
    //`gatsby-plugin-sitemap`,
    //`gatsby-image-sitemap`,
    /* {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
        {
          allArticle {
            edges {
              node {
                id
                slug
                date
                
              }
            }
          }
        }
        `,
        createLinkInHead: true,
        addUncaughtPages: true,
        mapping: {
          allArticle: {
            sitemap: `posts`,
            serializer: (edges) => {
              return edges.map(({ node }) => {
                return {
                  slug: node.slug,
                  feature_image: node.frontmatter.thumbnail.absolutePath,
                  published_at: node.frontmatter.date
                }
              })
            }
            
          },
        }
      }
    } */
  ],
  siteMetadata: {
    //General Site Metadata
    title: 'Download Latest Images',
    name: 'Download Latest Images',
    description: 'Download good morning image, good night images, love images, flower images, krishna images, nature images, happy birthday images',
    address: 'India',
    email: 'sales@prolongservices.com',
    phone: '+91 9501784647',
    siteUrl: `https://images.prolongservices.com`,

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/prolongservices'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/ProlongServices'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/prolong.services/'
      }
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
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
