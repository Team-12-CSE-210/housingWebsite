import React from 'react';
import '../styles/SearchBarFilters.css';
import SearchBar from './SearchBar.js';
// import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './SelectDropdown';
import RatingSelectVariants from './Rating';
import MultipleCheckbox from './MultipleCheckbox';
import PriceRange from './PriceRange';

const amenities = ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',];
const housetypes = ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'];
const number = ['1','2','3','4','5','6','7','8','9','10'];
function SearchBarFilters(){

  const Data = didMount();
  return (
    <div className="SearchBarFilters">
      <SearchBar placeholder="Enter Address/Name/Zipcode" data={Data}/>
      <PriceRange />
      <MultipleCheckbox Name="House Type" types={housetypes}> </MultipleCheckbox>
      <RatingSelectVariants />
      <SelectDropdown Name="Bed" types={number} InputLabel="# of Bed"></SelectDropdown>
      <SelectDropdown Name="Bath" types={number} InputLabel="# of Bath"></SelectDropdown>
      <MultipleCheckbox Name="Amenities" types={amenities}> </MultipleCheckbox>
    </div>
  );
}

export default SearchBarFilters;
async function didMount() {
  const response = await fetch('http://localhost:8001/api/all-property-details');
  const responseData = await response.json();
  return responseData.data;
}

