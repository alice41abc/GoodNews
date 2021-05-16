import React, { createContext, useState, useEffect, } from 'react'
import axios from "axios"

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

    async function CallAPI(name) {
      let url = ''

      if (name === "recent"){
        url = 'https://www.reddit.com/r/upliftingnews/new.json?sort=new&limit=33&raw_json=1'
      } else if (name == "top-week") {
        url = 'https://www.reddit.com/r/upliftingnews/top.json?sort=top&limit=33&raw_json=1&t=week'
      } else if (name == "top-month") {
        url = 'https://www.reddit.com/r/upliftingnews/top.json?sort=top&limit=33&raw_json=1&t=month'
      } else if (name == "top-all") {
        url = 'https://www.reddit.com/r/upliftingnews/top.json?sort=top&limit=33&raw_json=1&t=all'
      } else if (name == 'good-laughs') {
        url = 'https://www.reddit.com/r/ContagiousLaughter/top.json?sort=top&limit=33&raw_json=1&t=week'
      }
      await axios.get(url).then((response) => {
        setData(response.data.data.children);
      })
      .catch((error) => console.log(error));
    }
    useEffect( () => {
      axios.get("https://www.reddit.com/r/upliftingnews/new.json?sort=new&limit=33&raw_json=1").then((response) => {
        setData(response.data.data.children);
      })
      .catch((error) => console.log(error));
      }, []
    )
  return (
    <div>
    <img className="title" src="/logo.png"></img>
    <span className="buttons">
      <p className="button" onClick={()=>CallAPI('recent')} >Recent&nbsp;✨</p>
      <p className="button" onClick={()=>CallAPI('top-week')}>Top-Week&nbsp;📈</p>
      <p className="button" onClick={()=>CallAPI('top-month')}>Top-Month&nbsp;🔝</p>
      <p className="button" onClick={()=>CallAPI('top-all')}>Top-All Time&nbsp;🏆</p>
      <p className="button" href="#about" onClick={()=>CallAPI('good-laughs')}>Good Laughs&nbsp;📺</p>
    </span>

    <NewsContext.Provider value={{data}}>
      {props.children}
    </NewsContext.Provider>
    </div>
  );
};