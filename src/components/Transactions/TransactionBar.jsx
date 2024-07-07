import React from 'react'
import foodIcon from '../../assets/food.svg'
import closeIcon from '../../assets/closeIcon.svg'
import editIcon from '../../assets/editIcon.svg'
import styles from './TransactionBar.module.css'

function TransactionBar() {
  return (
    <div>
        <div className={styles.TransactionBar}>
            <div className={styles.transactionContainer}>
                <span className={styles.icon}>
                    <img src={foodIcon}  alt='foodicon' />
                </span>
                <div className={styles.transactionText}>
                    <span className={styles.transactionName}> Samosa</span>
                    <span className={styles.transactionDate}>March 20, 2024</span>
                </div>
            </div>
            <div className={styles.transactionDetails}>
                <span className={styles.transactionAmount}>₹150</span>
                <div className={styles.buttonStyles}>
                    <button className={styles.closeIcon}><img src={closeIcon} alt='closeicon' /></button>
                    <button className={styles.editIcon}><img src={editIcon} alt='closeicon'/></button>  
                </div>
            </div>

        </div>
        <hr />
    </div>
    
  )
}

export default TransactionBar