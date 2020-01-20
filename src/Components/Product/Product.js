import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <>
      <div>
        <img 
          className="Product-image"
          alt="record" 
          src="https://www.bengans.se/bilder/artiklar/liten/3837010_S.jpg"  
        />

        <h1 className="describing-header">Album</h1>
        <h2 className="describing-header">Artist</h2>
        <h2 className="describing-header">120 kr</h2>
        <div className="addToCart">Add to Cart</div>

      </div>



      <h3 className="describing-header">FAKTA</h3>
      <p className="describing-fild">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio libero, convallis eu mauris et, mollis vehicula dolor. Nullam dictum bibendum leo id luctus. Nunc porttitor semper tellus in congue. Pellentesque imperdiet diam vitae eleifend tincidunt. Duis a fermentum quam. Vivamus a egestas felis, ac aliquet nunc. Aenean ullamcorpe</p>

      <h3 className="describing-header">Låtar</h3>

      <ul className="song-list"> 
        <li>hej</li>
        <li>hur</li>
        <li>Är</li>
        <li>det</li>
        <li>med</li>
        <li>dig</li>
        <li>är</li>
        <li>du</li>
      </ul>



      
    </>
  )
}

export default Product;

