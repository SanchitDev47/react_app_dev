import React from 'react';
import './Expenses.css';
import Card from './Card';
// import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';



export default function Expense(props) {
//   const [filteredYear, setFilteredYear] = useState('2022');

    //   const filteredExpenses = props.items.filter(expenses => {
    //   return expenses.date.getFullYear().toString() === filteredYear
    // });
    const listOfItems = props.expense;

      return (
        <li>
        <Card className='expenses'>
          <ExpensesList items={listOfItems}/>
           {/* <ExpensesFilter
            selected={filteredYear} 
            allExpensesSelected={filterItemsHandler}
            onChangeFilter={filterChangeHandler}
            /> */}
            {/* <ExpensesChart/> */}
    </Card>
    </li>
);
}