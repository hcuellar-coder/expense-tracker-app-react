import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function ExpenseTable(props) {
    const [expenseList, setExpenseList] = useState(props);

    function handleDeleteButton(id) {
        props.handleRemove(id);
    }

    useEffect(() => {
        setExpenseList(props);
    }, [props]);


    const expensesTable = expenseList.expenseListProp.map((expense) =>
        <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.location}</td>
            <td>{expense.expense}</td>
            <td>{expense.cost}</td>
            <td><Button variant="danger" onClick={() => handleDeleteButton(expense.id)}>X</Button></td>
        </tr>
    );


    return (
        <Container id="expense-table">
            <Table hover >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Expense</th>
                        <th>Cost</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expensesTable}
                </tbody>
            </Table>
        </Container>
    )
}

export default ExpenseTable;