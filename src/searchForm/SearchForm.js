import React, { Component } from 'react';
import Filters from '../filters/Filters';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            search: ''
        }
    }
    handleSearch(search) {
        this.setState({
            search
        })
    }
    makeSearch(e) {
        e.preventDefault();
        const search = this.state.search;
        this.props.handleSubmit(search);
    }
    render () {
    return (
        <div>
            
            <form onSubmit={e => this.makeSearch(e)}>
            <div className="search">
            <label htmlFor="search-bar">Search: </label>
            <input 
                type="text" 
                id="search-bar"
                name="search-bar"
                onChange={e => this.handleSearch(e.target.value)} 
            />
            <button type="submit">Search</button>  
            </div>
            <Filters 
                handleFilter={this.props.handleFilter}
                handlePrintFilter={this.props.handlePrintFilter}
                books={this.props.books}/>
        </form>
        </div>
    )
    }
}

export default SearchForm;