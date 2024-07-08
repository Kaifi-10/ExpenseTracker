import React from 'react'
import TopExpenseChart from './TopExpenseChart'
import styles from './Expense.module.css'

function Expense() {
  return (
    <div className={styles.topExpense}>
        <div className={styles.heading}>
            Top Expenses
        </div>
         <div className={styles.chart} >
         <TopExpenseChart />
         </div>
        
    </div>
  )
}

export default Expense