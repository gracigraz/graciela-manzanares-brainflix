
import HeroVideoDetails from '../../components/HeroVideoDetails/HeroVideoDetails';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import videoDetailsData from '../../data/video-details.json';
// import videos from '../../data/videos.json'
import NextVideos from '../../components/NextVideos/NextVideos';
import Comments from '../../components/Comments/Comments';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import './VideoPlayerPage.scss';

function VideoPlayerPage() {
    // pull out idFromParams from the params
    const {idFromParams} = useParams();
    //current state and function to update state
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    let defaultVideoId = null;

    //videos will be empty array until we get the array from axios
    if(videos.length > 0) {
        defaultVideoId = videos[0].id;
    }
    //figuring out which video ID we want to display 
    const videoIdToDisplay = idFromParams !== undefined ? idFromParams : defaultVideoId
    

    //function to call when a nav thumbnail image is clicked


    //filter the current selected video out of the array that we pass to NextVideos
    const filteredVideos = videos.filter((video) => {
        return video.id !== videoIdToDisplay;
    })

    const apiKey="93e99225-d77e-4b76-a61b-ac5c1d017864";
    // const url = "https://project-2-api.herokuapp.com/videos?api_key="+apiKey;

    //empty dependency array so that it only run this once on mount (on first render)
	useEffect(() => {
		axios.get("https://project-2-api.herokuapp.com/videos?api_key="+apiKey)
			.then(response => {
				setVideos(response.data);
                console.log(response.data)
			})
			.catch(error=>{
				console.log("axios call failed",error);
			});
	}, [])

    useEffect(()=> {
		//selectedVideoId can be null when we first load VideoPlayerPage until it gets the list
	    // of videos from the API
		if(videoIdToDisplay === null) return
  
        const url2 = `https://project-2-api.herokuapp.com/videos/`+videoIdToDisplay+`?api_key=`+apiKey;
	

		axios.get(url2)
			.then(response => {
				setSelectedVideo(response.data);
			})
			.catch(error=>{
				console.log("error calling axios",error);
			})
	}, [videoIdToDisplay])


	if(selectedVideo === null) {
		return (
			<div>Video loading...</div>
		)
	}



    return (
        <main className='video-page'>
            <HeroVideo image={selectedVideo.image} />
            <div className='video-page__desktop-div'>
                <div className='video-page__left-column'>
                    <HeroVideoDetails selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <NextVideos filteredVideos={filteredVideos} />
            </div>
        </main>
    );
}

export default VideoPlayerPage;