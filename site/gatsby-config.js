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
    },
    {
      
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    },
    /* {
      resolve : "gatsby-plugin-complex-sitemap-tree",
      options: {
        query: `
          allArticle {
            edges {
              node {
                id
                slug
                date
                
              }
            }
          }
        `,
        sitemapTree : {
          fileName: "sitemap.xml",
          children: [
            {
              fileName: "sitemap-articles.xml",
              queryName: "allArticle",
              serializer: (edge) => ({loc : edge.slug, lastmod : edge.date})
            },
            
          ],
        },
      },
    }, */
    //`gatsby-plugin-sitemap`,
    //`gatsby-image-sitemap`,
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
    name: 'Images Le',
    description: 'Download good morning image, good night images, love images, flower images, krishna images, nature images, happy birthday images',
    address: 'India',
    email: 'hello@imagesle.com',
    phone: '+91 9501784647',
    siteUrl: `https://imagesle.com`,

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
        url: 'https://www.instagram.com/images_le/'
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
