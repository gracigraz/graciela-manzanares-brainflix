import './Upload.scss';

function Upload() {

    return (
        <section className="upload" >
            <h2 className="upload__heading">Upload Video</h2>
            <form id="upload__form" className="upload__form">
                <label htmlFor="upload__thumbnail">
                    <input id="upload__thumbnail" className="upload__thumbnail" type="image" name="image"
                        src="./assets/images/Mohan-muruge.jpg" alt="Mohan muruge side profile picture" />
                </label>
                <div class="upload__container">
                    <label htmlFor="upload__input-name" className="upload__label-name">
                    TITLE YOUR VIDEO
                        <input id="upload__input-name" className="upload__input-name" name="fullName" type="text"
                            placeholder="Add a title to your video" required>
                    </label>
                    <label htmlFor="upload__input-comment" className="upload__label-comment">
                    ADD A VIDEO DESCRIPTION
                        <input id="upload__input-comment" class="upload__input-comment" name="message"
                            type="text" placeholder="Add a description to your video">
                    </label>
                    <button type="button" class="upload__cancel-button">COMMENT</button>
                    <button className='upload__publish-button' type="submit">
                        <img className='upload__publish-icon' src={add} alt='publish icon' />
                        <span>PUBLISH</span>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Upload;