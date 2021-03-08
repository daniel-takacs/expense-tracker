import './App.css';
import Form from './Form';
import React, {useState} from 'react';
import ExpenseList from './ExpenseList';


function App() {
 
  const [expenses, setExpenses] = useState([])

  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <Form expenses={expenses} setExpenses={setExpenses}/>
    <ExpenseList expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
