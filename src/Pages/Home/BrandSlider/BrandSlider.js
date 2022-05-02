import React, { useState } from "react";
import './BrandSlider.css';
import { Carousel } from "react-bootstrap";


import img1 from '../../../images/brands/img1.PNG';
import img2 from '../../../images/brands/img2.PNG';
import img3 from '../../../images/brands/img3.PNG';
import img4 from '../../../images/brands/img4.PNG';
import img5 from '../../../images/brands/img5.PNG';
import img6 from '../../../images/brands/img6.PNG';
import img7 from '../../../images/brands/img7.PNG';
import img8 from '../../../images/brands/img8.PNG';
import img9 from '../../../images/brands/img9.PNG';
import img10 from '../../../images/brands/img10.PNG';
import img11 from '../../../images/brands/img11.PNG';
import img12 from '../../../images/brands/img12.PNG';
import img13 from '../../../images/brands/img13.PNG';
import img14 from '../../../images/brands/img14.PNG';
import img15 from '../../../images/brands/img15.PNG';



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
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Fourth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="Fifth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="Sixth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img7} alt="Seventh slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img8} alt="Eighth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img9} alt="Ninth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img10} alt="Tenth slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img11} alt="Eleventh slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img12} alt="Twelve slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img13} alt="Thirteenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img14} alt="Fourteenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img15} alt="Fifteenth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BrandSlider;
