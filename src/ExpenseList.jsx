import React from 'react';
import ExpenseItem from './ExpenseItem'


function ExpenseList({expenses, setExpenses}) {
    
    return (
        <div className="expense-list">
            <ul>
                {expenses.map((value, index) => (
                    <ExpenseItem key={index} expenses={value} index={index} />
                ))}
            </ul>
        </div>
    )
    }

export default ExpenseList
