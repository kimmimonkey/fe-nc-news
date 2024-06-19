import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../../api";
import CommentCard from "../Comment-Components/CommentCard";
import Toggle from "../Toggle";

const CommentList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);
    const { article_id } = useParams();

    useEffect(() => {
        getArticleComments(article_id)
            .then((comments) => {
                setList(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)

            })
    }, [article_id])

    if (isLoading) {
        return <p> Loading.... </p>
    }

    return (
        <>
            <Toggle>
            <ul>
            <h4> Comments </h4>
                {list.map((comment) => (
                    <CommentCard key={comment.comment_id}
                        article={comment.article_id}
                        body={comment.body}
                        author={comment.author}
                        published={new Date(comment.created_at).toUTCString()}
                        votes={comment.votes}
                    />
                ))}
            </ul>
            </Toggle>
        </>
    )
}

export default CommentList;