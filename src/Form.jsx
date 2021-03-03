import React, {useState} from 'react';

const initialValues = {
    text: "",
    amount: 0
}
function Form() {

 
    const [values, setValues] = useState(initialValues);


    const handleChange = (e)=> {
        const { name, value } = e.target;
        setValues({
            ...values, 
            id: Math.random(),
            [name]: value,
        });
    }
    const addExpense = (e)=> {
        e.preventDefault()
        console.log(values)
    }
    const items = Object.entries(values);


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
        </div>
    )
}

export default Form

