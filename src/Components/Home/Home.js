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
      <Carousel></Carousel>
      <br />
      <Carousel></Carousel>
      <br />
      <Carousel></Carousel>
      <br />
      <Carousel></Carousel>
    </>
  )
}
export default Home;