// import React,{useState} from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesChart from './ExpensesChart';
import ExpensItems from './ExpensItems';
// 
export default function Expense(props) {
//   function showExpenseItems(event){
//     props.onChangeFilter(event.target.value)
// }   
  // function filterItemHandler(){
  // console.log(props.items)
  // }
  // const [filteredItem, setFilteredItem] = useState('');

  // const filterChangeHandler = selectedItem => {
  // setFilteredItem(selectedItem);
 //} /// and this code present selected year items using useState of setFilteredyear

// const filteredExpenses = props.items.filter(expenses => {
//     console.log('get clicked', expenses);
//   }
// const HandleClick = () => {
//   console.log('get clicked');
// }

  // return expenses.date.getFullYear().toString() === filteredYear 
  // }); // this props.items use for pass data to app.js and expense.js like this items={filteredExpenses}

    // const deleteItemHandler = () => {
    //     // setDeleteText('(Deleted!)');

    //     props.onDelete(props.title);
    //     clickHandler();
    //   };


    return (
            <ul className="expenses-list">
                <li>
                <Card className='expenses'>
                  <ExpensesChart />  
              {props.items.map((expenses) => (
                <ExpensItems
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
                />))}
                </Card>
                </li>
                </ul>
                );
          }