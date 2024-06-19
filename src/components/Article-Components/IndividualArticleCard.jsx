import ButtonLink from "../ButtonLink"
import CommentList from "../Comment-Components/CommentList";

const IndividualArticleCard = ({ article_id, title, author, body, topic, comments, published, img }) => {
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
                <ButtonLink to = {'/'}> NC News Home </ButtonLink>
                {/* Button to vote for article */}
                <CommentList/>
               
        </article>
    )
}

export default IndividualArticleCard;