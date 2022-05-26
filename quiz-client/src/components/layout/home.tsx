import React, { memo } from "react";
import SpanishQuiz from "../spanishQuiz/spanishQuiz";

function Home() {
  return (
    <main className="container">
      <SpanishQuiz />
    </main>
  );
}

export default memo(Home);
