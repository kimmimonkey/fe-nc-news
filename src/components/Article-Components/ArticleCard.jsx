import "./ArticleCard.css"
import ButtonLink from "../ButtonLink"

const ArticleCard = ({article_id, title, topic, author, img, published, comments}) => {
    return (
    <main>

    <header> 
    <h3> {title} </h3>
    
    <section className = "subheader"> 
    <h4>by {author}</h4> {topic}
    </section>
    </header>

    <article>
    
    <section className = "article-img"> {img} </section>
    
    <section className = "details" >  {published}  <p>comments: {comments} </p></section>
   
    <section className = "links"><ButtonLink to = {`/articles/${article_id}`}> Read article </ButtonLink></section>
   
    </article>
    </main>
    )

}

export default ArticleCard