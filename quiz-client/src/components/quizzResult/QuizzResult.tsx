import { memo, useContext } from "react";
import { SpanishQuizContext } from "../../contexts/SpanishQuizContext";
import styles from './quizzResult.module.css'

function QuizzResult() {
  const { assertedAnswersCount, totalQuestions, restartQuiz } =
    useContext(SpanishQuizContext);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <section className="text-center">
        <h1> Game Over !!</h1>
        <h4 className="my-4">
          Total Score: {assertedAnswersCount}/{totalQuestions}
        </h4>

        <button
          type="button"
          onClick={() => restartQuiz()}
          className={`btn btn-outline-primary ${styles.tryAgainBtn}`}
        >
          Try Again ?
        </button>
      </section>
    </div>
  );
}

export default memo(QuizzResult);
