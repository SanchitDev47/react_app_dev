import React,{useState} from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

export default function Expense(props) {
  
  const [filteredYear, setFilteredYear] = useState('2022');
  const filteredExpenses = props.items.filter(expenses => {
  return expenses.date.getFullYear().toString() === filteredYear });

  const filterItemsHandler = selectedItems => {
    setFilteredYear(selectedItems);
      }
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
        setFilteredItems(selectedYear);
      }

      return (
        <li>
        <Card className='expenses'>
           <ExpensesFilter
            selected={filteredYear} 
            allExpensesSelected={filterItemsHandler}
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
);
}