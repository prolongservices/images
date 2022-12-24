import React from 'react'
import Helmet from 'react-helmet'
import { helmetJsonLdProp } from 'react-schemaorg'
import { getSrc } from 'gatsby-plugin-image'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import getImageVariant from '@components/utils/getImageVariant'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  category,
  date,
  timeToRead,
  children,
  thumbnail,
  siteUrl,
  locale,
  seo,
  slug,
  isHome = false
}) => {

  const postUrl = siteUrl + (slug || '')
  const site = useSiteMetadata()
  const { logo } = useStaticQuery(logoQuery)
  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}
  console.log(postUrl)
  description = (seo && seo.description) || excerpt || site.description
  const facebookMeta = (seo && seo.facebook)
  const twitterMeta = (seo && seo.twitter)
  const metaTitle = (seo && seo.title) || title
  const facebookThumbnail = (seo && seo.facebook && seo.facebook.thumbnail)
  const twitterThumbnail = (seo && seo.twitter && seo.twitter.thumbnail)

  //console.log('pawn from SEO clone')
  //console.log(logo.nodes[0])

  let imageUrl, facebookUrl, twitterUrl;
  if (thumbnail == null) {
    imageUrl = siteUrl + logo.nodes[0].publicURL
  } else {
    const imageSrc = getSrc(getImageVariant(thumbnail, 'hero'))
    imageUrl =
      imageSrc &&
      (imageSrc.startsWith('//') ? imageSrc : siteUrl && `${siteUrl}${imageSrc}`)
  }

  if (facebookThumbnail == null) {
    facebookUrl = siteUrl + logo.nodes[0].publicURL
  }
  else {
    const imageSrc = getSrc(getImageVariant(facebookThumbnail, 'hero'))
    facebookUrl =
      imageSrc &&
      (imageSrc.startsWith('//') ? imageSrc : siteUrl && `${siteUrl}${imageSrc}`)
  }
  if (twitterThumbnail == null) {
    twitterUrl = siteUrl + logo.nodes[0].publicURL
  }
  else {
    const imageSrc = getSrc(getImageVariant(twitterThumbnail, 'hero'))
    twitterUrl =
      imageSrc &&
      (imageSrc.startsWith('//') ? imageSrc : siteUrl && `${siteUrl}${imageSrc}`)
  }


  console.log(imageUrl)
  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: metaTitle || site.title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },

    { property: 'og:title', content: (facebookMeta && facebookMeta.title) || metaTitle || site.title },
    { property: 'og:description', content: (facebookMeta && facebookMeta.description) || description },
    { property: 'og:type', content: date ? 'article' : 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:image', content: facebookUrl },
    { property: 'og:url', content: postUrl },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: (twitterMeta && twitterMeta.title) || metaTitle },
    { name: 'twitter:description', content: (twitterMeta && twitterMeta.description) || description },
    { name: 'twitter:creator', content: twitter.url },
    { name: 'twitter:image', content: twitterUrl }

  ]

  if (keywords && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords.join(', ') })
  }

  if (date) {
    metaTags.push({ name: 'article:published_time', content: date })
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', value: 'Reading time' })
    metaTags.push({
      name: 'twitter:data1',
      value: `${timeToRead} min read`
    })
  }

  if (meta) {
    metaTags.push(meta)
  }

  

  /**
   * Structured Data (JSON-LD)
   */

  const scripts = []
  const links = []

  links.push({ rel: 'profile', href: 'http://gmpg.org/xfn/11'})
  //Home Page
  if (isHome) {
    metaTags.push({ name: 'robots', content: 'follow, index'})
    links.push({
      "rel": "canonical",
      "href": siteUrl + '/'
    })
    const homeJsonLd = helmetJsonLdProp({
      '@context': 'https://schema.org',
      '@graph': [
        {
          "@type": "Person",
          "@id": siteUrl + "/#person",
          "name": 'Pawneshwer Gupta'
        },
        {
          "@type": "WebSite",
          "@id": siteUrl + "/#website",
          "url": siteUrl,
          "name": site.name,
          "publisher": {
            "@id": siteUrl + "/#person"
          },
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "SearchAction",
            "target": siteUrl + "/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://twitter.com/ImagesLe2",
            "https://www.instagram.com/images_le/",
            "https://www.facebook.com/imagesle.official",
            "https://www.reddit.com/user/imagesle_",
            "https://pinterest.com/imagesle/",
            "https://www.tumblr.com/imagesle",
            "https://www.linkedin.com/company/images-le"
          ],
        },
        {
          "@type": "CollectionPage",
          "@id": siteUrl + "/#webpage",
          "url": siteUrl,
          "name": site.name + ' | ' + site.title,
          "about": {
            "@id": siteUrl + "/#person"
          },
          "isPartOf": {
            "@id": siteUrl + "/#website"
          },
          "inLanguage": "en-US"
        }
      ],
    })
    scripts.push(homeJsonLd)
  }

  // BlogPosting
  if (title && author) {
    metaTags.push({ name: 'robots', content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'})
    links.push({
      "rel": "canonical",
      "href": postUrl
    })
    const articleJsonLd = helmetJsonLdProp({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: description,
      name: title,
      "@id": postUrl + "#richSnippet",
      image: {
        "@type": "ImageObject",
        id: imageUrl,
        url: imageUrl,
        width: 1600,
        height: 500,
        inLanguage: "en-US",
      },
      articleSection: (category && category.name) || 'Uncategorized',
      datePublished: date,
      dateModified: date,
      inLanguage: "en-US",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl + "#webpage",
        url: postUrl,
        name: title,
        datePublished: date,
        dateModified: date,
        isPartOf: {
          '@type': 'Website',
          "@id": siteUrl + "/#website",
          url: siteUrl,
          name: site.name,
          alternateName: site.title,
          publisher: {
            '@type': 'Person',
            "@id": siteUrl + "/#person",
            name: author.name,
          },
          inLanguage: "en-US",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          id: imageUrl,
          url: imageUrl,
          width: 1600,
          height: 500,
          inLanguage: "en-US",
        },
        inLanguage: "en-US",
        breadcrumb: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          "@id": postUrl + "#breadcrumb",
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Thing',
                "@id": siteUrl,
                name: 'Home',
              }
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Thing',
                "@id": `${siteUrl}${category.slug}`,
                name: category.name,
              }
            }
          ]
        }
      },
      author: {
        '@type': 'Person',
        name: author.name,
        "@id": author.slug,
        url: author.slug,
      },
      publisher: {
        "@type": "Organization",
        name: "Prolong Services",
        logo: {
          "@type": "ImageObject",
          url: "https://imagesle.com/Prolong-Services.png"
        }
      }
    })
    scripts.push(articleJsonLd)

    scripts.push({"src": "https://imagesle.com/light-box/tobii.min.js", "type": "text/javascript"})
    links.push({
      "rel": "stylesheet",
      "href": "https://imagesle.com/light-box/tobii.min.css"
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: locale || 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
      script={scripts}
      link={links}
    >
      {children}
    </Helmet>
  )
}

export default Seo

const logoQuery = graphql`
  query LogoQuery2 {
    logo: allFile(filter: {name: {eq: "logo"}}) {
      nodes {
        publicURL
      }
    }
  }
`
