import React from 'react';
import '../styles/SearchBarFilters.css';
import SearchBar from './SearchBar.js';
// import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './SelectDropdown';
import RatingSelectVariants from './Rating';
import MultipleCheckbox from './MultipleCheckbox';
import PriceRange from './PriceRange';

class SearchBarFilters extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: [],
      amenities: ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',],
      housetypes: ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'],
      number: ['1','2','3','4','5','6','7','8','9','10']}
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8001/api/all-property-details');
    const responseData = await response.json();
    const propertyInfo = responseData.data.map(item =>{
      return{
          id: item.id,
          Name: item.name,
          Address: item.address,
          Facilities: 'Bedroom: '+item.number_bedroom + '. Bathroom: '+item.number_bathroom,
          Price: item.price
      }
    });
    const Data = propertyInfo;
    this.setState({data: Data});
  }
  render(){
    return (
      <div className="SearchBarFilters">
        <SearchBar placeholder="Enter Address/Name/Zipcode" data={this.state.data}/>
        <PriceRange />
        <MultipleCheckbox Name="House Type" types={this.state.housetypes}> </MultipleCheckbox>
        <RatingSelectVariants />
        <SelectDropdown Name="Bed" types={this.state.number} InputLabel="# of Bed"></SelectDropdown>
        <SelectDropdown Name="Bath" types={this.state.number} InputLabel="# of Bath"></SelectDropdown>
        <MultipleCheckbox Name="Amenities" types={this.state.amenities}> </MultipleCheckbox>
      </div>
    );
  }
}

export default SearchBarFilters;
