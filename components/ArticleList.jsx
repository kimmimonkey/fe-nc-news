import { useEffect, useState } from "react"; 
import ArticleCard from "./ArticleCard"


const ArticleList= () => {
    const [isLoading, setIsLoading] = useState(true);
    const [list , setList] = useState([]);



    useEffect(() => {
        console.log("useEffect triggered!")
        fetch("https://nc-news-zcdp.onrender.com/api/articles")
        .then((response) => response.json())
        .then((body) => {
            setList(body.articles);
            setIsLoading(false);
        });
    }, []);

if (isLoading) {
    return <p> Loading... </p>
}

    return (
        <section> 
        <h2> NC Articles </h2>
        <ul>
            {list.map((article) => <ArticleCard key = {article.article_id}
            title = {article.title}
            topic = {article.topic}
            author = {article.author}
            published = {article.created_at}
            img = <img src = {article.article_img_url} alt = {article.title} width = "100" height = "100"/>
            comments = {article.comment_count} /> )}
        </ul>
        </section>
    )



    }

    export default ArticleList;