import React from 'react';
import './App.css';
import SearchBar from './components/searchBar.js';
import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './components/Select_Dropdown';
import RatingSelectVariants from './components/Rating';
import MultipleCheckbox from './components/Multiple_Checkbox';

const amenities = ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',];
const housetypes = ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'];
const number = ['1','2','3','4','5','6','7','8','9','10'];
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter Address/Name/Zipcode" data={Data}/>
      <MultipleCheckbox Name="House Type" types={housetypes}> </MultipleCheckbox>
      <RatingSelectVariants />
      <SelectDropdown Name="Bed" types={number} InputLabel="# of Bed"></SelectDropdown>
      <SelectDropdown Name="Bath" types={number} InputLabel="# of Bath"></SelectDropdown>
      <MultipleCheckbox Name="Amenities" types={amenities}> </MultipleCheckbox>
    </div>
  );
}

export default App;