import './App.css';
import Form from './Form';
import React, {useState} from 'react';
import ExpenseList from './ExpenseList';


const initialState = [
  {
    textInput: 'Shopping',
    date: '2021-03-23',
    amount: 50 
  },
  {
    textInput: 'Car',
    date: '2021-03-23',
    amount: 100
  },
  {
    textInput: 'Insurance',
    date: '2021-03-23',
    amount: 550
  }
 
]

function App() {

  const [expenses, setExpenses] = useState(initialState)
  const [totalExpenses, setTotalExpenses] = useState(0)

  return (
    <div className="App">
    <h1>Total Expenses: {totalExpenses}</h1>
    <Form expenses={expenses} setExpenses={setExpenses}/>
    <ExpenseList expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
