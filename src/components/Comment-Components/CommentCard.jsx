

const CommentCard = ({comment_id, body, author, published}) => {
    return (
    <article>
    <main> 
        {body}
        </main>
        <p>Comment posted {published} by {author} </p>
    </article>)
}

export default CommentCard;