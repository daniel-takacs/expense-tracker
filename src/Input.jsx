import React from 'react';
import './App.css'

function Input() {
    return (
        <div className="flex">
            <form>
            <label htmlFor="">Name<input type="text"/></label>
            <label>Date<input type="date"/></label>
            <label htmlFor="">Amount<input type="text"/></label>
            <input type="submit" value="Add Expense"/>
            </form>
        </div>
    )
}

export default Input
