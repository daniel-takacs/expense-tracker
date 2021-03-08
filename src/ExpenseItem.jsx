import React from 'react'

function ExpenseItem({expenses, index}) {
    return (
        <div className="expense-item">
            <li>{expenses.textInput}</li>
            <li>{expenses.date}</li>
            <li>{expenses.amount}</li>
        </div>
    )
}

export default ExpenseItem
