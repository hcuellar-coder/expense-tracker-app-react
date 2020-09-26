import React from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      expense: '',
      location: '',
      cost: '',
      validated: false,
      expenseList: [],
      visible: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    const newList = JSON.parse(localStorage.getItem('expenseList'));
    this.setState({ 'expenseList': newList },
      () => {
        if (this.state.expenseList && this.state.expenseList.length > 0) {
          this.setState({ 'visible': true })
        }
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    } else {
      const randomID = Math.floor(Math.random() * 100);
      this.handleExpenseSubmit(randomID,
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
  }

  handleExpenseSubmit = (id, date, location, expense, cost) => {
    const expenseList = this.state.expenseList;
    if (expenseList) {
      this.setState({ expenseList: [...expenseList, { 'id': id, 'date': date, 'location': location, 'expense': expense, 'cost': cost }] },
        () => {
          localStorage.setItem('expenseList', JSON.stringify(this.state.expenseList));
        });
    } else {
      this.setState({ expenseList: [{ 'id': id, 'date': date, 'location': location, 'expense': expense, 'cost': cost }] },
        () => {
          localStorage.setItem('expenseList', JSON.stringify(this.state.expenseList));
        });
    }
    this.setState({ 'visible': true });
  }

  handleRemove = (id) => {
    const newList = this.state.expenseList.filter((expense) => expense.id !== id);
    this.setState({ 'expenseList': newList },
      () => {
        localStorage.clear();
        localStorage.setItem('expenseList', JSON.stringify(this.state.expenseList));
        if (this.state.expenseList.length < 1) {
          this.setState({ 'visible': false })
        }
      });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <ExpenseForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          validated={this.state.validated}
          date={this.state.date}
          location={this.state.location}
          expense={this.state.expense}
          cost={this.state.cost}
        />
        {this.state.visible ?
          <ExpenseTable
            expenseListProp={this.state.expenseList}
            handleRemove={this.handleRemove}
          /> : (
            <div />
          )}
      </div>
    );
  }
}

export default App;
