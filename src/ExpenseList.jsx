import React from 'react';
import ExpenseItem from './ExpenseItem'


function ExpenseList({expenses, setExpenses}) {
    const removeExpenses = i => {
        let newArr = expenses.filter((v, index) => index !== i)
        setExpenses(newArr) 
    }
    return (
        <div className="expense-list">
            <ul>
                {expenses.map((value, index) => (
                    <ExpenseItem key={index} 
                                 expenses={value} 
                                 index={index} 
                                 setExpenses={setExpenses}
                                 removeExpenses={removeExpenses}/>
                ))}
            </ul>
            
        </div>
    )
    
    }

export default ExpenseList
