import { memo } from "react";
import styles from "./answerOption.module.css";

type AnswerOptionProps = {
  correctAnswer: string;
  answer: string;
  index: number;
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
};

function AnswerOption({
  correctAnswer,
  selectedAnswer,
  answer,
  index,
  onSelectAnswer,
}: AnswerOptionProps) {
  const answerLetterMapping: Array<string> = ["A", "B", "C", "D"];

  const isWrong =
    selectedAnswer && selectedAnswer === answer && answer !== correctAnswer
      ? "bg-danger"
      : "";

  const isCorrectAnswer =
    selectedAnswer && correctAnswer === answer ? "bg-success" : "";

  return (
    <>
      <div
        className={`d-flex col-5 ps-2 py-2 m-2 border ${styles.answerOptionContainer} ${isWrong} ${isCorrectAnswer}`}
        onClick={() => onSelectAnswer(answer)}
      >
        <p
          className={`col-2 mb-0 me-2 border rounded text-center fw-semibold ${
            selectedAnswer && (isCorrectAnswer || isWrong)
              ? "text-light"
              : "text-secondary"
          }`}
        >
          {answerLetterMapping.at(index)}
        </p>
        <p className="col mb-0 text-capitalize">{answer}</p>
      </div>
    </>
  );
}

export default memo(AnswerOption);
