import { createContext, useState, useEffect } from 'react';
import { v1 as uuidv4 } from 'uuid';


export const AllContext = createContext();

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};


export const AllProvider = ({ children }) => {
  // const [transactions, setTransactions] = useState([]);
  // const [balance, setBalance] = useState(5000); //  initial balance
  // const [expenses, setExpenses] = useState(0)

  const [transactions, setTransactions] = useLocalStorage('transactions', []);
  const [balance, setBalance] = useLocalStorage('balance', 5000);
  const [expenses, setExpenses] = useLocalStorage('expenses', 0);

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
    console.log("OLDEXPENSE",oldExpense)
    const priceDifference = parseFloat(editedExpense.price) - parseFloat(oldExpense.price);

    setExpenses((prevExpenses) => prevExpenses + priceDifference);
    setBalance((prevBalance) => prevBalance - priceDifference);
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(t => t.id === id);
    if (transactionToDelete) {
      setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
      setExpenses(prevExpenses => prevExpenses - parseFloat(transactionToDelete.price));
      setBalance(prevBalance => prevBalance + parseFloat(transactionToDelete.price));
    }
  };

  return (
    <AllContext.Provider value={{
      transactions,
      balance,
      expenses,
      handleAddIncome,
      handleAddExpense,
      handleEditExpense,
      deleteTransaction,
      addTransaction 
    }}>
      {children}
    </AllContext.Provider>
    
  );
};
