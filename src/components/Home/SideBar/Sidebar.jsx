import React from 'react'
import styles from './sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={styles.sidebar__container}>
        <div className={styles.sidebar__logo}>QUIZZIE</div>
        <div className={styles.sidebar__buttons}>
            <button>Dashboard</button>
            <button>Analytics</button>
            <button>Create Quiz</button>
        </div>
        <div className={styles.sidebar__fotter}>
            <button className={styles.logout__button}>
            Logout
            </button>
        </div>
    </div>
  )
}

export default Sidebar