import React, {useState} from 'react'

function ExpenseList() {

    const [expenses, setExpenses] = useState(['Valami amerika']);
    const [input, setInput] = useState('');

    const handleChange = (e)=> {
        setInput(e.target.value)
        console.log('working')
    }
    const addExpense = (event)=>{
        setExpenses([...expenses, input])
        console.log('working')
    }
    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <button onClick={addExpense}>Add Expense</button>
            <ul>
                {expenses.map(expense => (
                    <li>{expense}</li>
                ))}
                <li>
                    
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
