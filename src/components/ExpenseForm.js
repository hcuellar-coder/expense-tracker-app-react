import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

class ExpenseForm extends React.Component {
    render() {
        return (
            <Container className="expense-form">
                <Form noValidate validated={this.props.validated} onSubmit={this.props.handleSubmit} autoComplete="off">
                    <Form.Row className="align-items-center">
                        <Form.Group>
                            <Col>
                                <Form.Control
                                    required
                                    id="expense-date"
                                    type="date"
                                    name="date"
                                    value={this.props.date}
                                    onChange={this.props.handleChange} />
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
                                    value={this.props.location}
                                    onChange={this.props.handleChange} />
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
                                    value={this.props.expense}
                                    onChange={this.props.handleChange} />
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
                                    value={this.props.cost}
                                    onChange={this.props.handleChange} />
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