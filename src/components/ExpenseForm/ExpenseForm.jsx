import React from 'react'
import styles from './ExpenseForm.module.css'
import { useEffect, useState } from 'react';

function ExpenseForm(props) {

    const { toggleModal, formType, existingData, onRequestClose, handleAddIncome   } = props
    console.log(formType)


  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    date: ''
  });

  const [balanceFormData, setBalanceFormData] = useState({ income: '' });

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const handleIncomeChange = (e) => {
    setBalanceFormData({ income: +e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "Add Income") {
        handleAddIncome(balanceFormData.income); // added
    }
};


    const expenseAndEditInput = () => {
        return (
            <div className={styles.formInputsDiv}>
                <input 
                required
                value={formData.name}
                className={styles.formInput} 
                onChange={handleChange} 
                placeholder='Title' 
                type='text' 
                name='name'
                autoFocus
                />
                <input 
                required
                value={formData.price}
                className={styles.formInput} 
                onChange={handleChange} 
                placeholder='Price' 
                type='number' 
                name='price'
                />
                <select
                value={formData.category} 
                className= {styles.formInput}
                onChange={handleChange} 
                placeholder='Select Category' 
                name='category'>
                    <option value={null}>Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input 
                required
                value={formData.date}
                className={styles.formInput} 
                onChange={handleChange} 
                placeholder='dd/mm/yyyy' 
                type='date' 
                name='date'
                />
            </div>
        )
    } 
    const incomeInputs = () => {
        return (
            <div className={styles.balanceFormInputDiv}>
                <input 
                className={styles.formInput} 
                onChange={e=> setBalanceFormData({income: +e.target.value})} 
                placeholder='Income Amount' 
                type='number' 
                name='income' 
                value={balanceFormData.income}
                autoFocus
                required
                />
            </div>
        )
    }


  return (
    <div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
            <span className={styles.formHeading}>{formType=== "Add Income"? "Add Balance": formType}</span>
            <span className={styles.inputField}> 
                {formType === "Add Income" ? incomeInputs() : expenseAndEditInput()}
            </span>
            
            {/* <FormButtons text={formType} toggleModal={toggleModal}/> */}
            {/* <button type="submit">{formType === "Add Income" ? "Add Income" : "Add Expenses"}</button>
            <button type="button" onClick={onRequestClose}>Cancel</button> */}
            <div className={styles.formButtons}>
                    <button type="submit" className={styles.buttonSubmit}>{formType === "Add Income" ? "Add Income" : "Add Expenses"}</button>
                    <button type="button" onClick={onRequestClose} className={styles.buttonCancel}>Cancel</button>
                </div> 
        </form>

    </div>
  )
}

export default ExpenseForm