import './Comments.scss';
import profile from '../../assets/images/Mohan-muruge.jpg';
import add from '../../assets/images/add_comment.svg';



function Comments({ selectedVideo }) {

    // Use map() HOF to create a new array of objects with name, date, and comment of each of the people that commented on a certain video (commenter)
    const commentsDetails = selectedVideo.comments.map(comment => {
        //declaring a variable to make it easier to use the datestamp. Here I convert the timestamp from epoch to month/day/year 2 digit for the month, 2 digt for the dy, 4 digit for the year
        const date = new Date(comment.timestamp).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

        return {
            name: comment.name,
            date: date,
            comment: comment.comment
        };
    });


    return (
        <section className='comments'>
            <span className="comments__counter">{selectedVideo.comments.length} Comments</span>
            <form id="comments__form" className="comments__form">
                <label htmlFor="comments__profile-img">
                    <input id="comments__profile-img" className="comments__profile-img" type="image" name="image"
                        src={profile} alt="Mohan muruge side profile picture" />
                </label>
                <div className="comments__container">
                    <label htmlFor="comments__input-message" className="comments__input-label">JOIN THE CONVERSATION
                        <input className="comments__input-message" type="text" placeholder="Add a new comment" name="comment"></input></label>
                    <button className='comments__button' type='button'>
                        <img className='comments__add-img' src={add} alt='add comment icon' />
                        <span>COMMENT</span>
                    </button>

                </div>
            </form>
            {/* Rendering the comments per video */}
            {commentsDetails.map((commentDetails, id) => (
                <article key={id} className="comments__card">
                    <div className="comments__avatar"></div>
                    <div className="comments__body">
                        <div className="comments__header">
                            <h4 className="comments__name">{commentDetails.name}</h4>
                            <span className="comments__date">{commentDetails.date}</span>
                        </div>
                        <p className="comments__comment">{commentDetails.comment}</p>
                    </div>
                </article>
            ))}
        </section >
    )
}

export default Comments;


{/* <section className='comments'>
<span className="comments__counter">3 Comments</span>
<form id="comments__form" className="comments__form">
    <label htmlFor="comments__profile-img">
        <input id="comments__profile-img" className="comments__profile-img" type="image" name="image"
            src={profile} alt="Mohan muruge side profile picture" />
    </label>
    <div className="comments__container">
        <label htmlFor="comments__input-message" className="comments__input-label">JOIN THE CONVERSATION
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
</section > */}