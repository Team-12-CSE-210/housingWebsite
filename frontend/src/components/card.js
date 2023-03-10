import '../styles/card.css';
import React from 'react';
var data = require('../pictures_test/sample.json');
class Card extends React.Component {
    constructor(props) {
        super(props);
        var path = '/house/'+data['./house/'][props.id%data['./house/'].length]
        console.log(path);
        this.state = { id: props.id, Name: props.name, Address: props.Address, Facilities: props.Facilities, Price: props.price, image: path };
        
    }

    render() {
        return (
            <div className="card">
                <div className="container">
                    <img src ={'http://localhost:8001/images'+this.state.image} />
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