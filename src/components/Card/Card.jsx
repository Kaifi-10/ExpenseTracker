import React from 'react'
import styles from './Card.module.css'
import Modal from '../ExpenseForm/Modal';
import { useState } from 'react';


function Card({text, value}) {


    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('');
    const [balance, setBalance] = useState(value)

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddIncome = (income) => { // added
    setBalance(balance + income);
    handleCloseModal();
    };

  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardText}>
            <span className={styles.text}>{text}: <span className={text === "Expenses" ? styles.amountRed : styles.amountGreen}>₹{balance}</span></span>
            
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
      />
        
    </div>
  )
}

export default Card