import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import "../styles/staple.css";

export default function Staple() {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }
  return (
    <Slider {...settings} className='hero_slider'>
        <div className='slider_item slider_item-01 mt0'>
            <Container>
                <div className='slider_content'>
                    <h1 className='text-light mb-3'>Let's find the car that you want </h1>
                    <button className='btn reserve_btn mt-4'>
                        <Link to='/rent'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>
        <div className='slider_item slider_item-02 mt-0'>
            <Container>
                <div className='slider_content'>
                    <h1 className='text-light mb-3'>Let's find the car that you want </h1>
                    <button className='btn reserve_btn mt-4'>
                        <Link to='/rent'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>
        <div className='slider_item slider_item-03 mt-0'>
            <Container>
                <div className='slider_content'>
                    <h1 className='text-light mb-3'>Let's find the car that you want </h1>
                    <button className='btn reserve_btn mt-4'>
                        <Link to='/rent'>Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>
    </Slider>
  )
}
