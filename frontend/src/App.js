// import logo from './logo.svg';
// import { useState } from 'react';
import React from 'react';
import './App.css';
import BasicButtonExample from './components/Price_dropdown';
import RatingDrop from './components/Rating_dropdown';
import SearchBar from './components/searchBar.js';
import TypeHouse from './components/Type_dropdown';
import Data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from './components/searchBar';
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/EaBIcf4.jpeg',
//   imageSize: 900,
// };

// function MyButton({count, onClick}) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times 
//     </button>
//   );
// }
function App() {
  // const [item, setItem] = useState(Data);
  return (
    <div className="App">
      <SearchBar placeholder="Enter Address/Name/Zipcode" data={Data}/>
      <BasicButtonExample />
      <TypeHouse />
      <RatingDrop />
      
    </div>

    // <div>
    //   <BasicButtonExample />
    // </div>
  );
  // return (
  //   <div className="App">
  //     <SearchBar />
  //   </div>
  // );
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  // return (
  //   <div>
  //     <h1> Counter buttons</h1>
  //     <MyButton count={count} onClick={handleClick}/>
  //     <br></br>
  //     <MyButton count={count} onClick={handleClick}/>
  //   </div>
  // );
  // retur;n (
  //   <>
  //     <h1>{user.name}</h1>
  //     <img
  //       className="image"
  //       src={user.imageUrl}
  //       alt={'Photo of ' + user.name}
  //       style={{
  //         width: user.imageSize,
  //         height: user.imageSize
  //       }}
  //     />
  //   </>
  // );
  // return (
  //   <div>
  //     <h1>Welcome to my app</h1>
  //     <MyButton />
  //     <br></br>
  //     <MyButton />
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
