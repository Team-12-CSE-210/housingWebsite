import './App.css';
import React from 'react';
import CardList from './components/cardList'
import PropertyData from './components/propertyData'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<CardList/>}/>
          <Route exact path="/property-info/" element={<PropertyData/>}/>
        </Routes>
      </div>
    </Router>

    )
  }
}

export default App;