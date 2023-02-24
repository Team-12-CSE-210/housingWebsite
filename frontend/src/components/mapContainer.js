import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { name:props.name, lat: props.lat, lng: props.lng, showingInfoWindow: false, activeMarker:{}, selectedPlace:{name:'asdasd'} };
 
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: this.state.lat,
                        lng: this.state.lng
                    }
                }
            >
                        <Marker
          onClick={this.onMarkerClick}
          name={this.state.name}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA0EG4GreR1D7LOQcOn6k7wZQDzKg9o6Is'
})(MapContainer);