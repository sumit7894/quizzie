import React, { useState } from 'react'
import styles from './createquiz.module.css'
import QuizSetup from '../../QuizForm/QuizSetup/QuizSetup';
import CreateMcq from '../../QuizForm/CreateMcq/CreateMcq';
import CreatePoll from '../../QuizForm/CreatePoll/CreatePoll';
import QuizLink from '../../QuizForm/QuizLink/QuizLink';
const CreateQuiz = () => {
  const [formStep,setFormStep] = useState(0);
  const [quizType,setQuizType] = useState();
  console.log("here is form step",formStep);
  return (
    <div className={styles.popup__overlay}>
      {formStep === 0 && (
        <QuizSetup
        quizType={quizType}
        setQuizType={setQuizType}
        setFormStep={setFormStep}/>
      )}
      {formStep ===1 && (
        quizType === "MCQ" ? <CreateMcq formStep={formStep}/>:<CreatePoll formStep={formStep}/>
      )}
      {formStep ===2 &&(
        <QuizLink/>
      )}
    </div>
  )
}
export default CreateQuiz