import { useEffect, useState } from "react";
import { getArticles, addArticleVote } from "../../api"
import ArticleCard from "./ArticleCard"


const ArticleList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        getArticles()
            .then((articles) => {
                setList(articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (isLoading) {
        return <p> Loading... </p>
    }

    return (
        <section>
            <h2> NC Articles </h2>
            <ul>
                {list.map((article) => <ArticleCard key={article.article_id}
                    article_id={article.article_id}
                    title={article.title}
                    topic={article.topic}
                    author={article.author}
                    votes={article.votes}
                    published={new Date(article.created_at).toUTCString()}
                    img=<img src={article.article_img_url} alt="article image" width="100" height="100" />
                    comments={article.comment_count} 
                    onVote={addArticleVote}
                    />)}
            </ul>
        </section>
    )



}

export default ArticleList;