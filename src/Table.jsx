import React from 'react';
import './App.css'

function Table() {
    return (
        <div className="flex">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Dentist</td>
                    <td>2.2.2021</td>
                    <td>70€</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
