import './NextVideos.scss';
//
function NextVideos() {

    //accept videos (filtered) and array selectVideo function

    return (
            <nav className="next-videos">
                <h2 className="next-videos__heading">NEXT VIDEOS</h2>
                <div className="next-videos__item">
                    <img className="next-videos__thumbnail"
                    src=""
                    alt="" />
                    <div className="next-videos__body">
                        <p className="next-videos__video-title"></p>
                        <p className="next-videos__author"></p>
                    </div>
                </div>
            </nav>
    )
}

export default NextVideos;