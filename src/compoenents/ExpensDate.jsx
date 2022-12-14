import React from 'react'
import '../App.css';
 
export default function ExpensDate(props)  {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',  {day:'2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-day__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
        </div>
    )
}
