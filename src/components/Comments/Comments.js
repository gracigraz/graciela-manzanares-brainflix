import './Comments.scss';

function Comments() {
    return (
        <article className="comment">
            <img
                className="comment__avatar"
                src="https://img.icons8.com/ios/100/000000/test-account.png"
                alt="Profile Avatar Image" />
            <div className="comment__body">
                <div className="comment__header">
                    <h4 className="comment__name"></h4>
                    <span className="comment__date"></span>
                </div>
                <p className="comment__message"></p>
            </div>
        </article>
    )
}

export default Comments;