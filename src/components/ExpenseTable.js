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
            <td className="cell-expense-date">{expense.date}</td>
            <td className="cell-expense-location">{expense.location}</td>
            <td className="cell-expense-description">{expense.expense}</td>
            <td className="cell-expense-cost">{expense.cost}</td>
            <td className="cell-delete-button">
                <Button size="sm" variant="danger" onClick={() => handleDeleteButton(expense.id)}>X</Button>
            </td>
        </tr>
    );

    return (
        <Container id="expense-table">
            <Table hover >
                <thead>
                    <tr>
                        <th className="cell-expense-date">Date</th>
                        <th className="cell-expense-location">Location</th>
                        <th className="cell-expense-description">Expense</th>
                        <th className="cell-expense-cost">Cost</th>
                        <th className="cell-delete-button">Delete</th>
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