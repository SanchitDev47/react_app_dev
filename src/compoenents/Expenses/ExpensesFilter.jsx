import React from 'react';

///this compoenent build filter for expenses app that use for filter item
export default function ExpensesFilter(props) {
    function dropDownChangeHandler(event){
      props.onChangeFilter(event.target.value)
      console.log('Expense.jsx');

  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='1998'>1998</option>
        </select>
      </div>
    </div>
  )
  }