import { useState } from 'react';
import './App.css';
import NewExpense from './compoenents/NewExpense/NewExpense';
import Expense from './compoenents/Expenses/Expense';
import detailsObject from './detailsObject';

// import detailsObject from './detailsObject';
  
function App() {
  const [expense, setExpenses] = useState(detailsObject);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
      console.log(expense)
  };
  return(
<div className='App'>
  <NewExpense items={expense} onAddExpense={addExpenseHandler} />
  <Expense items={detailsObject} />
  {/* <ExpensesList items= {expense} /> */}
</div>
  );
}
export default App;
