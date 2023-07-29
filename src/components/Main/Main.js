import HeroVideoDetails from '../HeroVideoDetails/HeroVideoDetails';
// import VideoDescription from '../VideoDescription/VideoDescription';
import { useState } from 'react';
import videoDetails from '../../data/video-details.json';
import videos from '../../data/videos.json'
import NextVideos from '../NextVideos/NextVideos';

function Main() {

    // //create selectedVideo state variable - initialize to videoDetailsData[0] 1st video in video-details.json
    // const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

    // //function to call when a nav thumbnail image is clicked

    // function handleSelectVideo(videoId){
    //     //find correct video in our videoDetails
    //     const foundVideo = videoDetailsData.find((video)=>{
    //         return video.id === videoId;
    //     })
    //     //update the selected video state
    //     setSelectedVideo(foundVideo);
    // }

    // //filter the current selected video out of the array that we pass to nav
    // const filteredVideos = videos.filter((video)=>{ 
    //     return video.id !==selectedVideo.id;
    // })
    return (
      <main className= 'video-page'>
        <HeroVideoDetails /> 
        {/* selectedVideo = {selectedVideo} */}
        <NextVideos  />
        {/* filteredVideos = {filteredVideos} handleSelectVideo={handleSelectVideo} */}
      </main>
    );
  }
  
  export default Main;