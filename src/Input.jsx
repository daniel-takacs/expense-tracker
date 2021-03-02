import React, {useState} from 'react';
import './App.css'

const initialVales = {
    text: "",
    amount: 0
}

function Input() {

    const [values, setValues] = useState(initialVales);


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
            <form>
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
                <button type="submit" onClick={addExpense}> Add Expenses </button>
            </form>
            
        </div>
    )
}

export default Input
