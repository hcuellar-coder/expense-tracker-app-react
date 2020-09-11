import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            expense: '',
            location: '',
            cost: '',
            validated: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({ validated: true });
        }

        const randomID = Math.floor(Math.random() * 100);
        this.props.handleExpenseSubmit(randomID,
            this.state.date, this.state.location,
            this.state.expense, this.state.cost);

        this.setState({
            'date': '',
            'expense': '',
            'location': '',
            'cost': '',
            'validated': false
        });
    }

    render() {
        return (
            <Container className="expense-form">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} autoComplete="off">
                    <Form.Row className="align-items-center">
                        <Form.Group>
                            <Col>
                                <Form.Control
                                    required
                                    id="expense-date"
                                    type="date"
                                    name="date"
                                    value={this.state.date}
                                    onChange={this.handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a date!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col>
                                <Form.Control
                                    required
                                    id="expense-location"
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a location!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Col>
                                <Form.Control
                                    required
                                    id="expense-description"
                                    type="text"
                                    placeholder="Expense Description"
                                    name="expense"
                                    value={this.state.expense}
                                    onChange={this.handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a description!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col>
                                <Form.Control
                                    required
                                    id="expense-cost"
                                    type="number"
                                    step="0.01"
                                    min="0.01"
                                    placeholder="$000.00"
                                    name="cost"
                                    value={this.state.cost}
                                    onChange={this.handleChange} />
                                <Form.Control.Feedback type="invalid">Please provide a cost greater than 0!</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">Add</Button>
                        </Form.Group>
                    </Form.Row>

                </Form>
            </Container>
        )
    }
}

export default ExpenseForm;