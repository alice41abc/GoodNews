import React, {useContext} from 'react'
import {NewsContext} from '../NewsContext'


function Footer() {
  const {data} = useContext(NewsContext);
  return (
    <div>{data? <div className="footer"> <p>A &nbsp; 🎐&nbsp; V</p> </div>:<div/>}</div>
  )

}

export default Footer