import React,{ useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// 
export default function Expense(props) {
   // console.log('data', props.)
  
  const [filteredYear, setFilteredYear] = useState('2022');

              const filterChangeHandler = selectedYear => {
              setFilteredYear(selectedYear);
              } /// and this code present selected year items using useState of setFilteredyear
 
              const filteredExpenses = props.items.filter(expenses => {
              return expenses.date.getFullYear().toString() === filteredYear 
             }); // this props.items use for pass data to app.js and expense.js like this items={filteredExpenses}

                return (
                <li>
                <Card className='expenses'>
                <ExpensesFilter
                onChangeFilter={filterChangeHandler}  // and this props fetech from  expensesfilter component props.onChangefilter  data
                selected={filteredYear} 
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
                </Card>
                </li>
                );
             }