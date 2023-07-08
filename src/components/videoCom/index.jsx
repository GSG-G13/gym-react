import React from 'react';
import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoPlayer = () => (
  <Box width="100%" margin="auto">
    <ReactPlayer
      url="../../src/video/videoGym.mp4"
      width="100%"
      height="90vh"
      controls
      loop
      muted={false}
    />
  </Box>
);
export default VideoPlayer;
