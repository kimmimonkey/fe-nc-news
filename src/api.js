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

