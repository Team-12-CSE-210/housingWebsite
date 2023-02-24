import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CardList from './components/cardList'
import PropertyData from './components/propertyData'
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './components/ListingPage'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
           <Route exact path="/" element={<CardList/>}/>
          <Route exact path="/property-info/" element={<PropertyData/>}/>
          <Route path="/list" element={<ListingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;