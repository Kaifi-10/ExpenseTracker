import { createContext, useState } from 'react';
import { v1 as uuidv4 } from 'uuid';


export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(5000); // Example initial balance
  const [expenses, setExpenses] = useState(0)

  const addTransaction = (transaction) => {
    const transactionWithId = { ...transaction, id: uuidv4() };
    setTransactions((prevTransactions) => [transactionWithId, ...prevTransactions]);
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
  
    // addTransaction(expense);
    addTransaction({ ...expense, id: uuidv4() });
  };

  const handleEditExpense = (editedExpense) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === editedExpense.id ? editedExpense : transaction
      )
    );

    const oldExpense = transactions.find((t) => t.id === editedExpense.id);
    const priceDifference = parseFloat(editedExpense.price) - parseFloat(oldExpense.price);

    setExpenses((prevExpenses) => prevExpenses + priceDifference);
    setBalance((prevBalance) => prevBalance - priceDifference);
  };


  return (
    <AllContext.Provider value={{
      transactions,
      balance,
      expenses,
      handleAddIncome,
      handleAddExpense,
      handleEditExpense,
      addTransaction 
    }}>
      {children}
    </AllContext.Provider>
    
  );
};
