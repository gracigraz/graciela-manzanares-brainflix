
import './HeroVideo.scss';

//accept selectedVideo
function HeroVideo({selectedVideo}) {


    return (
            <div className='hero-video'>
                <video className='hero-video__poster' poster={selectedVideo.image} controls>
                </video>
            </div>
        )
    }
export default HeroVideo;