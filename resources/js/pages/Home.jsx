import React from 'react';
import Staple from '../components/UI/Staple';
import carData from '../components/assets/data/carData';
import CardItem from '../components/UI/CardItem';
import offerData from '../components/assets/data/offerData';
import Offer from '../components/UI/Offer';

import BookingForm from '../components/UI/BookingForm';
import { Container, Row, Col } from "reactstrap";
import Adress from '../components/UI/Adress';

export default function Home() {
  return (
   <div>
    
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
      <Staple />
      <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your car here </h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <BookingForm />
              </Col>
            </Row>
          </Container>
        </div>
        </section>



    {/*-----card section--------*/}


    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className='section_subtitle'>Show with me</h6>
            <h2 className="section_title">The Best Car</h2>
          </Col>
          {
            carData.slice(2.8).map(item=>(
              <CardItem item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
    </section>

    {/*--------Offer--------*/}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className='section_subtitle'>Our services</h6>
            <h2 className="section_title">Our Offers</h2>
          </Col>
          {
            offerData.slice(0.3).map(item=>(
              <Offer item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section_title">Contact Us</h2>
            <Adress />
          </Col>
          
          </Row>
      </Container>
      </section>
    </div>
  )
}
