import React from 'react';
import '../styles/button.css';

class PageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pages: this.props.pages, currentPage: this.props.currentPage, arr: [] };
    }
    componentDidMount() {
        var i = 1;
        var len = this.state.pages;
        var p = [];
        while (i <= len) {
            p.push(i);
            i++;
        }
        this.setState({ arr: p });
    }
    handleToUpdate = (i)=>{
        this.props.handler(i);
        this.setState({currentPage:i});
    }
    render() {
        return (
            <div className="pagination">
                {this.state.arr.map(i => (
                    <button className={i === this.state.currentPage ? "active" : "button"} value={i} onClick={() => this.handleToUpdate(i)} key={i}>{i}</button>
                ))}
            </div>
        )
    }
}

export default PageButton