
import './HeroVideoDetails.scss';

 //accept selectedVideo
//  {selectedVideo}
function HeroVideoDetails() {

    return (
        <article className='hero-video-details'>
            <div className='hero-video-details__div'>
                <video className='hero-video-details__poster' poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
                </video>
            </div>
            <section className="hero-video-details__summary">
                <h1 className="hero-video-details__title">NEXT VIDEOS</h1>
                <div>
                    <h4 className="hero-video-details__channel"></h4>
                    <span className="hero-video-details__date"></span>
                    <img className="hero-video-details__views"
                        src=""
                        alt="" />
                    <img className="hero-video-details__likes"
                        src=""
                        alt="" />
                </div>
                <p className="hero-video-details__description"></p>
            </section>
        </article> 
    )
}
export default HeroVideoDetails;