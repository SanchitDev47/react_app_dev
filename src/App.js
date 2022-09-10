import './App.css';
import Expenses from './compoenents/Expenses';



function App() {
  return(
<div className='App'>
  <h1>React App Dev</h1>
  <Expenses items ={Expenses}/>
</div>
  );
}

export default App;
