import { Question } from "../../interfaces/question";
import QuestionsService from "../../services/questions.service";
import React, { memo, useEffect, useState } from "react";

function SpanishQuiz() {
  const [questions, setQuestions] = useState<Array<Question>>([]);

  useEffect(() => {
    async function fetchData() {
      const questionsList = await QuestionsService.getQuestions();
      setQuestions(questionsList);
    }

    fetchData();
  }, [setQuestions]);

  return (
    <div className="text-centerm">
      {questions.map((item: Question, index) => (
        <div
          key={item.id}
          className="card mb-3 mx-auto rounded-3 shadow"
          style={{ width: "35rem" }}
        >
          <div className="card-body">
            <h4>
              Question {index + 1}/{questions.length}{" "}
            </h4>
            <img
              src={item.img}
              className="rounded mx-auto d-block"
              alt="Girl in a jacket"
              width="200"
              height="200"
            />

            <h5 className="card-title text-center">{item.question}</h5>

            <div className="d-flex">
              <ul>
                <li>{item.answer}</li>
                {item.options.map((option) => (
                  <li>{option}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(SpanishQuiz);
