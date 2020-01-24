import React from 'react';
import './Categories.scss';

import { Link } from 'react-router-dom';


const Categories = () => {
  const url = `/CategorieList/`;
  return(
    <>
      <h3 className="categories-header">Categories</h3>
      <div className='categories-container'>

        <Link to={ url + "1" } className="pop"><h4>pop</h4></Link>
        <Link to={ url + "2" } className="rock" ><h4>Rock</h4></Link>
        <Link to={ url + "3" } className="hiphop"><h4>Hiphop</h4></Link>
        <Link to={ url + "4" } className="raggae" ><h4>Raggae</h4></Link>
        <Link to={ url + "5" } className="punk"><h4>punk</h4></Link>
        <Link to={ url + "6" } className="blues"><h4>Blues</h4></Link>

      </div>
      <div className="changeCategories"><h3>year</h3></div>
    </>
  )
}

export default Categories;