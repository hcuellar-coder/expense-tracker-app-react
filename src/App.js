import React from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      expenseList: [],
      visible: false
    };
  }

  componentDidMount() {
    const newList = JSON.parse(localStorage.getItem('expenseList'));
    this.setState({
      'expenseList': newList
    }, () => {
      console.log(this.state.expenseList.length);
      if (this.state.expenseList.length) {
        this.setState({ 'visible': true })
      }
    });
  }

  handleExpenseSubmit = (id, date, location, expense, cost) => {
    this.setState({
      expenseList: [...this.state.expenseList, { 'id': id, 'date': date, 'location': location, 'expense': expense, 'cost': cost }]
    }, () => {
      localStorage.setItem('expenseList', JSON.stringify(this.state.expenseList));
      console.log(this.state.expenseList.length);
      if (this.state.expenseList.length) {
        this.setState({ 'visible': true })
      }
    });
  }

  handleRemove = (id) => {
    const newList = this.state.expenseList.filter((expense) => expense.id !== id);
    this.setState({
      'expenseList': newList
    }, () => {
      localStorage.clear();
      localStorage.setItem('expenseList', JSON.stringify(this.state.expenseList));
      console.log(this.state.expenseList.length);
      if (!this.state.expenseList.length) {
        this.setState({ 'visible': false })
      }
    });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} />
        {this.state.visible ? <ExpenseTable expenseListProp={this.state.expenseList} handleRemove={this.handleRemove} /> : <div />}
      </div>
    );
  }
}

export default App;
