import React from 'react'

function ExpenseItem({expenses, index, removeExpenses}) {
    
 
    const clickHandle = (e) => {
        e.preventDefault();
        removeExpenses(index)
    }
  
    return (
        <div className="expense-item">
            
            <li>{expenses.textInput}</li>
            <li>{expenses.date}</li>
            <li>{expenses.amount}€</li>
            <button onClick={clickHandle}>x</button>
        </div>
    )
}

export default ExpenseItem
