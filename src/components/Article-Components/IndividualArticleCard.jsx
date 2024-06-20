import ButtonLink from "../ButtonLink"
import CommentList from "../Comment-Components/CommentList";

const IndividualArticleCard = ({ article_id, title, author, body, topic, votes, comments, onVote, published, img }) => {
    return (
        <article>
            <header>
                {img}
                <h2> {title} </h2> <h3> by {author} </h3> 
                <p> {published} </p>
                </header>
                <section>
                {body}
                </section>
                <p> {`${votes} votes`}</p>
                <button onClick={() => onVote(1)}> Like </button> 
                <button onClick={() => onVote(-1)}> Dislike </button>
                <ButtonLink to = {'/'}> NC News Home </ButtonLink>/
                <CommentList/>
                </article>
    );
}

export default IndividualArticleCard;