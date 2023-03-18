import React from 'react';
import CommonSection from "../components/UI/CommonSection";
import ServicesC from '../components/UI/ServicesC';
import ServicesE from '../components/UI/ServicesE';
import ServicesS from '../components/UI/ServicesS';
import serviceData from '../components/assets/data/serviceData';
import { Container, Row, Col } from "reactstrap";
import offerData from '../components/assets/data/offerData';
import Offer from '../components/UI/Offer';

export default function Services() {
  return (
    <div>
      <CommonSection title="Our Services" />
      <ServicesS aboutClass="aboutPage" />
      <ServicesE aboutClass="aboutPage" />

      <section>
        
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
          </Col>
          {
            serviceData.slice(0.3).map(item=>(
              <ServicesC item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
            
      </section>

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
    </div>
  )
}
