import React, { useState } from 'react'
import useQuizContext from '../../../hooks/useQuizContext';
import styles from './quizsetup.module.css'
const QuizSetup = (props) => {
    const {setFormStep,quizType,setQuizType} = props;
    const {setShowCreateQuiz} = useQuizContext();
    const [quizName,setQuizName] = useState();
    const handleCancel =()=>{
      setShowCreateQuiz(false);
    }
    const handleCreate=()=>{
      setFormStep(1);
    }
    const handleQuizName =(e)=>{
      setQuizName(e.target.value);
    }
  return (
    <div className={styles.main__quiz__setup}>
        <div className={styles.form__container}>
          <input type='text'
          placeholder='Quiz name'
          value={quizName}
          onChange={handleQuizName}
          />
          <div className={styles.quiz__type__container}>
              <label>Quiz Type</label>
              <button onClick={()=>setQuizType("MCQ")}
              className={quizType === "MCQ" ? styles.active__button:styles.inactive__button}
              >
                Q&A
              </button>
              <button onClick={()=>setQuizType("POLL")}
              className={quizType === "POLL" ? styles.active__button:styles.inactive__button}
              >
                Poll Type
              </button>
          </div>
          <div className={styles.quiz__type__footer}>
            <button 
            onClick={handleCancel}
            className={styles.cancel__button}
            >
              Cancel
            </button>
            <button
            onClick={handleCreate}
            className={styles.create__button}
            >
              Create
            </button>
          </div>
        </div>
    </div>
  )
}
export default QuizSetup