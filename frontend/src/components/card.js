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
                <img src={require('../pictures_test/1.jpeg')} />
                <div className="container1">
                    
                    <h3><b>${this.state.Price}</b></h3>
                    <p>{this.state.Facilities}</p>
                    <p>{this.state.Name}</p>
                    <p className='address'>{this.state.Address}</p>
                    
                    

                    <div align="right" className="div-pad">
                        <button className="button-34" role="button" onClick={event =>  window.location.href='/property-info?prop_id='+this.state.id}>-{'>'}</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Card