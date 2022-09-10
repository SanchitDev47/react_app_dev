import React, { useState } from 'react'
import './NewExpenses.css'

export default function ExpenseFrom() {

    const [enteredTitle,setEnteredTitle] = useState('');


    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }

     
  return (
        <form action="">
<div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' onChange={amountChangeHandler} min="0.01" step="0.01" />
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type='date' onChange={dateChangeHandler} min="2019-0101" max="22-12-31" step="0.01" />
    </div>
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
    </div>
</div>
</form>
    )
}
