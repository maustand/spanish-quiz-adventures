import axios from "axios";
import { Question } from "../models/question";

const QuestionsService = (() => {
  const entryPoint = `/questions`;

  function getQuestions(): Promise<Question[]> {
    return axios.get<Question[]>(`${entryPoint}`).then(({ data }) => data);
  }

  return { getQuestions };
})();

export default QuestionsService;
