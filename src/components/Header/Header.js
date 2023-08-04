import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import profile from '../../assets/images/Mohan-muruge.jpg';
import upload from '../../assets/images/upload.svg';
import { Link, link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header"> 
                <Link className="" to="/">
                    <img className="header__logo" src={logo} alt="Logo" />
                </Link>
                <div className='header__div--mobile'>
                    <div className='header__search-bar' id='searchWrapper'>
                        <input className='header__search-input' type='text' placeholder="Search" name="searchWrapper"></input>
                    </div>
                    <img className="header__avatar" src={profile} alt="Mohan Muruge Profile Avatar Image" />
                </div>

                <div className='header__search-bar-dt' id='searchWrapper'>
                    <input className='header__search-input' type='text' placeholder="Search" name="searchWrapper"></input>
                </div>
                <Link to="/upload">
                    <button className='header__button' type='button'>
                        <img className='header__upload-img' src={upload} alt='upload icon' />
                        <span>UPLOAD</span>
                    </button>
                </Link>
                <img className="header__avatar-dt" src={profile} alt="Mohan Muruge Profile Avatar Image" />
            </header>

        </>
    )
}

export default Header;





// nav >
//     <ul><li>
//         <Link to="/home"><img className="header__logo" src={logo} alt="Logo" /></Link></li>
//         <li className='header__div--mobile'>
//             {/* <div > */}
//             <div className='header__search-bar' id='searchWrapper'>
//                 <input className='header__search-input' type='text' placeholder="Search" name="searchWrapper"></input>
//             </div>
//             <img className="header__avatar" src={profile} alt="Mohan Muruge Profile Avatar Image" />
//             {/* </div> */}

//             <div className='header__search-bar-dt' id='searchWrapper'>
//                 <input className='header__search-input' type='text' placeholder="Search" name="searchWrapper"></input>
//             </div></li>
//         <li>
//             <Link to="/upload">
//                 <button className='header__button' type='button'>
//                     <img className='header__upload-img' src={upload} alt='upload icon' />
//                     <span>UPLOAD</span>
//                 </button>
//             </Link>
//         </li>
//         <li>
//             <img className="header__avatar-dt" src={profile} alt="Mohan Muruge Profile Avatar Image" /></li>
//     </ul>
//                 </nav >
//             </header >