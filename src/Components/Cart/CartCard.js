import React from 'react';

const CartCard = props => {

  const { album, artist, price, image } = props.data;
  console.log(props)
  return(
    <div>
      <h2>{album}</h2>
      <h3>{artist}</h3>
      <p>{price} kr</p>
      <img  src={image} />
    </div>
  )
}

export default CartCard;