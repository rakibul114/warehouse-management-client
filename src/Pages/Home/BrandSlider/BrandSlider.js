import React, { useState } from "react";
import './BrandSlider.css';
import { Carousel } from "react-bootstrap";


import img1 from '../../../images/brands/img11.PNG';
import img2 from '../../../images/brands/img13.PNG';
import img3 from '../../../images/brands/img14.PNG';



const BrandSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (    
    <div>
      <h1 className="text-center brands-title">OUR BRANDS</h1>
      <div className="w-25 mx-auto mb-5 p-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />            
            </Carousel.Item>
                
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            </Carousel.Item>
                
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BrandSlider;
