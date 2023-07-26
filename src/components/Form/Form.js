import './Form.scss';

function Form() {
    return (
        <>
            <div className="input-group">
                <span className="input-group__wrapper">3 Comments</span>
                <img
                    className="input-group__avatar"
                    src="https://img.icons8.com/ios/100/000000/test-account.png"
                    alt="Profile Avatar Image" />
                    <label className="input-group__label">JOIN THE CONVERSATION</label>
                    <input className="input-group__comment" type="text" placeholder="Add a new comment" name="search"></input>
                    <button className="input-group__button" type='button'><img src={'../assets/icons/add-comment.svg'} alt={'add comment icon'}/>COMMENT</button>
                
            </div>


        </>
    )
}

export default Form;