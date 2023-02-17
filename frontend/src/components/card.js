import '../styles/card.css';
import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = { Name: props.name, Address: props.Address, Facilities: props.Facilities };
    }
    render() {
        return (
            <div className="card">
                <div className="container">
                    <img src={require('../pictures_test/1.jpeg')} />
                    <h4><b>{this.state.Name}</b></h4>
                    <p>{this.state.Address}</p>
                    <p>{this.state.Facilities}</p>
                </div>
            </div>
        )
    }
}
export default Card