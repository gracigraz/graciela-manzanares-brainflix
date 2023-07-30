import './NextVideos.scss';

//
function NextVideos() {

    //accept videos (filtered) and array selectVideo function

    return (
            <nav className="next-videos">
                <h2 className="next-videos__heading">NEXT VIDEOS</h2>
                <div className="next-videos__item">
                    <img className="next-videos__thumbnail"
                    src="https://i.imgur.com/MMDMgD7.jpg"
                    alt={'Thumbnail of Les Houches The Hidden Gem Of The Chamonix'} />
                    <div className="next-videos__body">
                        <p className="next-videos__video-title">Les Houches The Hidden Gem Of The Chamonix</p>
                        <p className="next-videos__channel">Cornelia Blair</p>
                    </div>
                </div>
            </nav>
    )
}

export default NextVideos;