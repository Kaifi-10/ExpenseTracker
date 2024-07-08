import React from 'react'
import Transaction from '../Transactions/Transaction'
import Expense from '../Expense/Expense'
import styles from './AppBody.module.css'

function AppBody() {
  return (
    <div className={styles.container}>
        <Transaction />
        <Expense />
    </div>
  )
}

export default AppBody