import axios from 'axios'

export const getArticles = () => {
    return axios
        .get("https://nc-news-zcdp.onrender.com/api/articles")
        .then((response) => response.data.articles)
};



