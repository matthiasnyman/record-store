import React from 'react';

const CartCard = props => {

  const { album, artist, price, image } = props.data;
  return(
    <div>
      <img alt="product" src={image} />
      <div>
        <h2>{album}</h2>
        <h3>{artist}</h3>
        <p>{price} kr</p>
      </div>
    </div>
  )
}

export default CartCard;