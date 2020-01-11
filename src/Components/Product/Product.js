import React from 'react';
import './Product.scss';
import record from '../../images/mandoDiao.jpg';



function Product(){
  return (
    <div className='product-area' onClick={ OpenProduct }>  
      <img src={ record } alt='record'  />
      <h3>album</h3>
      <h3>Artist</h3>
    </div>
  )
}

const OpenProduct = () => {
  console.log("Hej hallå");
}


export default Product;
