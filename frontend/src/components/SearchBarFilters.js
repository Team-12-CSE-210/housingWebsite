import React from 'react';
import '../styles/SearchBarFilters.css';
import SearchBar from './SearchBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './SelectDropdown';
import RatingSelectVariants from './Rating';
import MultipleCheckbox from './MultipleCheckbox';
import PriceSelect from './PriceSelect';

class SearchBarFilters extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: [],
      amenities: ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',],
      housetypes: ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'],
      number: ['1','2','3','4','5','6','7','8','9','10'],
      selected_house_type: [],
      selected_amenties: [],
      selected_rating: 0,
      selected_bed: 0,
      selected_bath: 0,
      selected_property :[],
      selected_price: [0,100000],}
  }
  handleHouseType = (value) => {
    this.setState({selected_house_type : value});
  };
  handleAmenties = (value) => {
    this.setState({selected_amenties : value});
  };
  handleRating = (value) => {
    this.setState({selected_rating : value});
  }; 
  handleBed = (value) => {
    this.setState({selected_bed : value});
  };
  handleBath = (value) => {
    this.setState({selected_bath : value});
  };
  handleProperty = (value) => {
    this.setState({selected_property : value});
  };
  handlePrice = (value) => {
    this.setState({selected_price : value});
  };
  
  handleSearch = () => {
    console.log("search button clicked")
    var dict = {};
    if (this.state.selected_property.length != 0)
      dict['property'] = this.state.selected_property;
    if (this.state.selected_house_type != 0)
      dict['house_type'] = this.state.selected_house_type;
    if (this.state.selected_amenties.length != 0)
      dict['amenities'] = this.state.selected_amenties;
    dict['rating'] = this.state.selected_rating;

    if (this.state.selected_bed != 0)
      dict['bed'] = this.state.selected_bed;
    if (this.state.selected_bath != 0) 
      dict['bath'] = this.state.selected_bath;
    dict['price'] = this.state.selected_price;

    this.props.searchFilters(dict);
  };


  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8001/api/all-property-details');
  //   const responseData = await response.json();
  //   const propertyInfo = responseData.data.map(item =>{
  //     return{
  //         id: item.id,
  //         Name: item.name,
  //         Address: item.address,
  //         Facilities: 'Bedroom: '+item.number_bedroom + '. Bathroom: '+item.number_bathroom,
  //         Price: item.price
  //     }
  //   });
  //   const Data = propertyInfo;
  //   this.setState({data: Data});
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.selected_house_type !== this.state.selected_house_type){
  //     console.log('house type changed');
  //     console.log(this.state.selected_house_type);
  //   }
  //   if(prevState.selected_amenties !== this.state.selected_amenties){
  //     console.log('amenties changed');
  //     console.log(this.state.selected_amenties);
  //   }
  //   if(prevState.selected_rating !== this.state.selected_rating){
  //     console.log('rating changed');
  //     console.log(this.state.selected_rating);
  //   }
  //   if(prevState.selected_bed !== this.state.selected_bed){
  //     console.log('bed changed');
  //     console.log(this.state.selected_bed);
  //   }
  //   if(prevState.selected_bath !== this.state.selected_bath){
  //     console.log('bath changed');
  //     console.log(this.state.selected_bath);
  //   }
  //   if(prevState.selected_property !== this.state.selected_property){
  //     console.log('property changed');
  //     console.log(this.state.selected_property);
  //   }
  //   if(prevState.selected_price !== this.state.selected_price){
  //     console.log('price changed');
  //     console.log(this.state.selected_price);
  //   } 
  // }
  render(){
    return (
      <div className="SearchBarFilters">
        <SearchBar placeholder="Enter Address/Name/Zipcode" onSelect={this.handleProperty} handleSearch={this.handleSearch}/>
        <PriceSelect onSelect={this.handlePrice}/>
        <MultipleCheckbox Name="House Type" types={this.state.housetypes} onSelect={this.handleHouseType}> </MultipleCheckbox>
        <RatingSelectVariants onSelect={this.handleRating}/>
        <SelectDropdown Name="Bed" types={this.state.number} InputLabel="# of Bed" onSelect={this.handleBed}></SelectDropdown>
        <SelectDropdown Name="Bath" types={this.state.number} InputLabel="# of Bath" onSelect={this.handleBath}></SelectDropdown>
        <MultipleCheckbox Name="Amenities" types={this.state.amenities} onSelect={this.handleAmenties}> </MultipleCheckbox>
      </div>
    );
  }
}

export default SearchBarFilters;
