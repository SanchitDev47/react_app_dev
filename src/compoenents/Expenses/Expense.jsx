import React from 'react';
import './Expenses.css';
import Card from './Card';
// import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import detailsObject from '../../detailsObject';
// import ExpensesChart from './ExpensesChart';



export default function Expense(props) {
//   const [filteredYear, setFilteredYear] = useState('2022');

    //   const filteredExpenses = props.items.filter(expenses => {
    //   return expenses.date.getFullYear().toString() === filteredYear
    // });
    

      return (
        <li>
        <Card className='expenses'>
          <ExpensesList Items={detailsObject}/>
          
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