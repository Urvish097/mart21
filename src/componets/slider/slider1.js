import React from 'react'
import './slider1.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slick1 from '../images/slick1.jpg';
import star from '../images/Star.png'
const Slider1 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='mb-4'>
        <img src={slick1} className='mx-auto rounded-circle mb-3' alt="" />
        <img src={star} className='mx-auto mb-4' alt="" />
        <p className='dummy_text mb-3'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
        <h4 className='text-center color mb-0'>Sara Taylor</h4>
        <p className='text-center customer mb-0'>Consumer</p>
      </div>
      <div>
        <img src={slick1} className='mx-auto rounded-circle mb-3' alt="" />
        <img src={star} className='mx-auto' alt="" />
        <p className='dummy_text mb-3'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
        <h4 className='text-center color mb-0'>Sara Taylor</h4>
        <p className='text-center customer mb-0'>Consumer</p>
      </div>
      <div>
        <img src={slick1} className='mx-auto rounded-circle mb-3' alt="" />
        <img src={star} className='mx-auto' alt="" />
        <p className='dummy_text mb-3'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
        <h4 className='text-center color mb-0'>Sara Taylor</h4>
        <p className='text-center customer mb-0'>Consumer</p>
      </div>

    </Slider>
  )
}

export default Slider1