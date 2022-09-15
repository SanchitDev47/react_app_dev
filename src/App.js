import { useState } from 'react';
import './App.css';
import Expense from './compoenents/Expenses/Expense';
// import Expense from './compoenents/Expenses/Expense';

// import detailsObject from './detailsObject';

// import detailsObject from './detailsObject';
  
function App() {
  
  return(
<div className='App'>

  <Expense Items={expense}/>
</div>
  );
}
export default App;
