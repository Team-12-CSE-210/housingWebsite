import '../styles/card.css';
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, Name: props.name, Address: props.Address, Facilities: props.Facilities, Price: props.price };
    }

    render() {
        return (
            <div className="card">
                <div className="container1">
                    <img src={require('../pictures_test/1.jpeg')} />
                    <h4><b>{this.state.Name}</b></h4>
                    <p>{this.state.Address}</p>
                    <p>{this.state.Facilities}</p>
                    <p>Price: {this.state.Price} USD</p>

                </div>
                <div align="right" className="div-pad">
                        <button className="button-34" role="button" onClick={event =>  window.location.href='/property-info?prop_id='+this.state.id}>-{'>'}</button>
                    </div>
            </div>
        )
    }
}
export default Card