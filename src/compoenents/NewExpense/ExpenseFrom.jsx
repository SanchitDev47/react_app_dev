import React, { useState } from 'react'
import './NewExpenses.css'

export default function ExpenseFrom() {
    const [ enteredTitle , setEnteredTitle] = useState('');
    const [ enteredAmount , setEnteredAmount] = useState('');
    const [ enteredDate , setEnteredDate] = useState('');

    // const [userInput , setUserInput] = useState({ 
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })


    const titleChangeHandler = (event) => {
    setEnteredTitle ( event.target.value ) ;    
        //     setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // }}
    }
    const amountChangeHandler = (event) => {
    setEnteredAmount ( event.target.value ) ;    
        //     setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
    setEnteredDate ( event.target.value ) ;    
        //     setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

  const submitHandler = (event) =>{
    event.preventDefault();
        const expenseDate = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
        }
    console.log(expenseDate);
    enteredTitle('');
    enteredAmount('');
    enteredDate('');
    
  }   
  return (
        <form onSubmit={submitHandler}>
<div className="new-expense__controls">

    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" 
        value={enteredTitle}
        onChange={titleChangeHandler}/>
    </div>

    <div className="new-expense__control">
        <label>Amount</label>
        <input type='number'
        value={enteredAmount} 
        onChange={amountChangeHandler} 
        min="0.01" 
        step="0.01" />
    </div>

    <div className="new-expense__control">
        <label>Date</label>
        <input type='date'
        value={enteredDate}
        onChange={dateChangeHandler} 
        min="2019-0101" 
        max="22-12-31" 
        step="0.01" />
    </div>
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
    </div>
</div>
</form>
    )
}