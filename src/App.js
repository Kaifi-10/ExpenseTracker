
import './App.css';
import AppBody from './components/AppBody/AppBody';
import AppHead from './components/AppHead/AppHead';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';


function App() {

  const [money, setMoney] = useState({
    balance: 4500,
    expenses: 500
  })


  return (
    <div >
      <Navbar />
      <AppHead balance={money.balance} expenses={money.expenses}/>
      <AppBody />
      
      
    </div>
  );
}

export default App;
