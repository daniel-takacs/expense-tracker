import React, {useState} from 'react';
import './App.css'

const initialValues = {
    text: "",
    amount: 0
}

function Input() {

    const [values, setValues] = useState(initialValues);


    const handleChange = (e)=> {
        const { name, value } = e.target;
        setValues({
            ...values, 
            [name]: value,
        });
    }
    const addExpense = (e)=> {
        e.preventDefault()
        console.log(values)
    }
    return (
        <div className="flex">
            <form onSubmit={addExpense}>
                <label htmlFor="">Name
                    <input  type="text" 
                            name="text"
                            value={values.text} 
                            onChange={handleChange}/>
                </label>
                <label>Date
                    <input type="date"/>
                </label>
                <label htmlFor="">Amount
                    <input  type="text" 
                            name="amount"
                            value={values.amount} 
                            onChange={handleChange}/>
                </label>
                <button type="submit"> Add Expenses </button>
            </form>
                <ul>
                    <li>{values.text}</li>
                    <span>{values.amount}</span>
                </ul>
            
        </div>
    )
}

export default Input
