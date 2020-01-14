import React from 'react';
import './Categories.scss';

const Categories = () => {
  return(
    <>
      <h3 className="categories-header">Categories</h3>
      <div className='categories-container'>
        <div className="pop"><h4>pop</h4></div>
        <div className="rock" ><h4>Rock</h4></div>
        <div className="hiphop"><h4>Hiphop</h4></div>
        <div className="raggae" ><h4>Raggae</h4></div>
        <div className="punk"><h4>punk</h4></div>
        <div className="blues"><h4>Blues</h4></div>
      </div>

      <div className="changeCategories"><h3>year</h3></div>
    </>
  )
}

export default Categories;