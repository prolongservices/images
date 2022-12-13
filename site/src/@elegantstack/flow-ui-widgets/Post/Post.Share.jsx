import React from 'react'
import { IconButton, Heading, Flex } from 'theme-ui'
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton
} from 'react-share'
import attachSocialIcons from '@helpers/attachSocialIcons'

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

  const Facebook = ({ children }) => (
    <FacebookShareButton url={url} quote={title}>
      {children}
    </FacebookShareButton>
  )

  const FacebookMessenger = ({ children }) => (
    <FacebookMessengerShareButton url={url} quote={title}>
      {children}
    </FacebookMessengerShareButton>
  )

  const Twitter = ({ children }) => (
    <TwitterShareButton url={url} title={title}>
      {children}
    </TwitterShareButton>
  )

  const Linkedin = ({ children }) => (
    <LinkedinShareButton url={url} quote={title}>
      {children}
    </LinkedinShareButton>
  )

  const Email = ({ children }) => (
    <EmailShareButton url={url} subject={title}>
      {children}
    </EmailShareButton>
  )

  const Pinterest = ({ children }) => (
    <PinterestShareButton url={url} subject={title}>
      {children}
    </PinterestShareButton>
  )

  const Pocket = ({ children }) => (
    <PocketShareButton url={url} subject={title}>
      {children}
    </PocketShareButton>
  )

  const Reddit = ({ children }) => (
    <RedditShareButton url={url} subject={title}>
      {children}
    </RedditShareButton>
  )

  const Telegram = ({ children }) => (
    <TelegramShareButton url={url} subject={title}>
      {children}
    </TelegramShareButton>
  )

  const Whatsapp = ({ children }) => (
    <WhatsappShareButton url={url} subject={title}>
      {children}
    </WhatsappShareButton>
  )

  const buttons = {
    facebook: Facebook,
    facebookMessenger: FacebookMessenger,
    twitter: Twitter,
    linkedin: Linkedin,
    email: Email,
    pinterest: Pinterest,
    pocket: Pocket,
    reddit: Reddit,
    telegram: Telegram,
    whatsapp: Whatsapp
  }

  const buttonsWithIcons = attachSocialIcons(
    Object.keys(buttons).map(s => ({ name: s }))
  )

  return (
    <Flex sx={styles.wrapper}>
      <Heading variant='h5' sx={styles.heading}>
        Share
      </Heading>
      {buttonsWithIcons.map(({ name, color, Icon }) => {
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
      })}
    </Flex>
  )
}

export default PostShare
