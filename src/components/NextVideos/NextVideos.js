import './NextVideos.scss';
import NextVideo from '../NextVideo/NextVideo';

 //accept videos (filtered) and array selectVideo function
function NextVideos({filteredVideos, handleSelectVideo}) {

    return (
            <nav className="next-videos">
                <h2 className="next-videos__heading">NEXT VIDEOS</h2>
                {/* map video array to nextvideo item: pass in key, video title, channeland selectVideo() */}
                {
                    filteredVideos.map((video)=>(
                        <NextVideo
                            key={video.id}
                            name={video.name}
                            id={video.id}
                            handleSelectedVideo={handleSelectVideo} />

                    ))
                }
            </nav>

                // <div className="next-videos__item">
                //     <img className="next-videos__thumbnail"
                //     src="https://i.imgur.com/MMDMgD7.jpg"
                //     alt={'Thumbnail of Les Houches The Hidden Gem Of The Chamonix'} />
                //     <div className="next-videos__body">
                //         <p className="next-videos__video-title">Les Houches The Hidden Gem Of The Chamonix</p>
                //         <p className="next-videos__channel">Cornelia Blair</p>
                //     </div>
                // </div>
            
    )
}

export default NextVideos;