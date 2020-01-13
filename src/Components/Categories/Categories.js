import React from 'react';
import './Categories.scss';

const Categories = () => {
  return(
    <>
      <h3>Categories</h3>
      <div className='categories-container'>
        <div><h4>pop</h4></div>
        <div><h4>Rock</h4></div>
        <div><h4>Hiphop</h4></div>
        <div><h4>Raggae</h4></div>
        <div><h4>punk</h4></div>
        <div><h4>Blues</h4></div>
      </div>

      <button>Year</button>
    </>
  )
}

export default Categories;