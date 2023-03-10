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
        console.log(p);
        this.setState({ arr: p });
    }
    handleToUpdate = (i)=>{
        if(i<=0){
            return;
        }
        if(i>this.state.pages){
            return;
        }
        this.props.handler(i);
        this.setState({currentPage:i});
    }
    render() {
        return (
            <div className="pagination">
                <button className="active" onClick={() => this.handleToUpdate(this.state.currentPage-1)} > &lt;&lt; </button>
                &nbsp;
                {this.state.arr.filter(i=>(this.state.currentPage%3==0? i>=this.state.currentPage-2 && i<=this.state.currentPage:
                i>3*(Math.floor(this.state.currentPage/3)) && i<=3*(Math.floor(this.state.currentPage/3)+1))).map(i => (
                    <button className={i === this.state.currentPage ? "active" : "button"} value={i} onClick={() => this.handleToUpdate(i)} key={i}>{i}</button>
                ))}
                &nbsp;
                <button className="active" onClick={() => this.handleToUpdate(this.state.currentPage+1)} > &gt;&gt; </button>
            </div>
        )
    }
}

export default PageButton