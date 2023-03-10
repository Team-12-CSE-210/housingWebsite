import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardList from './components/cardList'
import PropertyData from './components/propertyData'
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './components/ListingPage'
import Faq from './components/faq';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import SearchBarFilters from './components/SearchBarFilters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: ""
    };
  }


  render(){
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<><SearchBarFilters /><CardList /></>}/>
            <Route exact path="/property-info/" element={<PropertyData/>}/>
            <Route path="/list" element={<ListingPage />} />
            <Route path="/help" element={<Faq />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage handleCurrUser={(firstName) => this.setState({ currUser: firstName })} />} />
          </Routes>
        </div>
      </Router>
    )
  }
=======
import './App.css';
import SearchBar from './components/searchBar.js';
import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectDropdown from './components/Select_Dropdown';
import RatingSelectVariants from './components/Rating';
import MultipleCheckbox from './components/Multiple_Checkbox';
import Header from './components/Header'
import Footer from './components/Footer';

const amenities = ['Gym','Pool','Laundry','Pets','Ac/Heating','Parking','Wifi','TV',];
const housetypes = ['House','Apartment','Condo','Townhouse','Studio','Loft','Other'];
const number = ['1','2','3','4','5','6','7','8','9','10'];
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar placeholder="Enter Address/Name/Zipcode" data={Data}/>
      <MultipleCheckbox Name="House Type" types={housetypes}> </MultipleCheckbox>
      <RatingSelectVariants />
      <SelectDropdown Name="Bed" types={number} InputLabel="# of Bed"></SelectDropdown>
      <SelectDropdown Name="Bath" types={number} InputLabel="# of Bath"></SelectDropdown>
      <MultipleCheckbox Name="Amenities" types={amenities}> </MultipleCheckbox>
      <Footer />
    </div>
  );
>>>>>>> c3f967a (Merged main branch manually)
}

export default App;