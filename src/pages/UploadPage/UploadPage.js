import "./UploadPage.scss";
import publish from "../../assets/images/publish.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
//page to add new video content to the site

function UploadPage() {
  const [video, setVideo] = useState({
    title: "",
    description: "",
  });

  //after form submission notifies about "upload" and redirect to homepage with default video selected
  const handleCreateVideo = (e) => {
    axios
      .post("http://localhost:8082/videos", video)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Your video details have been uploaded!!");
  };

  const handleChange = (event) => {
    setVideo((val) => ({ ...val, [event.target.name]: event.target.value }));
  };

  return (
    <main className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__container">
        <div className="upload__thumbnail-container">
          <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
          <img
            className="upload__thumbnail"
            src={`http://localhost:8082/public-images/Upload-video-preview.jpg`}
            alt="bike handlebar and top tube frame"
          />
        </div>
        <form id="upload__form" className="upload__form">
          <label htmlFor="upload__input-title" className="upload__label-title">
            TITLE YOUR VIDEO
            <input
              id="upload__input-title"
              className="upload__input-title"
              name="title"
              type="text"
              placeholder="Add a title to your video"
              value={video.title}
              onChange={handleChange}
              required
            />
          </label>
          <label
            htmlFor="upload__input-description"
            className="upload__label-description"
          >
            ADD A VIDEO DESCRIPTION
            <input
              id="upload__input-description"
              className="upload__input-description"
              name="description"
              type="text"
              placeholder="Add a description to your video"
              value={video.description}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <div className="upload__buttons">
        <Link to="/">
          <button
            className="upload__publish-button"
            type="submit"
            onClick={handleCreateVideo}
          >
            <img
              className="upload__publish-icon"
              src={publish}
              alt="publish icon"
            />
            PUBLISH
          </button>
        </Link>
        <button type="button" className="upload__cancel-button">
          CANCEL
        </button>
      </div>
    </main>
  );
}

export default UploadPage;
