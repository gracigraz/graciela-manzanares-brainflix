import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import profile from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">
              <img
                className="header__logo"
                src={logo}
                alt="BrainFlix Company Logo"
              />
            </Link>
          </li>
          <li className="header__nav-item header__div-mobile">
            <div className="header__search-bar" id="searchWrapper">
              <input
                className="header__search-input"
                type="text"
                placeholder="Search"
                name="searchWrapper"
              ></input>
            </div>
            <img
              className="header__avatar"
              src={profile}
              alt="Mohan Muruge Profile Avatar"
            />
          </li>
          <li className="header__nav-item">
            <Link to="/upload">
              <button className="header__button" type="button">
                <img
                  className="header__upload-img"
                  src={upload}
                  alt="upload icon"
                />
                <span>UPLOAD</span>
              </button>
            </Link>
          </li>
          <li>
            <img
              className="header__avatar-dt"
              src={profile}
              alt="Mohan Muruge Profile Avatar"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
