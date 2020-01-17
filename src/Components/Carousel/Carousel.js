import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../Product/Product";

const CarouselComponent = props => {

  const records = props.records.map((record) => <Product key={record.id} info= { record } />);

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
      { records }

    </Carousel>
  );
};


export default CarouselComponent;
