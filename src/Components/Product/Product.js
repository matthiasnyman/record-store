import React from 'react';
import './Product.scss';

const Product = (props) => {
  const { artist, album, image } = props.info
  console.log(props.info);

  return (
    <div onClick={moreInfo} className='product-area' >
      <img alt={album} src={image} />
      <h3>{artist}</h3>
      <h4>{album}</h4>
    </div>
  )
}


const moreInfo = () => {
  console.log(this)
}


export default Product;
