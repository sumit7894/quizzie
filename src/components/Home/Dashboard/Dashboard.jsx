import React from 'react'
import styles from './dashboard.module.css'
const Dashboard = () => {
    const card =
    [
      {label:"Quiz",count:"12",subtitle:"Created",color:"#FF5D01"},
      {label:"questions",count:"110",subtitle:"Created",color:"#60B84B"},
      {label:"Total",count:"9k",subtitle:"Impressions",color:"#5076FF"}
    ]
  return (
    <div className={styles.dashboard__container}>
        <div className={styles.cards__container}>
          {card.map((item,index)=>(
            <div key={index} className={styles.dashboard__card} style={{color:item.color}}>
                <label>
                  <span className={styles.card__value}>{item.count}</span>
                {item.label}
                </label>
                <div className={styles.card__heading}>{item.subtitle}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Dashboard