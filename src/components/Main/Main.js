import HeroVideoDetails from '../HeroVideoDetails/HeroVideoDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import videoDetailsData from '../../data/video-details.json';
import videos from '../../data/videos.json'
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import HeroVideo from '../HeroVideo/HeroVideo';
import './Main.scss';

function Main() {

    //create selectedVideo state variable - initialize to videoDetailsData[0] 1st video in video-details.json
    const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

    //function to call when a nav thumbnail image is clicked

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

export default Main;