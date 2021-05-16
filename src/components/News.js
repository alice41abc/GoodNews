import React, {useContext} from 'react'
import {NewsContext} from '../NewsContext'
import NewsArticle from './NewsArticle'

function News() {
  const {data} = useContext(NewsContext);
  return (
    <div className="all_news">
      {data ? data.map(news => (
    <NewsArticle data = {news}/>
  )) :  <div className="load"><img src="preloader.gif"/><span>f e t c h i n g &nbsp; n e w s...</span></div>}
  </div>
  )

}

export default News