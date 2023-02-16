import React from 'react';
import '../styles/button.css';

class PageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pages: this.props.pages, currentPage: this.props.currentPage,arr: [] };
    }
    componentDidMount(){
        var i = 1;
        var len = this.state.pages;
        var p = [];
        while(i<=len){
            p.push(i);
            i++;
        }
        this.setState({arr:p});
    }
    render() {
        var handleToUpdate = this.props.handler;
        return (
            <div className="pagination">
            {this.state.arr.map(i => (
                        <button className="button" value={i} onClick={() => handleToUpdate(i)} key={i}>{i}</button>
                ))}
            </div>
        )
    }
}

export default PageButton