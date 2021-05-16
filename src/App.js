import React from 'react'
import NavBar from './NavBar';
import {NewsContextProvider} from './NewsContext'
import News from './components/News'
import Footer from './components/Footer'
import './css/app.css'
import './css/fonts.css'

function App() {

  return (
      <NewsContextProvider>
        <News/>
        <Footer/>
      </NewsContextProvider>
  );
}

export default App;
