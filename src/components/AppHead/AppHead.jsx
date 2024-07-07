import React from 'react'
import styles from './AppHead.module.css'
import Card from '../Card/Card'
import ExpensePieChart from '../ExpensePieChart/ExpensePieChart'

function AppHead({balance, expenses}) {
  return (
    <div className={styles.appContainer}>
        <div className={styles.content}>
            <div className={styles.card}>
                <Card text="Wallet Balance" value={balance}/>
                <Card text="Expenses" value={expenses}/>
            </div>
            <div className={styles.pieChart}>
                <ExpensePieChart />
            </div>
        </div>

    </div>
  )
}

export default AppHead