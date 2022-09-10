import React from 'react'
import '../App.css';
import ExpensDate from './ExpensDate'
import Card from './Card';

export default function ExpensItems(props) {
    return (
    <Card className='expense-item'>
        <ExpensDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    )
}


