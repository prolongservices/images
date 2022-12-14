import React from 'react'
import { IconButton, Heading, Flex } from 'theme-ui'
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
} from 'react-share'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  heading: {
    color: `omegaDark`,
    mr: 1,
    mb: 0
  }
}

const PostShare = ({ location, title }) => {
  const url = location && location.href

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
          appId="521270401588372"
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
          url={String(window.location)}
          media={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <div>
          <PinterestShareCount url={url} className="Demo__some-network__share-count" />
        </div>
      </div>

      <div className="Demo__some-network">
        <VKShareButton
          url={url}
          image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <VKIcon size={32} round />
        </VKShareButton>

        <div>
          <VKShareCount url={url} className="Demo__some-network__share-count" />
        </div>
      </div>

      <div className="Demo__some-network">
        <OKShareButton
          url={url}
          image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <OKIcon size={32} round />
        </OKShareButton>

        <div>
          <OKShareCount url={url} className="Demo__some-network__share-count" />
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
        <LivejournalShareButton
          url={url}
          title={title}
          description={url}
          className="Demo__some-network__share-button"
        >
          <LivejournalIcon size={32} round />
        </LivejournalShareButton>
      </div>

      <div className="Demo__some-network">
        <MailruShareButton
          url={url}
          title={title}
          className="Demo__some-network__share-button"
        >
          <MailruIcon size={32} round />
        </MailruShareButton>
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
        <WorkplaceShareButton
          url={url}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <WorkplaceIcon size={32} round />
        </WorkplaceShareButton>
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
        <WeiboShareButton
          url={url}
          title={title}
          image={''}
          className="Demo__some-network__share-button"
        >
          <WeiboIcon size={32} round />
        </WeiboShareButton>
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

      <div className="Demo__some-network">
        <HatenaShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <HatenaIcon size={32} round />
        </HatenaShareButton>

        <div>
          <HatenaShareCount url={url} className="Demo__some-network__share-count" />
        </div>
      </div>
    </div>
      {/* {buttonsWithIcons.map(({ name, color, Icon }) => {
        const ShareButton = buttons[name]
        return (
          ShareButton && (
            <IconButton
              as='span'
              variant='simple'
              key={`share-${name}`}
              sx={{ color }}
            >
              <ShareButton>
                <Icon round />
              </ShareButton>
            </IconButton>
          )
        )
      })} */}
    </Flex>
  )
}

export default PostShare
