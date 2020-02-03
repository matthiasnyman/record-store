import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
  const { id, artist, album, image } = props.info;
  
  
  const url = `/product/${id}`;
  return (
    <Link to={ url } key={ id } className="product-card" > 
      <img alt={ album } src={ image } />
      <div className="overlay">
        <h2>{ artist }</h2>
        <h2>{ album }</h2>  
        <a class="info" href="#">link here</a>
      </div>
    </Link>
  )
}



export default ProductCard;
