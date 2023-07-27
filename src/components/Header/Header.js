import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import profile from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/images/upload.svg';
import search from '../../assets/images/search.svg';
function Header() {
    return (
        <>
            <header className="header">
                <img className="header__logo" src={logo} alt="Logo" />
                <div className='header__div--mobile'>
                    <div className='header__search-bar' id='searchWrapper'>
                        <img className="header__search-icon" src={search} alt="Search Icon" />
                        <input className='header__search-input' type='text' placeholder="Search" name="searchWrapper"></input>
                    </div>
                    <img className="header__avatar" src={profile} alt="Mohan Muruge Profile Avatar Image" />
                </div>
                
                <button className='header__button' type='button'>
                        <img className='header__upload-img' src={upload} alt='upload icon' />
                        <span>UPLOAD</span>
                </button>
            </header>
        </>
    )
}

export default Header;