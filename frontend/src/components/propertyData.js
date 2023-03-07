import React from 'react';
import '../styles/card.css';
import GoogleApiWrapper from './mapContainer';
class PropertyData extends React.Component {
    constructor(props) {
        super(props);
        const queryParameters = new URLSearchParams(window.location.search)
        const type = queryParameters.get("prop_id")
        this.state = { propId: type, propInfo: {}, userLoggedIn: true, review: false, fav: false, apply: false, rating: 0, applyMessage: false, favMessage: false, reviewList: [],revText:'',revRating:0 };
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:8001/api/property-details?id=' + this.state.propId);
        const responseData = await response.json();
        const propertyInfo = responseData.data;
        if (this.state.userLoggedIn) {
            const config = {
                method: 'GET',
                headers: {
                    'user-id': '64014aa54c23d847667d1f86'
                }
            }
            const userData = await fetch('http://localhost:8001/api/user-data', config);
            const data = await userData.json();
            let fav1 = false;
            let review = false;
            let apply = false;
            const val = parseInt(this.state.propId);
            if (data.success) {
                if (data.data.favorites.includes(val)) {
                    fav1 = true;
                }
                if (data.data.properties.includes(val)) {
                    apply = true;
                }
                if (data.data.reviewed.includes(val)) {
                    review = true;
                }
                this.setState({ fav: fav1, apply: apply, review: review });
            }
        }
        const config1 = {
            method: 'GET',
            headers: {
                'prop-id': this.state.propId
            }
        }
        const reviewData = await fetch('http://localhost:8001/api/get-reviews', config1);
        const revData = await reviewData.json();
        let rev = [];
        let rating = 0;
        let count = 0;
        revData.data.map((item) => {
            rev.push(item.review);
            rating += item.rating;
            count += 1;
        });
        this.setState({ propInfo: propertyInfo, reviewList: rev, rating: rating / count });
    }
    addToFav = async () => {
        const data = {
            userId: '64014aa54c23d847667d1f86',
            propId: this.state.propId
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:8001/api/add-to-favourites', config)
        const json = await response.json()
        this.setState({ fav: true, favMessage: true });
    }
    apply = async () => {
        const data = {
            userId: '64014aa54c23d847667d1f86',
            propId: this.state.propId
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:8001/api/add-to-properties', config)
        const json = await response.json()
        this.setState({ apply: true, applyMessage: true });
    }
    review = async () => {
        this.setState({ review: true });
    }
    updateInputValue = async(evt,field)=>{
        const val = evt.target.value;
        if(field==='text'){
            this.setState({ revText: val });
        }
        if(field=='rating'){
            this.setState({ revRating: val });
        }
    }
    addReview = async ()=>{
        if(this.state.revRating<0 || this.state.revRating>5){
            this.setState({error:true,errorMessage:"Please enter a valid rating between 1 and 5"});
            return;
        }
        const data = {
            prop_id: this.state.propId,
            review: this.state.revText,
            rating: this.state.revRating
        }
        console.log(data);
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        alert("Review has been submitted");
        const response = await fetch('http://localhost:8001/api/add-to-reviews', config)
        this.setState({ error:false,review: false });
        const config1 = {
            method: 'GET',
            headers: {
                'prop-id': this.state.propId
            }
        }
        const reviewData = await fetch('http://localhost:8001/api/get-reviews', config1);
        const revData = await reviewData.json();
        let rev = [];
        let rating = 0;
        let count = 0;
        revData.data.map((item) => {
            rev.push(item.review);
            rating += item.rating;
            count += 1;
        });
        this.setState({ reviewList: rev, rating: rating / count });
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
                        <p>Rating: {this.state.rating} </p>
                    </div>
                </div>
                <div className="container" align='center'>
                    <img src={require('../pictures_test/1.jpeg')} />
                </div>
                <h1>List of reviews</h1>
                <div>
                    {this.state.reviewList.map(item=>(
                    <p>{item}</p>
                ))}
                </div>
                <div className='parent' align='right'>
                    <div className="child">
                        <div className="container">
                            <h1>Features</h1>
                            <p>Kitchen: {this.state.propInfo.kitchen ? 'Yes' : 'No'}</p>
                            <p>Bathroom: {this.state.propInfo.number_bathroom}</p>
                            <p>Bedroom: {this.state.propInfo.number_bedroom}</p>
                            <p>Parking: {this.state.propInfo.parking ? 'Yes' : 'No'}</p>
                            <p>Pets: {this.state.propInfo.pets ? 'Yes' : 'No'}</p>
                            <p>Pool: {this.state.propInfo.pool ? 'Yes' : 'No'}</p>
                            <p>Gym: {this.state.propInfo.gym ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <div className="child">
                        {this.state.userLoggedIn && <div align='center' >
                            {!this.state.fav && <button onClick={event => this.addToFav()}>Add to favourites</button>}
                            {this.state.fav && <button type="button" disabled>Added to favourites</button>}
                            {this.state.favMessage && <p>This property has been added to your favourites</p>}
                            <br></br><br></br>
                            {!this.state.apply && <button onClick={event => this.apply()}>Apply</button>}
                            {this.state.apply && <button type="button" disabled>Applied to this property</button>}
                            {this.state.applyMessage && <p>Your application has been sent</p>}
                            <br></br><br></br>
                            {!this.state.review && <button onClick={event => this.review()}>Give a review</button>}
                            {this.state.review && <input className="myclass"value={this.state.revText} onChange={evt => this.updateInputValue(evt,'text')}></input>}
                            {this.state.review && <input type ="number"className="myclass"value={this.state.revRating} onChange={evt => this.updateInputValue(evt,'rating')}></input>}
                            {this.state.error && <p>{this.state.errorMessage}</p>}
                            {this.state.review && <button onClick={event => {this.addReview()}}>Submit</button>}
                        </div>}
                    </div>
                    
                </div>
                <GoogleApiWrapper name={this.state.propInfo.name} lat={this.state.propInfo.latitude} lng={this.state.propInfo.longitude}></GoogleApiWrapper>
            </div>
        )
    }
}

export default PropertyData