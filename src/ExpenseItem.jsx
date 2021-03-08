import React from 'react'
import styled from 'styled-components'

const ExpenseItemContainer = styled.div `
    display: flex;
`
function ExpenseItem({expenses, index}) {
    return (
        <ExpenseItemContainer>
            <div>{expenses.textInput}</div>
            <div>{expenses.amount}</div>
            <div>{expenses.date}</div>
        </ExpenseItemContainer>
    )
}

export default ExpenseItem
