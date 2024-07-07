import React from 'react'
import styles from './Card.module.css'

function Card({text, value}) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardText}>
            <span className={styles.text}>{text}: <span className={text === "Expenses" ? styles.amountRed : styles.amountGreen}>₹{value}</span></span>
            
            <button className={text === "Expenses" ? styles.cardButtonRed : styles.cardButtonGreen}>+Add {text === "Expenses" ? "Expenses" : "Income"}</button>
        </div>
        
    </div>
  )
}

export default Card