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

    //check for validity with a function

    handleSubmit(event) {
        const form = event.currentTarget;
        console.log(form);
        console.log(form.checkValidity());
        event.preventDefault();
        if (form.checkValidity() === false) {

        } else {
            const randomID = Math.floor(Math.random() * 100);
            this.props.handleExpenseSubmit(randomID,
                this.state.date, this.state.location,
                this.state.expense, this.state.cost);

            this.setState({ validated: true });
        }



    }

    render() {
        return (
            <Container className="expense-form">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} autoComplete="off">
                    <Form.Row className="align-items-center">
                        <Form.Group>
                            <Col>
                                <Form.Control id="expense-date" type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col>
                                <Form.Control id="expense-description" type="text" placeholder="Expense" name="expense" value={this.state.expense} onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Col>
                                <Form.Control id="expense-location" type="text" placeholder="Location" name="location" value={this.state.location} onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col>
                                <Form.Control id="expense-cost" type="number" step="0.01" placeholder="$000.00" name="cost" value={this.state.cost} onChange={this.handleChange} />
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