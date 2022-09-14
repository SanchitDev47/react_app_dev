import { useState } from 'react';
import './App.css';
// import ExpensesList from './compoenents/Expenses/ExpensesList';
import NewExpense from './compoenents/NewExpense/NewExpense';
import Expense from './compoenents/Expenses/Expense';

import detailsObject from './detailsObject';
  
function App() {
  const [expense, setExpenses] = useState(detailsObject);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log('expensedsd', expense);
  };
  return(
<div className='App'>
  <NewExpense  onAddExpense={addExpenseHandler}/>
  <Expense items={expense}/>
  {/* <ExpensesList items= {expense} /> */}
</div>
  );
}
export default App;
