import { memo, useContext } from "react";
import { SpanishQuizContext } from "../../contexts/SpanishQuizContext";

function QuizzResult() {
  const { assertedAnswersCount, totalQuestions, restartQuiz } =
    useContext(SpanishQuizContext);

  return (
    <div className="mx-auto">
      <p>
        Total good {assertedAnswersCount} / {totalQuestions}
      </p>

      <button
        type="button"
        onClick={() => restartQuiz()}
        className="btn btn-outline-primary"
      >
        Try Again ?
      </button>
    </div>
  );
}

export default memo(QuizzResult);
