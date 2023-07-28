import HeroVideo from '../HeroVideo/HeroVideo';
// import VideoDescription from '../VideoDescription/VideoDescription';
import { useState } from 'react';
import videoDetails from '../../data/video-details.json';
import videos from '../../data/videos.json'

function Main() {
    return (
      <>
        <HeroVideo/>
        {/* <VideoDescription /> */}
      </>
    );
  }
  
  export default Main;