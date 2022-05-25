import SpanishQuiz from "./components/spanishQuiz/SpanishQuiz";
import React from "react";

import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="container">

        <SpanishQuiz/>
      </div>
    </div>
  );
}

export default App;
