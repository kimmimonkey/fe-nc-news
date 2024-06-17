

const ArticleCard = ({title, topic, author, img, published, comments}) => {
    return (
    <section>
    <h3> {title} by {author} </h3>
    <p> {published} {comments}</p>
    <p> {topic} </p>
    <section> </section>
    <section> {img} </section>
    </section>
    )

}

export default ArticleCard