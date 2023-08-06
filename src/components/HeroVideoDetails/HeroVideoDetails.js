
import './HeroVideoDetails.scss';


//accept selectedVideo

function HeroVideoDetails({selectedVideo}) {

    //declaring a variable to make it easier to use the datestamp. Here I convert the timestamp from epoch to month/day/year 2 digit for the month, 2 digt for the dy, 4 digit for the year
    const date = new Date(selectedVideo.timestamp).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });


    return (
            <section className="hero-video-details">
                <h1 className="hero-video-details__title">{selectedVideo.title}</h1>
                <div className='hero-video-details__div-header'>
                    <div className="hero-video-details__div-mobile hero-video-details__div-mobile--left">
                        <h4 className="hero-video-details__channel">By {selectedVideo.channel}</h4>
                        <span className="hero-video-details__date">{date}</span>
                    </div>
                    <div className="hero-video-details__div-mobile hero-video-details__div-mobile--right">
                        <p className="hero-video-details__views">{selectedVideo.views}</p>
                        <p className="hero-video-details__likes">{selectedVideo.likes}</p>
                    </div>
                </div>
                <p className="hero-video-details__description">{selectedVideo.description}</p>
            </section>
    )
}
export default HeroVideoDetails;

