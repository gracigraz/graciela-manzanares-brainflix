import './NextVideo.scss';

//accept video as props and selectVideo function
function NextVideo({ title, channel, image, handleSelectedVideo, id }) {

    return (
        <div className="next-video" onClick={() => handleSelectedVideo(id)}>
            <img className="next-video__thumbnail"
                src={image}
                alt={`Thumbnail of video: ${title}`} />
            <div className="next-video__body">
                <p className="next-video__title">{title}</p>
                <p className="next-video__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;
