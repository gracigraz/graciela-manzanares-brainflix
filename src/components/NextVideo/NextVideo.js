import { Link } from 'react-router-dom';
import './NextVideo.scss';

//accept video as props and selectVideo function
function NextVideo({ title, channel, image, id }) {

    return (
        <div className="next-video">
        <Link to={`/video/${id}`}>
            <img className="next-video__thumbnail"
                src={image}
                alt={`Thumbnail of video: ${title}`} />
                </Link>
            <div className="next-video__body">
                <p className="next-video__title">{title}</p>
                <p className="next-video__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;
