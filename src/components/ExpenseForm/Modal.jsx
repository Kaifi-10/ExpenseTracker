import React, { useState } from "react";
import ReactModal from "react-modal";
import ExpenseForm from "./ExpenseForm";
import styles from './ExpenseForm.module.css'

function Modal({ isOpen, onRequestClose, formType, existingData, handleAddIncome  }) {
  return (
    <div className={styles.modalBody}>
        <ReactModal 
        className={styles.modalText}
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={onRequestClose}
        >
            <div className={styles.modal}>
                <ExpenseForm 
                toggleModal={onRequestClose} 
                formType={formType} 
                existingData={existingData} 
                // onClick={onRequestClose}
                onRequestClose={onRequestClose}
                handleAddIncome={handleAddIncome}
                
            />

            </div>
        
        {/* <button className={styles.cancelButton} onClick={onRequestClose}>Cancel</button> */}
        {/* <ExpenseForm toggleModal={handleCloseModal} onRequestClose={handleCloseModal} /> */}
        </ReactModal>
    </div>
  );
}

export default Modal;

