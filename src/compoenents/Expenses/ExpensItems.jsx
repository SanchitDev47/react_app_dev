import { useState } from 'react';
import './Expenses.css';
import ExpensDate from './ExpensDate'
import Card from './Card';

export default function ExpensItems(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated');
        console.log(title)
      }
      
    
    return (
    <Card className='expense-item'>
        <ExpensDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>change contant</button>
        </div>
    </Card>
    )
}


