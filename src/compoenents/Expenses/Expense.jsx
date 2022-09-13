import React,{ useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  // const [expenses ,setExpenses] =  useState('all expenses')

  // const showExpensesHandler = expensesSelected => {
  //   console.log(items.title)
  // }
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
        setFilteredYear(selectedYear);
      }
      const filteredExpenses = props.items.filter(expenses => {
      return expenses.date.getFullYear().toString() === filteredYear
    });
      return (
        <li>
        <Card className='expenses'>
            <ExpensesFilter
            selected={filteredYear} 
            // selected={showExpensesHandler}
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
);
}