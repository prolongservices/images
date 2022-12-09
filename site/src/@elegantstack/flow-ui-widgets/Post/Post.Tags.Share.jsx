import React from 'react'
import { Box, Divider } from 'theme-ui'
import { PostTags } from '@widgets/Post'


export const PostTagsShare = props => (
  <Box>
    <Divider />
    <PostTags {...props} />
    {/* <PostShare {...props} /> */}
    <div class="sharethis-inline-share-buttons"></div>
  </Box>
)
