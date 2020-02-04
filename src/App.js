import React, { Component } from 'react';
import './App.css';
import SearchForm from './searchForm/SearchForm';
import ResultList from './resultList/ResultList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      books: []

    }
  }
  handleSubmit = (search) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    const key= '';

    fetch(url + key)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again.')
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        books: data,
        error: null
      })
      
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })

  }
  handleFilter = (filters) => {
    this.setState({
      bookFilter: filters
    })
     
  }  

  handlePrintFilter = (filters) => {
    this.setState({
      printFilters: filters
    })
  }

  render() {
    const error = this.state.error
    ? <div className="error">{this.state.error}</div>
    : '';
    const resultList = (this.state.books.length !== 0)
    ? <ResultList 
      books={this.state.books}
      filter={this.state.bookFilter}
      printFilter={this.state.printFilter}/>
    : '';
  return (
    <div className="App">
      <div className="heading">
      <h1>Google Book Search</h1>
      </div>
      <SearchForm 
        handleSubmit={this.handleSubmit}
        handleFilter={this.handleFilter}
        handlePrintFilter={this.handlePrintFilter}
        books={this.state.books}
      />
      {error}
      {resultList}
    </div>
  );
  }
}

export default App;
