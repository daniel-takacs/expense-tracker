import React from 'react';
import Expense from './Expense'

function ExpenseList({expenses, setExpenses}) {

    return (
        <div>
            <ul>
                {expenses.map(expense => (
                    
                        <Expense expense={expense}
                                setExpenses={setExpenses}/>
                ))}
            
                </ul>
           
         
            
        </div>
    )
}

export default ExpenseList
