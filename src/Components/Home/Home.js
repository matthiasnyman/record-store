import React from 'react';
import './Home.scss'
import Carousel from '../Carousel/Carousel';
import recordImg from '../../images/recordImg.png';

const Home = () => {
  return(
    <>
      <div>
        <img className="record-header" src={ recordImg } />
        {/* <h3 className="text-header">record</h3> */}
      </div>
      <div className="splitter"><h4>Reconmended</h4></div>
      <Carousel></Carousel>
      <div className="splitter"><h4>newcommers</h4></div>
      <Carousel></Carousel>
      <div className="splitter"><h4>Sale</h4></div>
      <Carousel></Carousel>
      <div className="splitter"><h4>Pop</h4></div>
      <Carousel></Carousel>
    </>
  )
}
export default Home;