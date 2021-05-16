import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

ReactDOM.render(
<App/>,
  document.getElementById('root')
);



// ReactDOM.render(
//   <Router>
//     <Routes />
//     <App/>
//   </Router>,
//   document.getElementById('root')
// );