import React from 'react';
import './Product.scss';

const Product = (props) => {
  const { id, artist, album, image } = props.info
  console.log(props.info);

  return (
    <div onClick={() => moreInfo(id)} className='product-area' >
      <img alt={album} src={image} />
      <h3>{artist}</h3>
      <h4>{album}</h4>
    </div>
  )
}


const moreInfo = (id) => {
  console.log(id)
}


export default Product;
