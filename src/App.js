import { useState } from 'react';
import './App.css';
import Expenses from './compoenents/Expenses/Expense'
import NewExpense from './compoenents/NewExpense/NewExpense';

const DUMMY_EXPENSES = [ 
      {
        id:'e1',
        title: 'A Book',
        amount: 50.70, 
        date: new Date(2021, 2, 23) ,
      },
      {
        id:'e2',
        title: 'Home Lone',
        amount: 15000, 
        date: new Date(2022, 3, 15), 
      },
      {
        id:'e3',
        title: 'A Bike ',
        amount: 120000, 
        date: new Date(2021, 8, 12),
      },
      {
        id:'e4',
        title: 'A Loptop',
        amount: 68000,
        date: new Date(2019, 3, 1) ,
    },
  ];
  
  
  function App() {
    const [expense, setExpenses] = useState(DUMMY_EXPENSES);

    
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
};
  return(
<div className='App'>
  <NewExpense onAddExpense={addExpenseHandler}/>
  
  <Expenses items={expense}/>
</div>
  );
}

export default App;
