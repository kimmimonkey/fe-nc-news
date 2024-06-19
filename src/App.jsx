import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import ArticleList from '../components/ArticleList'
import NavBar from '../components/NavBar'
import SingleArticle from '../components/SingleArticle'


function App() {


  return (
    <section>
      <NavBar/>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path ="/articles" element = {<ArticleList/>} />
        <Route path = "/articles/:article_id" element = {<SingleArticle/>} />
      </Routes>
    </section>
  )
}

export default App
