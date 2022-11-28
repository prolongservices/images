import React from 'react'
import { Box } from 'theme-ui'
import PoweredByGatsby from '@components/PoweredByGatsby'

const styles = {
  logo: {
    pb: 1,
    mb: 2,
    mt: [4, 0]
  },
  copyright: {
    pt: 2,
    mb: [2, 4]
  }
}

export const FooterLogo = () => (
  <>
    
    <Box sx={styles.copyright}>
      Learn Pain Less © {new Date().getFullYear()}, All Rights Reserved.
    </Box>
    <Box>
      <PoweredByGatsby />
    </Box>
  </>
)
