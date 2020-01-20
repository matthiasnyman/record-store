import React from 'react';
import './Product.scss';
import { Link } from "react-router-dom";


const Product = (props) => {
  const { id, artist, album, image } = props.info
  console.log(props.info);

  return (
    <Link to="/product" className='product-area' >
      <img alt={album} src={image} />
      <h3>{artist}</h3>
      <h4>{album}</h4>
    </Link>
  )
}


const moreInfo = (id) => {
  console.log(id)
}


export default Product;
