import React, {useRef} from 'react';
import './App.css'

function Form({expenses, setExpenses}) {

    const textInput = useRef("")
    const date = useRef(null)
    const amount = useRef(null)

    const AddExpense = (e)=> {
        e.preventDefault();
        setExpenses([...expenses, {
            textInput: textInput.current.value, 
            date: date.current.value,
            amount: amount.current.value
        }])
        
    }
    return (
        <div className="form">
            <form onSubmit={AddExpense}>
                <input type="text" ref={textInput} placeholder="expense"/>
                <input type="date" ref={date}/>
                <input type="text" ref={amount} placeholder="amount"/>
                <button>Add Expense</button>
            </form>
           
        </div>
    )
}

export default Form

