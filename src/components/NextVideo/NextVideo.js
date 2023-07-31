import './NextVideo.scss';

//accept video as props and selectVideo function
function NextVideo({ title, channel, image, handleSelectedVideo, id }) {

    return (
        <div className="next-videos__item" onClick={() => handleSelectedVideo(id)}>
            <img className="next-videos__thumbnail"
                src={image}
                alt={`Thumbnail of video: ${title}`} />
            <div className="next-videos__body">
                <p className="next-videos__video-title">{title}</p>
                <p className="next-videos__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;
