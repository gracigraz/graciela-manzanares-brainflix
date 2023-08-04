// import { Link } from "react-router-dom";
// import Upload from "../../components/Upload/Upload";

// function UploadPage() {
//     return (
//       <>
//       <Upload/>
//       </>
//     );
//   }
  
//   export default UploadPage;


import './UploadPage.scss';
import publish from '../../assets/images/publish.svg';
import vid from '../../assets/images/Mohan-muruge.jpg';

function UploadPage() {

    return (
        <section className="upload" >
            <h1 className="upload__heading">Upload Video</h1>
            <form id="upload__form" className="upload__form">
                <div className='upload__container'>
                    <label htmlFor="upload__thumbnail" className="upload__thumbnail-label">
                        VIDEO THUMBNAIL
                        <input id="upload__thumbnail" className="upload__thumbnail" type="image" name="image"
                            src={vid} alt='Thumbnail of video' />
                    </label>
                    <div className="upload__text-container">
                        <label htmlFor="upload__input-title" className="upload__label-title">
                            TITLE YOUR VIDEO
                            <input id="upload__input-title" className="upload__input-title" name="title" type="text"
                                placeholder="Add a title to your video" required />
                        </label>
                        <label htmlFor="upload__label-description" className="upload__label-description">
                            ADD A VIDEO DESCRIPTION
                            <input id="upload__input-description" className="upload__input-description" name="description"
                                type="text" placeholder="Add a description to your video" />
                        </label>
                    </div>
                </div>
                <div className='upload__buttons'>
                    <button className='upload__publish-button' type="submit">
                        <img className='upload__publish-icon' src={publish} alt='publish icon' />
                        <span>PUBLISH</span>
                    </button>
                    <button type="button" className="upload__cancel-button">CANCEL</button>
                </div>
            </form>
        </section>
    );
}

export default UploadPage;