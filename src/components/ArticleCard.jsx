import ButtonLink from "../components/ButtonLink"

const ArticleCard = ({article_id, title, topic, author, img, published, comments}) => {
    return (
    <section>
    <header> 
    <h3> {title} </h3>
    <h4>by {author}</h4>
    </header>
    <article>
    <section> <p> {published} </p>
     <p> comments: {comments} </p> </section>
    <p> {topic} </p>
    <ButtonLink to = {`/articles/${article_id}`}> Read article </ButtonLink>
    <section> {img} </section>
    </article>
    </section>
    )

}

export default ArticleCard