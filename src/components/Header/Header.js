import './Header.scss';

function Header() {
    return (
        <>
             <header className="header">
                <img className="header__logo" src={"BrainFlix-logo.svg"} alt="Logo"/>
                <button type='button'><img src={'../assets/icons/upload.svg'} alt='upload icon'/>UPLOAD</button>
                <input type="text" placeholder="Search" name="search"></input>
                <img className="header__avatar" src={"./assests/images/Mohan-muruge.jpg"} alt={"Logo"}/>
            </header>
            

        </>
    )
}

export default Header;