import React from 'react';
import '../styles/card.css';
import GoogleApiWrapper  from './mapContainer';

class PropertyData extends React.Component {
    constructor(props) {
        super(props);
        const queryParameters = new URLSearchParams(window.location.search)
        const type = queryParameters.get("prop_id")
        this.state = { propId: type, propInfo: {} };
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:8001/api/property-details?id=' + this.state.propId);
        const responseData = await response.json();
        const propertyInfo = responseData.data;
        console.log(propertyInfo);
        this.setState({ propInfo: propertyInfo });
        console.log(this.state.propInfo.Address);
    }
    render() {
        return (
            <div>
                <div >
                    <div className="container">
                        <h4><b>{this.state.propInfo.name}</b></h4>
                        <p>{this.state.propInfo.address}</p>
                        <p>Price: {this.state.propInfo.price} USD</p>
                        <p>{this.state.propInfo.description} </p>
                    </div>
                </div>

                    <div className="container">
                        <img src={require('../pictures_test/1.jpeg')} />
                </div>
                <div className="container">
                        <h1>Features</h1>
                        <p>Kitchen: {this.state.propInfo.kitchen?'Yes':'No'}</p>
                        <p>Bathroom: {this.state.propInfo.number_bathroom}</p>
                        <p>Bedroom: {this.state.propInfo.number_bedroom}</p>
                        <p>Parking: {this.state.propInfo.parking?'Yes':'No'}</p>
                        <p>Pets: {this.state.propInfo.pets?'Yes':'No'}</p>
                        <p>Pool: {this.state.propInfo.pool?'Yes':'No'}</p>
                        <p>Gym: {this.state.propInfo.gym?'Yes':'No'}</p>
                </div>
                <GoogleApiWrapper name={this.state.propInfo.name} lat={this.state.propInfo.latitude} lng={this.state.propInfo.longitude}></GoogleApiWrapper>
            </div>
        )
    }
}

export default PropertyData