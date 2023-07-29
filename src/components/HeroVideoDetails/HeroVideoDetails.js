
import './HeroVideoDetails.scss';
// import likes from '../../assets/images/likes.svg';
// import views from '../../assets/images/views.svg';

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
                <h1 className="hero-video-details__title">BMX Rampage: 2021 Highlights</h1>
                <div className='hero-video-details__div-header'>
                    <div className="hero-video-details__div-mobile">
                        <h4 className="hero-video-details__channel">By Red Cow</h4>
                        <span className="hero-video-details__date">07/11/2021</span>
                    </div>
                    <div className="hero-video-details__div-mobile">
                        <p className="hero-video-details__views">1,001.023</p>
                        <p className="hero-video-details__likes">110,985</p>
                    </div>
                </div>
                <p className="hero-video-details__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title"</p>
            </section>
        </article>
    )
}
export default HeroVideoDetails;