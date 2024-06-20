import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import IndividualArticleCard from "./IndividualArticleCard"
import { getSingleArticleById, addArticleVote } from "../../api"

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


    const updateVotes = (article_id, increment) => {
        addArticleVote(article_id, increment)
            .then((updatedArticle) => {
                setSingleArticle((article) => { return { ...article, votes: updatedArticle.votes } })
            })
            .catch((err) => {
                console.log(err)

            })
    }


if (isLoading) {
    return <p> Loading.... </p>
}

if (article_id) {
    return (
        <>
            <IndividualArticleCard
                article_id={singleArticle.article_id}
                title={singleArticle.title}
                author={singleArticle.author}
                body={singleArticle.body}
                topic={singleArticle.topic}
                comments={singleArticle.comments}
                votes={singleArticle.votes}
                published={new Date(singleArticle.created_at).toUTCString()}
                img=<img src={singleArticle.article_img_url} alt="article image" width="100" height="100" />
                onVote={(increment)=> updateVotes(singleArticle.article_id, increment)}

            />
        </>
    )
}

}

export default SingleArticle;
