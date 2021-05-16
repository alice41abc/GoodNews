import React from 'react'
import 'moment-timezone';

function NewsArticle({data}) {
  var title = data.data.title;
  var titleFormatted = title;
  if (title.length > 100) {
    titleFormatted = title.slice(0, 100) + "...";
  }

  if (data.data.is_video && data.data.media){
    var link_url = data.data.media.reddit_video.fallback_url+'/audio'
    console.log(link_url)
  } else {
    var link_url = data.data.url

  }

  if(data.data.subreddit === "UpliftingNews"){
    var dateTime = new Date(data.data.created * 1000).toLocaleDateString().replaceAll("/", ".");
    var emoji = '🗞️'
  } else{
    console.log(data)
    var dateTime = '';
    var emoji ='🎥'
  }

  if (data.data.preview){
    var media_url = data.data.preview.images[0].source.url;
  } else {
    var media_url = "replace.jpg"
  }
  return (
    <section id="me">
    <div className="news">
      <h2 className="news_title"><a href={link_url}>{emoji}&nbsp;{titleFormatted}</a></h2>
      <h4 className="news_date">{dateTime}</h4>
      <img src={media_url} className="news_picture"/>
    </div>
    </section>
  )
}

export default NewsArticle


