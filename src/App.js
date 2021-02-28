import './App.css';
import ExpenseList from './ExpenseList';
import Form from './Form';
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [amountInput, setAmountInput] = useState('');
  const [amounts, setAmounts] = useState([]);
  const [dateInput, setDateInput] = useState('');
  const [dates, setDates] = useState([]);

  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <Form input={input} setInput={setInput} setDateInput={setDateInput} dateInput={dateInput} amountInput={amountInput} amounts={amounts}
    setAmounts={setAmounts} setAmountInput={setAmountInput} dates={dates} setDates={setDates}/>
    <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
