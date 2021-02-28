import React, {useState} from 'react'

function Form({ expenses, setInput, input, setAmountInput, setDateInput, setExpenses, setAmounts,
dates, amounts,  setDates, dateInput,amountInput}) {

 

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
            

            
        </div>
    )
}

export default Form

