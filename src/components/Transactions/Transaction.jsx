import React from 'react'
import styles from './Transaction.module.css'
import TransactionBar from './TransactionBar'

function Transaction() {
  return (
    <div>
        <div className={styles.header}>
            Recent Transactions
            <div className={styles.container}>
                <div className={styles.bar}>
                    <TransactionBar />
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Transaction