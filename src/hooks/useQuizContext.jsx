import { useContext } from "react";
import QuizContext from "../context/QuizContext";

const  useQuizContext= () => {
  return useContext(QuizContext);
};
export default useQuizContext;
