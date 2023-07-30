import './NextVideo.scss';

//accept video as props and selectVideo function
function NextVideo({ title, channel, image, handleSelectedVideo, id }) {

    return (
        <div className="next-videos__item" onClick={() => handleSelectedVideo(id)}>
            <img className="next-videos__thumbnail"
                src={image}
                alt={`Thumbanil of video: ${title}`} />
            <div className="next-videos__body">
                <p className="next-videos__video-title">{title}</p>
                <p className="next-videos__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;

   // <div className="next-videos__item">
                //     <img className="next-videos__thumbnail"
                //     src="https://i.imgur.com/MMDMgD7.jpg"
                //     alt={'Thumbnail of Les Houches The Hidden Gem Of The Chamonix'} />
                //     <div className="next-videos__body">
                //         <p className="next-videos__video-title">Les Houches The Hidden Gem Of The Chamonix</p>
                //         <p className="next-videos__channel">Cornelia Blair</p>
                //     </div>
                // </div>