import { memo, useContext, useEffect, useState } from "react";
import { SpanishQuizContext } from "../../contexts/SpanishQuizContext";
import { Question } from "../../models/question";
import QuestionsService from "../../services/questions.service";
import LoaderSpinner from "../common/loaderSpinner/LoaderSpinner";
import QuizzResult from "../quizzResult/QuizzResult";
import QuestionCard from "./questionCard/QuestionCard";

function SpanishQuiz() {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const sharedContext = useContext(SpanishQuizContext);

  useEffect(() => {
    async function fetchData() {
      const questionsList = await QuestionsService.getQuestions();
      await new Promise((resolve) => setTimeout(resolve, 700)); // delay response
      setQuestions(questionsList);
      setIsLoaded(true);
      sharedContext.setTotalAvailableQuestions(questionsList.length);
    }
    fetchData();
  }, []);

  return (
    <>
      {!isLoaded ? (
        <LoaderSpinner />
      ) : sharedContext.isGameOver ? (
        <QuizzResult />
      ) : (
        <>
          {questions.map((item: Question, index) => (
            <QuestionCard
              key={`question-card${index}`}
              isActive={sharedContext?.questionActiveIndex === index}
              question={item}
            />
          ))}
        </>
      )}
    </>
  );
}

export default memo(SpanishQuiz);
