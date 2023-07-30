import './Comments.scss';
import profile from '../../assets/images/Mohan-muruge.jpg';
import add from '../../assets/images/add_comment.svg';


function Comments() {
    return (
        <section className='comments'>
            <span className="comments__counter">3 Comments</span>
            <form id="comments__form" class="comments__form">
                <label for="comments__profile-img">
                    <input id="comments__profile-img" class="comments__profile-img" type="image" name="image"
                        src={profile} alt="Mohan muruge side profile picture" />
                </label>
                <div className="comments__container">
                    <label for="comments__input-message" className="comments__input-label">JOIN THE CONVERSATION
                        <input className="comments__input-message" type="text" placeholder="Add a new comment" name="comment"></input></label>
                    <button className='comments__button' type='button'>
                        <img className='comments__add-img' src={add} alt='add comment icon' />
                        <span>COMMENT</span>
                    </button>

                </div>
            </form>
            <article className="comments__card">
                <div className="comments__avatar"></div>
                <div className="comments__body">
                    <div className="comments__header">
                        <h4 className="comments__name">Micheal Lyons</h4>
                        <span className="comments__date">08/09/2021</span>
                    </div>
                    <p className="comments__comment">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
                </div>
            </article>
        </section >
    )
}

export default Comments;