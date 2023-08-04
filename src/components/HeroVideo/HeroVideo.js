
import './HeroVideo.scss';

//accept selectedVideo
function HeroVideo({image}) {


    return (
            <div className='hero-video'>
                <video className='hero-video__poster' poster={image} controls>
                </video>
            </div>
        )
    }
export default HeroVideo;