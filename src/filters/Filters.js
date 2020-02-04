import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {

    handlePrintType = e => {
       e.preventDefault();
       const selected = e.target.value;
       this.props.handlePrintFilter(selected);
    }
    
    handleBookType = e => {
        e.preventDefault();
        const selected = e.target.value;
        this.props.handleFilter(selected)
}

    render() {
    return (
        <div className="filters">

                <label htmlFor="print_type">
                    Print Type:
                </label>
                <select onChange={e => this.handlePrintType(e)}>
                <option name="print_type" id="all">All</option>
                <option name="print_type" id="book">Book</option>
                </select>
                <label htmlFor="book_type">
                    Book Type:
                </label>
                <select onChange={e => this.handleBookType(e)}>
                <option name="book_type" id="no_filter">No Filter</option>
                <option name="book_type" id="free">Free</option>
                <option name="book_type" id="ebook">Ebook</option>
                </select>
        </div>
    )
    }
}

export default Filters;