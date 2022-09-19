import React, { useState } from 'react'
import ExpenseFrom from './ExpenseFrom'
import './NewExpenses.css'

export default function NewExpense(props) {
const [isEditing , setEditing] = useState(false);

const startEditingHandler = () => {
  setEditing(true)
}
  const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
    props.onAddExpense(expenseData);
    setEditing(true)
}

const stopEditinghandler = () => {
setEditing(false);
}
  return (
    <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expenses</button>}
            {isEditing && <ExpenseFrom 
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditinghandler}
            />}
    </div>
    )
}
