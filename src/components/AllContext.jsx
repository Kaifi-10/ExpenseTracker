import { createContext, useState } from 'react';



export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(2000); // Example initial balance
  const [expenses, setExpenses] = useState(500)

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  const handleAddIncome = (income) => {
    setBalance((prevBalance) => prevBalance + parseFloat(income));
    // handleCloseModal();
  };

  const handleAddExpense = (expense) => {
    const newExpense = parseFloat(expense.price);
    // setExpenses((prevBalance) => prevBalance - newExpense);
    setExpenses((prevExpenses) => prevExpenses + newExpense); // update expenses correctly
    setBalance((prevBalance) => prevBalance - newExpense); // deduct the amount from the balance
  
    addTransaction(expense);
  };

  return (
    <AllContext.Provider value={{
      transactions,
      balance,
      expenses,
      handleAddIncome,
      handleAddExpense
    }}>
      {children}
    </AllContext.Provider>
    
  );
};
