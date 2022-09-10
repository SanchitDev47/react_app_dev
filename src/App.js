import './App.css';
import Expenses from './compoenents/Expenses/Expense'
import NewExpense from './compoenents/NewExpense/NewExpense';




function App() {
  return(
<div className='App'>
  <NewExpense/>
  <Expenses items ={Expenses}/>
</div>
  );
}

export default App;
