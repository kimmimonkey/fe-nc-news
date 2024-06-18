import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import ArticleList from '../components/ArticleList'

function App() {


  return (
    <section>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path ="/articles" element = {<ArticleList/>} />
      </Routes>
    </section>
  )
}

export default App
