import React, {useState, createContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/app.css';
import axios from 'axios'

export const NewsContext = createContext();

const NavBar = (props) => {
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
      url = 'https://www.reddit.com/r/ContagiousLaughter/top.json?sort=top&limit=33&raw_json=1&t=all'
    }
    await axios.get(url).then((response) => {
      setData(response.data.data.children);
    })
    .catch((error) => console.log(error));

    useEffect(() => {
      axios.get("https://www.reddit.com/r/upliftingnews/new.json?sort=new&limit=33&raw_json=1").then((response) => {
        setData(response.data.data.children);
      })
      .catch((error) => console.log(error));
      }, []
    )
    }
  return (
    <div>
      <ul>
        <p className="button" onClick={()=>CallAPI('recent')}><Link to="/News">Recent&nbsp;✨</Link></p>
        <p className="button" onClick={()=>CallAPI('top-week')}><Link to="/News">Top-Week&nbsp;📈</Link></p>
        <p className="button" onClick={()=>CallAPI('top-month')}><Link to="/News">Top-Month&nbsp;🔝</Link></p>
        <p className="button" onClick={()=>CallAPI('top-all')}><Link to="/News">Top-All Time&nbsp;🏆</Link></p>
        <p className="button" onClick={()=>CallAPI('good-laughs')}><Link to="/Laughs">Good Laughs&nbsp;📺</Link></p>
        {/* <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li> */}
     	</ul>
      <hr />
    <NewsContext.Provider value={{data}}>
      {props.children}
    </NewsContext.Provider>
    </div>
  );
};

export default NavBar;