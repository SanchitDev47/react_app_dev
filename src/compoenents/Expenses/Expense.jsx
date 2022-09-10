import React from 'react'
import ExpensItems from './ExpensItems';
import './Expenses.css';
import Card from './Card';


const expenses = [ 
    {
        title: 'Car Insurance',
        amount: 294.23, 
        date: new Date(2021, 2, 23) ,
    },
    {
        title: 'Car Insurance',
        amount: 294.23, 
        date: new Date(2022, 3, 15), 
    },
    {
        title: 'Car Insurance',
        amount: 294.23, 
        date: new Date(2021, 8, 12),
    },
    {
        title: 'Car Insurance',
        amount: 294.23, 
        date: new Date(2019, 3, 1) ,
    },
];

// function printstuff(){expenses.map((array) => return array;)}


export default function Expenses() {
      return (
    <Card className=" expenses ">
            <ExpensItems
        title= {expenses[0].title}
        amount= {expenses[0].amount}
        date= {expenses[0].date}/>
      <ExpensItems
        title= {expenses[1].title}
        amount= {expenses[1].amount}
        date= {expenses[1].date}/>
      <ExpensItems
        title= {expenses[2].title}
        amount= {expenses[2].amount}
        date= {expenses[2].date}/>
      <ExpensItems
        title= {expenses[3].title}
        amount= {expenses[3].amount}
        date= {expenses[3].date}/>
</Card>
)
}