import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "../ProductCard/ProductCard";

const CarouselComponent = props => {

  const list = props.records; 
  let array = [];
    
  if(list){

    for(let i=0; i < list.length; i++){
      let item = list[i];
      array.push(<ProductCard key={item.id} info = { item } />)
    };
  }

  return (
    <Carousel
      centerMode
      swipeable={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      centerSlidePercentage={20}
      infiniteLoop
    >
      { array }

    </Carousel>
  );
};


export default CarouselComponent;
