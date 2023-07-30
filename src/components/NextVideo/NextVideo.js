import './NextVideo.scss';

//accept video as props and selectVideo function
function NextVideo({name, handleSelectedVideo, id}) {

    return (
        <button className='nav__button' onClick={() => handleSelectedVideo(id)}>
            {name}
        </button>




    );
}

export default NextVideo;