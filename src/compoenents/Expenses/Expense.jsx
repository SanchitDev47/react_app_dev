import React from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
        setFilteredYear(selectedYear);
      }
      const filteredExpenses = props.items.filter(expenses => {
      return expenses.date.getFullYear().toString() === filteredYear
    });
      return (
        <li>
        <Card className=" expenses ">
        <ExpensesFilter
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
    />
    <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
);
}