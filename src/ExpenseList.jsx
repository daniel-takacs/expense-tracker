import React from 'react';
import Expense from './Expense'

function ExpenseList({expenses, setExpenses}) {
 
  return (
    <div className="expense-list">
        <ul>{expenses && expenses.map(expense => (
                <Expense expense={expense} expenses={expenses} 
                key={expense.key} text={expense.text} setExpenses={setExpenses}/>
            ))}
        </ul>
    </div>
  );
}

export default ExpenseList;
