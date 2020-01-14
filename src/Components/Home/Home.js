import React from 'react';
import './Home.scss'
import Carousel from '../Carousel/Carousel';
import recordImg from '../../images/recordImg.png';

import { useSelector, useDispatch } from 'react-redux';
import increment from '../../actions/home';

import fetchProducts from '../../actions/LoadProducts';

const Home = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  fetchProducts();
  return(
    <>
      <div>
        <img className="record-header" alt="Home image" src={ recordImg } />
        {/* <h3 className="text-header">record</h3> */}
        <h3 className="text-header">{counter}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button>-</button>
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