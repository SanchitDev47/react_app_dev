import React,{ useState } from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesAll from './ExpensesAll';



export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2022');



  // const [expenses ,setExpenses] =  useState('all')

  // const showAllExpenseHandler = selectedAll => {
  //   console.log(selectedAll);
  //   setExpenses(selectedAll);
  //     }
  //     const showAllExpense = props.items.map(expenses => {
  //     return expenses.items
  //   });




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



            {/* <ExpensesAll 
            showAllExpense={showAllExpenseHandler}
            onSelectedAll={showAllExpenseHandler}  
            /> */}


            <ExpensesFilter
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
);
}