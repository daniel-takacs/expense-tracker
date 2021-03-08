import React from 'react';
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, setExpenses}) {
    
    return (
        <div>
        {expenses.map((value, index) => (
            <ExpenseItem key={index} expenses={value} index={index} />
        ))}
        </div>
    )
    }

export default ExpenseList
