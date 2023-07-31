import './NextVideos.scss';
import NextVideo from '../NextVideo/NextVideo';

 //accept videos (filtered) and array handleSelectVideo function
function NextVideos({filteredVideos, handleSelectVideo}) {

    return (
            <nav className="next-videos">
                <h2 className="next-videos__heading">NEXT VIDEOS</h2>
                {/* map video array to nextvideo item: pass in key, video title, channel, image, and selectVideo() */}
                {
                    filteredVideos.map((video)=>(
                        <NextVideo 
                            key={video.id}
                            id={video.id}
                            title={video.title}
                            channel={video.channel}
                            image={video.image}
                            handleSelectedVideo={handleSelectVideo} />
                    ))
                }
            </nav>
            
    )
}

export default NextVideos;