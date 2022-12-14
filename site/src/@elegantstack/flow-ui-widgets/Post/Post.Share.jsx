import React from 'react'
import { Heading, Flex } from 'theme-ui'
import getImageVariant from '@components/utils/getImageVariant'
import { getSrc } from 'gatsby-plugin-image'
import {
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  ViberShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
  ViberIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon
} from 'react-share'
import './Post.Share.css'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  heading: {
    color: `omegaDark`,
    mr: 4,
    mb: 0
  }
}

const PostShare = ({ location, title, thumbnail }) => {
  const url = location && location.href
  let imageUrl = ''
  const siteUrl = 'https://imagesle.com'
  if (thumbnail != null) {
    const imageSrc = getSrc(getImageVariant(thumbnail, 'hero'))
    imageUrl =
      imageSrc &&
      (imageSrc.startsWith('//') ? imageSrc : siteUrl && `${siteUrl}${imageSrc}`)
    //console.log(imageUrl)
  }
  

  return (
    <Flex sx={styles.wrapper}>
      <Heading variant='h5' sx={styles.heading}>
        Share
      </Heading>
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={url}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={url} className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Demo__some-network">
          <FacebookMessengerShareButton
            url={url}
            appId="693291528810115"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <TelegramShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={url}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton url={url} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        <div className="Demo__some-network">
          <PinterestShareButton
            url={url}
            media={imageUrl}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <div>
            <PinterestShareCount url={url} className="Demo__some-network__share-count" />
          </div>
        </div>

        <div className="Demo__some-network">
          <RedditShareButton
            url={url}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          <div>
            <RedditShareCount url={url} className="Demo__some-network__share-count" />
          </div>
        </div>

        <div className="Demo__some-network">
          <TumblrShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TumblrIcon size={32} round />
          </TumblrShareButton>

          <div>
            <TumblrShareCount url={url} className="Demo__some-network__share-count" />
          </div>
        </div>

        <div className="Demo__some-network">
          <EmailShareButton
            url={url}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="Demo__some-network">
          <ViberShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <ViberIcon size={32} round />
          </ViberShareButton>
        </div>

        <div className="Demo__some-network">
          <LineShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <LineIcon size={32} round />
          </LineShareButton>
        </div>

        <div className="Demo__some-network">
          <PocketShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <PocketIcon size={32} round />
          </PocketShareButton>
        </div>

        <div className="Demo__some-network">
          <InstapaperShareButton
            url={url}
            title={title}
            className="Demo__some-network__share-button"
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>

      </div>

    </Flex>
  )
}

export default PostShare
