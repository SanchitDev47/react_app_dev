import React from 'react'
import ExpensItems from './ExpensItems';

export default function ExpensesList(props) {
  try{
  if(props.items.length === 0 ) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
 }
 
 return (
   <ul className="expenses-list">
     {props.items.map((expenses) => (
                          <ExpensItems
                          key={expenses.id}
                          title={expenses.title}
                          amount={expenses.amount}
                          date={expenses.date}
                          />
 ))}
                      </ul>
          )
        }catch(e){
          console.log(e);
        }
}
