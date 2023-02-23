import React from 'react';
import './App.css';
import SearchBar from './components/searchBar.js';
import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './components/Select_Dropdown';
import RatingSelectVariants from './components/Rating';
import MultipleCheckbox from './components/Multiple_Checkbox';
import Header from './components/Header'
import Footer from './components/Footer';
import PriceRange from './components/PriceRange';

const amenities = ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',];
const housetypes = ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'];
const number = ['1','2','3','4','5','6','7','8','9','10'];
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar placeholder="Enter Address/Name/Zipcode" data={Data}/>
      <PriceRange />
      <MultipleCheckbox Name="House Type" types={housetypes}> </MultipleCheckbox>
      <RatingSelectVariants />
      <SelectDropdown Name="Bed" types={number} InputLabel="# of Bed"></SelectDropdown>
      <SelectDropdown Name="Bath" types={number} InputLabel="# of Bath"></SelectDropdown>
      <MultipleCheckbox Name="Amenities" types={amenities}> </MultipleCheckbox>
      <Footer />
    </div>
  );
}

export default App;
