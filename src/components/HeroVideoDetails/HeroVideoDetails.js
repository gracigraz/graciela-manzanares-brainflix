
import './HeroVideoDetails.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
 //accept selectedVideo
//  {selectedVideo}
function HeroVideoDetails() {

    return (
        <section className='hero-video-details'>
            <div className='hero-video'>
                <video className='hero-video-details__poster' poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
                </video>
            </div>
            <section className="description">
                <h1 className="description__heading">NEXT VIDEOS</h1>
                <div>
                    <h4 className="comment__name"></h4>
                    <span className="comment__date"></span>
                    <img className="next-videos__thumbnail"
                        src=""
                        alt="" />
                    <img className="next-videos__thumbnail"
                        src=""
                        alt="" />
                </div>
                <p className="description__copy"></p>
            </section>
            </section>
    )
}
export default HeroVideoDetails;