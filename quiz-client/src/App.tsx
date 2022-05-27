import { useContext } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Home from "./components/layout/home";
import { SpanishQuizContext } from "./contexts/SpanishQuizContext";

function App() {
  const { isGameOver } = useContext(SpanishQuizContext);

  return (
    <div className={`${isGameOver ? "gameover-bg" : ""}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
