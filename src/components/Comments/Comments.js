import './Comments.scss';
import profile from '../../assets/images/Mohan-muruge.jpg';


function Comments() {
    return (
        <section className='comments'>
            <span className="comments__counter">3 Comments</span>
            <form id="comments__form" class="comments__form">
                <label for="comments__profile-image">
                    <input id="comments__profile-image" class="comments__profile-image" type="image" name="image"
                        src={profile} alt="Mohan muruge side profile picture" />
                </label>
                <div className="comments__container">
                    <label for="comments__input-message" className="comments__input-label">JOIN THE CONVERSATION
                        <input className="comments__input-message" type="text" placeholder="Add a new comment" name="comment"></input></label>
                    <button className="comments__button" type='button'>COMMENT</button>
                </div>
            </form>
            <article className="comments__card">
                <img
                    className="comments__avatar"
                    src="https://img.icons8.com/ios/100/000000/test-account.png"
                    alt="Profile Avatar Image" />
                <div className="comments__body">
                    <div className="comments__header">
                        <h4 className="comments__name"></h4>
                        <span className="comments__date"></span>
                    </div>
                    <p className="comments__comment"></p>
                </div>
            </article>
        </section>
    )
}

export default Comments;