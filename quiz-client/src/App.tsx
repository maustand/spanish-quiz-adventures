import "./App.css";
import Header from "./components/layout/header";
import Home from "./components/layout/home";
import { SpanishQuizContextProvider } from "./contexts/SpanishQuizContext";

function App() {
  return (
    <div className="App">
      <SpanishQuizContextProvider>
        <Header />
        <Home />
      </SpanishQuizContextProvider>
    </div>
  );
}

export default App;
