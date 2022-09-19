import { useState } from 'react';
import Expense from './compoenents/Expenses/Expense';
import NewExpense from './compoenents/NewExpense/NewExpense'
import './App.css';
  
export default function App() {

  const DUMMEY_EXPENSES = [ 
    {
          id:'e1',
          title: 'A Book',
          amount: 50.70, 
          date: new Date(2021, 2, 23)
        },
        {
          id:'e2',
          title: 'Home Lone',
          amount: 15000, 
          date: new Date(2022, 3, 15) 
        },
        {
          id:'e3',
          title: 'A Bike ',
          amount: 120000, 
          date: new Date(2021, 8, 12)
        },
        {
          id:'e4',
          title: 'A Loptop',
          amount: 68000,
          date: new Date(2019, 3, 1)
      },
      ];
    
  const [expenses, setExpenses] = useState(DUMMEY_EXPENSES);   
  
  const addExpenseHandler = expense => {
      setExpenses((prevExpenses) => {
        return [ expense, ...prevExpenses ];
      });
        console.log(expense)
    };

  return(
<div className='App'>
<NewExpense onAddExpense={addExpenseHandler}/>
<Expense items={expenses} /> {/* this items comess from expensesItems ->  ExpensesList -> expense -> app.js */}

</div>
  );
  
}
