import React from "react";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import Recherche from "./components/Recherche";

import "./App.css";
import Resultat from "./components/Resultat/Resultat";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Recherche />
      <div>
        <h2 className="titreResultat">Results</h2>
      </div>
      <Resultat />
      <Footer />
    </div>
  );
}

export default App;
