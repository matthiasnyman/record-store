import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "../ProductCard/ProductCard";

const CarouselComponent = props => {

  const records = props.records.map(
    (record) => <ProductCard key={ record.id } info= { record.record } />
  );

  return (
    <Carousel
      className="hejda"
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
