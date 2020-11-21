import React from "react";

import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Footer from "./components/Footer/Footer";
import Recherche from "./components/Recherche/Recherche";

import "./App.css";
import Resultat from "./components/Resultat/Resultat";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Recherche />
      <Resultat />
      <Footer />
    </div>
  );
}

export default App;
