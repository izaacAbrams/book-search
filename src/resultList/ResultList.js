import React, { Component } from 'react';
import ResultItem from '../resultItem/ResultItem';
import './ResultList.css';

class ResultList extends Component {

    render() {
        const book = this
            .props
            .books
            .items
            .filter(item => {
                if(this.props.filter === "Free"){
                    return item.saleInfo.saleability === "FREE"
                }else if(this.props.filter === "Book"){
                    return item.volumeInfo.printType === "BOOK"
                }else if(this.props.filter === "Ebook"){
                    return item.accessInfo.epub.isAvailable === true
                }
                else{
                    return item;
                }
            })
            .map((books, i) => <ResultItem key={i} {...books} />);
        
        return (
            <div className="result-items">
                {book}
            </div>
        )   

    }
}

export default ResultList;