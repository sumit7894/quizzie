import React from 'react'
import styles from './sidebar.module.css'
import useQuizContext from '../../../hooks/useQuizContext';
const Sidebar = () => {
  const {selectedMenu,setSelectedMenu} = useQuizContext();
  return (
    <div className={styles.sidebar__container}>
        <div className={styles.sidebar__logo}>QUIZZIE</div>
        <div className={styles.sidebar__buttons}>
            <button
            onClick={()=>setSelectedMenu(1)}
            className={selectedMenu ===1 && styles.active__sidebar__button}>
              Dashboard
            </button>
            <button
            onClick={()=>setSelectedMenu(2)}
            className={selectedMenu ===2 && styles.active__sidebar__button}
            >
             Analytics
            </button>
            <button
            onClick={()=>setSelectedMenu(3)}
            >
              Create Quiz
            </button>
        </div>
        <div className={styles.sidebar__footer}>
            <hr className={styles.sidebar__footer__line}/>
            <button className={styles.logout__button}>
            LOGOUT
            </button>
        </div>
    </div>
  )
}

export default Sidebar