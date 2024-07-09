import React from 'react'
import styles from './Card.module.css'
import Modal from '../ExpenseForm/Modal';
import { useState, useContext } from 'react';
import { AllContext } from '../AllContext';


function Card({text, value, setExpenses, addTransaction}) {


    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('');
    // const [balance, setBalance] = useState(value)
    // const [expenses, setExpenses] = useState([]);
    const { balance, expenses, handleAddIncome, handleAddExpense } = useContext(AllContext);

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

//   const handleAddIncome = (income) => { // added
//     setBalance(balance + income);
//     handleCloseModal();
//     };

//     const handleAddExpense = (expense) => { // added
//         const newExpense = parseFloat(expense.price);
//         setBalance(balance - newExpense);
//         setExpenses(prevExpenses => [...prevExpenses, expense]);
//         addTransaction(expense); // added
//         handleCloseModal();
//       };

  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardText}>
            <span className={styles.text}>{text}: <span className={text === "Expenses" ? styles.amountRed : styles.amountGreen}>₹{text === "Expenses" ? expenses : balance}</span></span>
            
            <button 
          className={text === "Expenses" ? styles.cardButtonRed : styles.cardButtonGreen}
          onClick={() => handleOpenModal(text === "Expenses" ? "Add Expense" : "Add Income")}
        >
          +Add {text === "Expenses" ? "Expenses" : "Income"}
        </button>
      </div>
      <Modal 
        isOpen={showModal} 
        onRequestClose={handleCloseModal} 
        formType={formType}
        existingData={null}
        handleAddIncome={handleAddIncome}
        handleAddExpense={handleAddExpense}
      />
        
    </div>
  )
}

export default Card