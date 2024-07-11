import React from 'react'
import foodIcon from '../../assets/food.svg'
import closeIcon from '../../assets/closeIcon.svg'
import editIcon from '../../assets/editIcon.svg'
import styles from './TransactionBar.module.css'
import movieIcon from '../../assets/movie.svg'
import travelIcon from '../../assets/travel.svg'
import { useState, useContext } from 'react'
import Modal from '../ExpenseForm/Modal'
import { AllContext } from '../AllContext'

function TransactionBar(props) {
    console.log("transactionalBar PROPS:",props)
    const {id, name, date, category, price } = props
    const { deleteTransaction } = useContext(AllContext)
    const {transactions} = useContext(AllContext)

    console.log("transactionBar transactions:",transactions)
    

    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteTransaction(id);
  };

    const selectIcon = () =>{
        if(category === "food") return foodIcon;
        if(category === "entertainment") return movieIcon;
        if(category === "travel") return travelIcon;
    }


    
  return (
    <div>
        <div className={styles.TransactionBar}>
            <div className={styles.transactionContainer}>
                <span className={styles.icon}>
                    <img src={selectIcon()}  alt={id} />
                </span>
                <div className={styles.transactionText}>
                    <span className={styles.transactionName}> {name}</span>
                    <span className={styles.transactionDate}>{date}</span>
                </div>
            </div>
            <div className={styles.transactionDetails}>
                <span className={styles.transactionAmount}>₹{price}</span>
                <div className={styles.buttonStyles}>
                    <button className={styles.closeIcon} onClick={handleDelete}><img src={closeIcon} alt='closeicon' /></button>
                    <button className={styles.editIcon} onClick={handleOpenModal} ><img src={editIcon} alt='closeicon'/></button>  
                </div>
            </div>

        </div>
        <hr />
        <Modal 
        isOpen={showModal} 
        onRequestClose={handleCloseModal} 
        formType="Edit Expense"
        existingData={{ id, name, date, category, price }}
      />
    </div>
    
    
  )
}

export default TransactionBar