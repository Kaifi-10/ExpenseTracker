import React from 'react'
import styles from './Transaction.module.css'
import TransactionBar from './TransactionBar'
import Pagination from './Pagination';
import { useState } from 'react';
import { dummyData } from './DummyData';

function Transaction() {
    
    const {name, date, category, price} = dummyData

    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 4; // Number of transactions per page
    const totalPages = Math.ceil(dummyData.length / transactionsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    const currentTransactions = dummyData.slice(startIndex, endIndex);

  return (
    <div>
        <div className={styles.header}>
            Recent Transactions
            <div className={styles.container}>
                <div className={styles.bar}>
                    {/* <TransactionBar name={name} date={date} category={category} price={price}/> */}
                    {currentTransactions.map(transaction => (
                            <TransactionBar 
                                key={transaction.id}
                                name={transaction.name}
                                date={transaction.date}
                                category={transaction.category}
                                price={transaction.price}
                            />
                        ))}
                    
                </div>
                <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
                />
            </div>
        </div>
    </div>
  )
}

export default Transaction