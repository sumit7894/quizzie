import React, { useEffect } from 'react'
import styles from './analytics.module.css'
import useQuizContext from '../../../hooks/useQuizContext'
// import { useNavigate } from 'react-router-dom';
const Analytics = () => {
  const {setSelectedMenu} = useQuizContext();
  // const navigate = useNavigate();
  
  const handleClick =()=>{
    setSelectedMenu(4);
    // navigate('/dashboard/analysis');
  }
  return (
    <div className={styles.analytics__container}>
    Analytics
    <button onClick={()=>handleClick()}>Go the the questions</button>
    </div>
  )
}

export default Analytics