import React from 'react'
import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardText}>
            <span className={styles.text}>Wallet Balance: <span className={styles.amount}>₹4500</span></span>
            
            <button className={styles.cardButton}>+Add Income</button>
        </div>
        
    </div>
  )
}

export default Card