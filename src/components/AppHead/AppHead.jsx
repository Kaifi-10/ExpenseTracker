import React from 'react'
import styles from './AppHead.module.css'
import Card from '../Card/Card'
import ExpensePieChart from '../ExpensePieChart/ExpensePieChart'

function AppHead() {
  return (
    <div className={styles.appContainer}>
        <div className={styles.content}>
            <div className={styles.card}>
                <Card />
                <Card />
            </div>
            <div className={styles.pieChart}>
                <ExpensePieChart />
            </div>
        </div>

    </div>
  )
}

export default AppHead