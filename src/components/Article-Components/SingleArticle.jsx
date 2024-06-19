import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import IndividualArticleCard from "./IndividualArticleCard"
import { getSingleArticleById } from "../../api"

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [singleArticle, setSingleArticle] = useState({})
    const { article_id } = useParams();


    useEffect(() => {
        getSingleArticleById(article_id)
            .then((article) => {
                setSingleArticle(article)
                setIsLoading(false)

            })
            .catch((err) => {
                return err
            })
    }, [article_id])

    if (isLoading) {
        return <p> Loading.... </p>
    }

    if (article_id) {
        return (
            <>
                <IndividualArticleCard
                    title={singleArticle.title}
                    author={singleArticle.author}
                    body={singleArticle.body}
                    topic={singleArticle.topic}
                    comments={singleArticle.comments}
                    published={new Date(singleArticle.created_at).toUTCString()}
                    img=<img src={singleArticle.article_img_url} alt="article image" width="100" height="100" />
                />
            </>
        )
    }

}

export default SingleArticle;
