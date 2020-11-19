import React from 'react'

import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <div className="App">

        <Header/>
        <Presentation />
        <Recherche />
        <Footer />
    </div>

  );
}

export default App;
