import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import ListingPage from './components/ListingPage'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/list" element={<ListingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;