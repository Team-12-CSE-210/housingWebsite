import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../styles/carousel.css';
var data = require('../pictures_test/sample.json');
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ];

class DemoCarousel extends Component {
    constructor(props) {
        super(props);
        var housepath = '/house/'+data['./house/'][props.id%data['./house/'].length]
        var livingroompath = '/livingroom/'+data['./livingroom/'][props.id%data['./livingroom/'].length]
        var bedroompath = '/bedroom/'+data['./bedroom/'][props.id%data['./bedroom/'].length]
        var kitchenpath = '/kitchen/'+data['./kitchen/'][props.id%data['./kitchen/'].length]
        var bathroompath = '/bathroom/'+data['./bathroom/'][props.id%data['./bathroom/'].length]
        this.state = { houseImage: housepath, bedImage: bedroompath, livImage: livingroompath, kitchenImage: kitchenpath, bathImage: bathroompath };
    }
    render(){
        return (
            <div>
                    <>
      <h3 style={{ textAlign: "center" }}>Check out the Property!</h3>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src ={'http://localhost:8001/images'+this.state.houseImage} /></Item>
          <Item><img src ={'http://localhost:8001/images'+this.state.livImage} /></Item>
          <Item><img src ={'http://localhost:8001/images'+this.state.bedImage} /></Item>
          <Item><img src ={'http://localhost:8001/images'+this.state.kitchenImage} /></Item>
          <Item><img src ={'http://localhost:8001/images'+this.state.bathImage} /></Item>
        </Carousel>
      </div>
    </>
            </div>
        );
    }
};

export default DemoCarousel