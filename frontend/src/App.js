import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardList from './components/cardList'
import PropertyData from './components/propertyData'
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './components/ListingPage'
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

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
            <Route exact path="/" element={<CardList/>}/>
            <Route exact path="/property-info/" element={<PropertyData/>}/>
            <Route path="/list" element={<ListingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage handleCurrUser={(firstName) => this.setState({ currUser: firstName })} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;