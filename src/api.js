import axios from 'axios'

const myApi = axios.create({
    baseURL: "https://nc-news-zcdp.onrender.com/api",
});

export const getArticles = () => {
    return myApi
        .get("/articles")
        .then((response) => response.data.articles)
};

export const getSingleArticleById = (article_id) => {
    return myApi
        .get(`/articles/${article_id}`)
        .then((response) => response.data.article)
}

export const getArticleComments = (article_id) => {
    return myApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => response.data.comments)
}

export const addArticleVote = (article_id, increment) => {
    return myApi
    .patch(`/articles/${article_id}`, {inc_votes: increment})
    .then((response) => response.data.article);
}