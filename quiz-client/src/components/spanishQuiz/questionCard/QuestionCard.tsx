import { memo, useContext, useState } from "react";
import { SpanishQuizContext } from "../../../contexts/SpanishQuizContext";
import { Question } from "../../../models/question";
import AnswerOption from "./answerOption/AnswerOption";
import styles from "./questionCard.module.css";

type QuestionCardProps = {
  question: Question;
  isActive: boolean;
};

function QuestionCard({ question, isActive }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const sharedContext = useContext(SpanishQuizContext);

  const onSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (question.answer === answer) {
      sharedContext.incrementAssertedAnswersCount();
    }

    setTimeout(() => {
      sharedContext.showNextQuestion();
    }, 600);
  };

  return (
    <article
      className={`card mb-3 mx-auto rounded-4 shadow-lg ${styles.card} ${
        !isActive ? "d-none" : ""
      } `}
    >
      <div className="card-body">
        <p className="text-muted">
          Question {sharedContext.questionActiveIndex + 1}/
          {sharedContext.totalQuestions}
        </p>
        <img
          src={question.img}
          className="rounded mx-auto d-block"
          alt={question.question}
          width="200"
          height="200"
        />

        <h5 className="card-title text-center mt-2">{question.question}</h5>

        <div
          className={`d-flex flex-wrap justify-content-center ${
            selectedAnswer ? "pe-none" : ""
          }`}
        >
          {question.options.map((answerOption: string, index: number) => (
            <AnswerOption
              key={index + "possibleAnswer"}
              correctAnswer={question.answer}
              answer={answerOption}
              index={index}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={onSelectAnswer}
            ></AnswerOption>
          ))}
        </div>
      </div>
    </article>
  );
}

export default memo(QuestionCard);
