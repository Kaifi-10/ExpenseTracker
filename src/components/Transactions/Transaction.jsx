import React from 'react'
import styles from './Transaction.module.css'
import TransactionBar from './TransactionBar'
import Pagination from './Pagination';
import { useState, useContext } from 'react';
import { dummyData } from './DummyData';
import Card from '../Card/Card';
import { AllContext } from '../AllContext';
import { v1 as uuidv1 } from 'uuid';

function Transaction() {
    
    // const {name, date, category, price} = dummyData
    // const [transactions, setTransactions] = useState(dummyData);
    // const [expenses, setExpenses] = useState([]);

    const { transactions } = useContext(AllContext);
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 4; // Number of transactions per page
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    // const addTransaction = (transaction) => { 
    //     setTransactions(prevTransactions => [transaction, ...prevTransactions]);
    //   }
  
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    const currentTransactions = transactions.slice(startIndex, endIndex);
    // const id = uuidv1()
  return (
    <div>
        <div className={styles.header}>
            Recent Transactions
            <div className={styles.container}>

              {!transactions.length ? (<div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    height: "100%",
                    fontSize: "1.5rem",
                  }}
                >
                  No transactions!
                </div>) : (
                  <>
                <div className={styles.bar}>
                    {/* <TransactionBar name={name} date={date} category={category} price={price}/> */}
                    {currentTransactions.map(transaction => (
                            <TransactionBar 
                                key={transaction.id}
                                id={transaction.id}
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
                </>
              )}
                
                
            </div>
        </div>
    </div>
  )
}

export default Transaction