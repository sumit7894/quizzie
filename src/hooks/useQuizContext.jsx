import { useContext } from "react";
import QuizContext from "../context/QuizContext";

const  useQuizContest= () => {
  return useContext(QuizContext);
};
export default useQuizContest;
