import './App.css';
import Form from './Form';
import React from 'react';
import ExpenseList from './ExpenseList';


function App() {
 
  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <Form />
    <ExpenseList />
    </div>
  );
}

export default App;
