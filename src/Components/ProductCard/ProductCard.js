import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
  console.log(props.info.record);
  const { id, artist, album, image } = props.info.record;
  
  const url = `/product/${id}`;
  return (
    <Link to={ url } key={ id } className='product-area' >
      <img alt={ album } src={ image } />
      <h3>{ artist }</h3>
      <h4>{ album }</h4>
    </Link>
  )
}



export default ProductCard;
