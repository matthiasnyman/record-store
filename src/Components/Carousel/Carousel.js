import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Product from '../Product/Product';

function CarouselComponent(){
  return (
  <Carousel 
    centerMode
    swipeable={false}
    showIndicators={false}
    showThumbs={false}
    showStatus={false}
    centerSlidePercentage={20} 
    emulateTouch
    infiniteLoop
  >
    <Product  />
    <Product  />
    <Product  />
    <Product  />
    <Product  />
    <Product  />
    <Product  />
  
    {/* {
      array.forEach(element => {
        <div>
          <img src='../../images/mandoDiao.jpg' />
          <p className="legend">Legend 1</p>
        </div>
      })
    } */}
  </Carousel>
  )
}

export default CarouselComponent