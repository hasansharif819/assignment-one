import React from 'react';
import './Carousal.css';
import { Carousel } from 'react-bootstrap';
import pic2 from '../../assets/image/pic2.webp';
import pic3 from '../../assets/image/pic3.webp';
import pic5 from '../../assets/image/pic5.webp';
import {  ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Carousal = () => {
    return (
        <div>
            <h2>Title-2</h2>
            <Carousel>
           
  <Carousel.Item>
      <div className='carousalClass'>
    <img height={300} width={300}
      className="d-block"
      src={pic2}
      alt="First slide"
    />
    <div>
      <h3>Title - 1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className='carousalClass'>
    <img height={300} width={300}
      className="d-block"
      src={pic3}
      alt="Second slide"
    />
    <div>
      <h3>Title - 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className='carousalClass'>
    <img height={300} width={300}
      className="d-block"
      src={pic5}
      alt="Third slide"
    />

        <div>
      <h3>Title - 3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </Carousel.Item>
</Carousel>
<p>
<ChevronLeftIcon height={50} />
<ChevronRightIcon height={50} />

</p>
        </div>
    );
};

export default Carousal;