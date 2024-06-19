import ButtonLink from "../components/ButtonLink"

const CommentCard = ({article_id, comment_id, body, author, published, votes}) => {
    return (
    <article>
    <main> 
        {body}
        </main>
        <p>Comment posted {published} by {author} </p>
        <p> {`${votes} votes`}</p>
    </article>)
}

export default CommentCard;