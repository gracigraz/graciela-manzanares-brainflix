// import Main from '../../components/Main/Main';


// function VideoPlayerPage() {
//     return (
//       <>
//         <Main />
//       </>
//     );
//   }
//   export default VideoPlayerPage;


import HeroVideoDetails from '../../components/HeroVideoDetails/HeroVideoDetails';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import videoDetailsData from '../../data/video-details.json';
import videos from '../../data/videos.json'
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import './VideoPlayerPage.scss';

function VideoPlayerPage() {
    


    //create selectedVideo state variable - initialize to videoDetailsData[0] 1st video in video-details.json
    const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);


    //figuring out which ID we want to display -plantIDToDisplay w turnary

    //function to call when a nav thumbnail image is clicked

    //get rid of handleselectedvideo bc now we dont use a button we use the url
    function handleSelectVideo(videoId) {
        //find correct video in our HeroVideoDetails
        const foundVideo = videoDetailsData.find((video) => {
            return video.id === videoId;
        })
        //update the selected video state
        setSelectedVideo(foundVideo);
    }

    //filter the current selected video out of the array that we pass to nav (NextVideos)
    const filteredVideos = videos.filter((video) => {
        return video.id !== selectedVideo.id;
    })
    return (
        <main className='video-page'>
            <HeroVideo selectedVideo={selectedVideo} />
            <div className='video-page__desktop-div'>
                <div className='video-page__left-column'>
                    <HeroVideoDetails selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <NextVideos filteredVideos={filteredVideos} handleSelectVideo={handleSelectVideo} />
            </div>
        </main>
    );
}

export default VideoPlayerPage;