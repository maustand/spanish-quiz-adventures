import { createContext, ReactNode, useState } from "react";

export interface SpanishQuizContextProps {
  assertedAnswersCount: number;
  questionActiveIndex: number;
  totalQuestions: number;
  isGameOver: boolean;
  incrementAssertedAnswersCount: () => void;
  showNextQuestion: () => void;
  setTotalAvailableQuestions: (totalOfQuestions: number) => void;
  restartQuiz: () => void;
}

export const SpanishQuizContext = createContext<SpanishQuizContextProps>(
  {} as SpanishQuizContextProps
);

export function SpanishQuizContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [assertedAnswersCount, setAssertedAnswersCount] = useState(0);
  const [questionActiveIndex, setQuestionActiveIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isGameOver, SetIsGameOver] = useState(false);

  function incrementAssertedAnswersCount() {
    setAssertedAnswersCount(assertedAnswersCount + 1);
  }

  function setTotalAvailableQuestions(questionsNum: number) {
    setTotalQuestions(questionsNum);
  }

  function showNextQuestion() {
    if (questionActiveIndex === totalQuestions - 1) {
      SetIsGameOver(true); // quizz has finished
    } else {
      setQuestionActiveIndex(questionActiveIndex + 1);
    }
  }

  function restartQuiz() {
    setAssertedAnswersCount(0);
    setQuestionActiveIndex(0);
    SetIsGameOver(false);
  }

  return (
    <SpanishQuizContext.Provider
      value={{
        assertedAnswersCount,
        questionActiveIndex,
        totalQuestions,
        isGameOver,
        incrementAssertedAnswersCount,
        showNextQuestion,
        setTotalAvailableQuestions,
        restartQuiz,
      }}
    >
      {children}
    </SpanishQuizContext.Provider>
  );
}
