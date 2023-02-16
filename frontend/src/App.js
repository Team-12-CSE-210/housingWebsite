import './App.css';
import React from 'react';
import CardList from './components/cardList'
import Header from './components/Header'
import Footer from './components/Footer';




class App extends React.Component{
  render () {
    return (
      <div>
      <Header />
      <CardList></CardList>
      <Footer />
      </div>
    )
  }
}

export default App;