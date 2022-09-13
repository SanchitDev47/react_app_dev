import React,{ useState } from 'react';
import './Expenses.css';
import Card from './Card';
// import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// import ExpensesAll from './ExpensesAll';



export default function Expense(props) {
  // const [filteredYear, setFilteredYear] = useState('2022');
  // const [filteredItems, setFilteredItems] = useState(select);




  // const [expenses ,setExpenses] =  useState('all')

  // const showAllExpenseHandler = selectedAll => {
  //   console.log(selectedAll);
  //   setExpenses(selectedAll);
  //     }
  //     const showAllExpense = props.items.map(expenses => {
  //     return expenses.items
  //   });



  // const filterItemsHandler = selectedItems => {
  //       setFiltered(selectedItems);
  //     }
  // const filterChangeHandler = selectedYear => {
  //   console.log(selectedYear);
  //       setFilteredItems(selectedYear);
  //     }
  //     const filteredExpenses = props.items.filter(expenses => {
  //     return expenses.date.getFullYear().toString() === filteredYear
  //   });
      return (
        <li>
        <Card className='expenses'>
            {/* <ExpensesAll 
            showAllExpense={showAllExpenseHandler}
            onSelectedAll={showAllExpenseHandler}  
            /> */}
            {/* <ExpensesFilter
            selected={filteredYear} 
            allExpensesSelected={filterItemsHandler}
            onChangeFilter={filterChangeHandler}
            /> */}
            <ExpensesChart />
            <ExpensesList />
    </Card>
    </li>
);
}

// expenses={filteredExpenses} items={filteredExpenses} 