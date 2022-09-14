import React from 'react'
import ExpensItems from './ExpensItems';
import detailsObject from '../../detailsObject';


export default function ExpensesList(props) {
  // let theItems = props.detailsObject;
// let [id,title,amount,date ] = detailsObject;
// const prtObject = props.items.map((expense)=> console.log(expense) )

  try {
    return (
        <ul className="expenses-list">
          {detailsObject.map((items) => (
                <ExpensItems
                key={items.id}
                title={items.title}
                amount={items.amount}
                date={items.date}
                />
              ))}

                 {/* <ExpensItems
                title={props.expense[0].title}
                date={props.expense[0].date}
                amount={props.expense[0].amount}
                /> */}
            </ul>
  )
  }
  catch(e) {
    console.log(e)
  }
}
