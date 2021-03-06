import React, {useState} from 'react';

function Form() {

    const [input, setInput] = useState("");
    const [expenses, setExpenses] = useState([]);
    
    const handleChange = (e)=> {
        setInput(e.target.value)
    }
    const addExpense = (e)=> {
        e.preventDefault()
        setExpenses([...expenses, {key: Math.random(), text: input}])
        setInput("")
        console.log(expenses)
    }
    const a = expenses.map(expense =>(
        <li>{expense.text}</li>
    ))
    return (
        <div className="flex">
            <form>
                <label htmlFor="">Name
                    <input  type="text" 
                            name="text"
                            value={input} 
                            onChange={handleChange}/>
                </label>
                <label>Date
                    <input type="date"/>
                </label>
                <label htmlFor="">Amount
                    <input  type="text" 
                            name="amount"
                            
                            />
                </label>
                <button onClick={addExpense}type="submit"> Add Expenses </button>
            </form>
           <ul>
               {a}
           </ul>
        </div>
    )
}

export default Form

