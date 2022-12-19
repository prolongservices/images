import React from 'react'
import { Box, Link } from 'theme-ui'
//import PoweredByGatsby from '@components/PoweredByGatsby'

const styles = {
  logo: {
    pb: 1,
    mb: 2,
    mt: [4, 0]
  },
  copyright: {
    pt: 2,
    mb: [2, 4]
  },
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    ':visited': {
      color: `heading`
    },
    svg: {
      fill: `omegaDarker`,
      height: 24,
      ml: 2
    }
  }
}

export const FooterLogo = () => (
  <>

    <Box sx={styles.copyright}>
      <Link
        variant='mute'
        target='_blank'
        title='Prolong Services'
        href='https://prolongservices.com'
        rel='dofollow'
        sx={styles.link}
      >
        Prolong Services
      </Link>
      &nbsp; © {new Date().getFullYear()}, All Rights Reserved.
    </Box>
    {/* <Box>
      <PoweredByGatsby />
    </Box> */}
  </>
)
