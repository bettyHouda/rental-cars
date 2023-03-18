import React from 'react';
import { Col } from 'reactstrap';

export default function ServicesC(props) {
    const {imgUrl , title , desc} = props.item;
  return (
    
        <Col lg='4' md='4' sm='6' className='mb-5'>
        <div className="about_item">
            <div className="about_img">
                <img src={imgUrl} alt="" className='image' />
            </div>
            <div className="offer_item-content mt-4">
                <h2 className="section__title text-center">{title}</h2>
                <h6 className="about__price text-center mt-">{desc}</h6>
            </div>
        </div>
    </Col>
    
  )
}
