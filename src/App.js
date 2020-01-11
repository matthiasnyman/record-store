import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch
// } from "react-router-dom";

import './App.scss';
import Nav from './Components/nav/Nav';
import Carousel from './Components/Carousel/Carousel';


function App(){
  return (
    <>
      <Nav  />
      
      <Carousel></Carousel>
    </>
  )
}
export default App;
