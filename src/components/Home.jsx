import ArticleList from './Article-Components/ArticleList'
import Header from '/home/kim/Documents/Coding/front-end/fe-nc-news/src/components/Header.jsx'
import NavBar from './NavBar'

const Home = () => {
    return (
        <section> 
        <NavBar />
        <Header />
        <ArticleList />
        </section>
    )
}

export default Home