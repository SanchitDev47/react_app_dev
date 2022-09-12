import React from 'react'
import ExpenseFrom from './ExpenseFrom'
import './NewExpenses.css'



export default function NewExpense(props) {
const [isEditing , setEditing] = useState = (false);


const startEditingHandler = () => {
  setEditing(true)
}
  const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
    props.onAddExpense(expenseData)
}

  return (
    <div className='new-expense'>
            <!isEditing ExpenseFrom onSaveExpenseData={saveExpenseDataHandler}/>
            <button onClick={startEditingHandler}></button>
    </div>
    )
}
