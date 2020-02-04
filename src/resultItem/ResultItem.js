import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
    render() {
    const title = this.props.volumeInfo.title;
    const img = (this.props.volumeInfo.imageLinks !== undefined)
        ? <img src={`${this.props.volumeInfo.imageLinks.thumbnail}`} alt={title + ' Image'} className='thumbnail-img'/>
        : '';
    const author = (this.props.volumeInfo.authors !== undefined)
        ? (this.props.volumeInfo.authors.length > 1)
            ? this.props.volumeInfo.authors.map(author => author + " ")
            : this.props.volumeInfo.authors
        : '';
    const description = (this.props.searchInfo !== undefined)
        ? this.props.searchInfo.textSnippet
        : '';
    const price = (this.props.saleInfo.saleability !== "NOT_FOR_SALE")
        ? (this.props.saleInfo.listPrice !== undefined)
            ? <p>Price: ${this.props.saleInfo.listPrice.amount}</p>
            : ''
        : '';
    return (
        <div className="books">
                <h3>{title}</h3> 
                {img}
                <p>Author: {author}</p>
                {price}
                <p>{description}</p>
        </div>
    )
    }
}

export default ResultItem;