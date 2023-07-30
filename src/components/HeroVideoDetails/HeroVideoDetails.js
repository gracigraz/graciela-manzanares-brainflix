
import './HeroVideoDetails.scss';

//accept selectedVideo

function HeroVideoDetails({selectedVideo}) {

    const date = new Date(selectedVideo.timestamp).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
    console.log(date);

    return (
        <article className='hero-video-details'>
            <div className='hero-video-details__div'>
                <video className='hero-video-details__poster' poster={selectedVideo.image} controls>
                </video>
            </div>
            <section className="hero-video-details__summary">
                <h1 className="hero-video-details__title">{selectedVideo.title}</h1>
                <div className='hero-video-details__div-header'>
                    <div className="hero-video-details__div-mobile hero-video-details__div-mobile--left">
                        <h4 className="hero-video-details__channel">{selectedVideo.channel}</h4>
                        <span className="hero-video-details__date">{selectedVideo.timestamp}</span>
                    </div>
                    <div className="hero-video-details__div-mobile hero-video-details__div-mobile--right">
                        <p className="hero-video-details__views">{selectedVideo.views}</p>
                        <p className="hero-video-details__likes">{selectedVideo.likes}</p>
                    </div>
                </div>
                <p className="hero-video-details__description">{selectedVideo.description}</p>
            </section>
        </article>
    )
}
export default HeroVideoDetails;


{/* <article className='hero-video-details'>
<div className='hero-video-details__div'>
    <video className='hero-video-details__poster' poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
    </video>
</div>
<section className="hero-video-details__summary">
    <h1 className="hero-video-details__title">BMX Rampage: 2021 Highlights</h1>
    <div className='hero-video-details__div-header'>
        <div className="hero-video-details__div-mobile hero-video-details__div-mobile--left">
            <h4 className="hero-video-details__channel">By Red Cow</h4>
            <span className="hero-video-details__date">07/11/2021</span>
        </div>
        <div className="hero-video-details__div-mobile hero-video-details__div-mobile--right">
            <p className="hero-video-details__views">1,001.023</p>
            <p className="hero-video-details__likes">110,985</p>
        </div>
    </div>
    <p className="hero-video-details__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title"</p>
</section>
</article> */}