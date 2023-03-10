import React from 'react';
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
      currUser: localStorage.getItem('currUser') || ''
    };
  }


  render(){
    return (
      <Router>
        <div>
          <Header currUser={this.state.currUser}/>
          <Routes>
            <Route exact path="/" element={<><SearchBarFilters /><CardList /></>}/>
            <Route exact path="/property-info/" element={<PropertyData/>}/>
            <Route path="/list" element={<ListingPage />} />
            <Route path="/help" element={<Faq />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage handleCurrUser={(firstName) => {this.setState({ currUser: firstName }); localStorage.setItem('currUser', firstName);}}/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;