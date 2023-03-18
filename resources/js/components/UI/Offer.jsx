import React from 'react';
import { Col } from 'reactstrap';
import "../styles/offer.css"

export default function Offer(props) {
    const {imgUrl , offerName , price} = props.item;
  return (
    <Col lg='4' md='4' sm='6' className='mb-5'>
        <div className="offer_item">
            <div className="offer_img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>
            <div className="offer_item-content mt-4">
                <h4 className="section__title text-center">{offerName}</h4>
                <h6 className="offer__price text-center mt-">{price}.00 Dh <span>Day</span></h6>
            </div>
        </div>
    </Col>
  )
}
