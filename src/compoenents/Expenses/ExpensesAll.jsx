import React from 'react'
import ExpensItems from './ExpensItems'

export default function ExpensesAll(props) {

  return (
    
    <ul className="expenses-list">
    {props.items.map((expense) => (
                <ExpensItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}
            </ul>
  )
}
