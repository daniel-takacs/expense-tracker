import React, {useState} from 'react'

function ExpenseList() {

    const [input, setInput] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [amountInput, setAmountInput] = useState('');
    const [amounts, setAmounts] = useState([]);
    const [dateInput, setDateInput] = useState('');
    const [dates, setDates] = useState([]);

    const handleChange = (e)=> {
        setInput(e.target.value)
        
    }
    const amountHandleChange = (e)=> {
        setAmountInput(e.target.value)
        
    }
    const dateHandleChange = (e)=> {
        setDateInput(e.target.value)
    }
    const addExpense = (e)=>{
        setExpenses([...expenses, input]);
        setAmounts([...amounts, amountInput]);
        setDates([...dates, dateInput]);
        setInput("");
        setDateInput("");
        setAmountInput("");
    }
    return (
        <div>
            <label>Expense</label><input type="text" value={input} onChange={handleChange}/><br></br>
            <input type="date" value={dateInput} onChange={dateHandleChange}/><br/>
            <label>Amount</label><input type="text" value={amountInput} onChange={amountHandleChange}/><br/>
            <button onClick={addExpense}>Add Expense</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>DAte</th>
                    <th>Amount</th>
                </tr>
                <tr>
                {expenses.map(expense => (
                    <td>{expense}</td>
                ))}
                {dates.map(date => (
                    <td>{date}</td>
                ))}
                {amounts.map(amount => (
                    <td>{amount}</td>
                ))}
                </tr>
               
            </table>
            
            
        </div>
    )
}

export default ExpenseList
