import React from 'react';
import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import AboutUnder from '../components/UI/AboutUnder';
import aboutData from '../components/assets/data/aboutData';

import driveImg from "../components/assets/all-images/drive.jpg";
import "../components/styles/about.css";

export default function About() {
  return (
    <div>
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title p-4">
                  Find your car
                </h2>

                <p className="section__description m-4">
                  RentCar is the world's largest car rental marketplace where you can book any car you want,
                  from a vibrant community of trusted hosts across Morocco. Whether traveling from afar or looking
                  for a street car, or something smooth and luxurious, guests can drive the perfect vehicle for any occasion,
                  while hosts can take command of their future by building an accessible, flexible and scalable car rental business from the ground up.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+212665474399</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section_title">RentCar by the numbers</h2>
          </Col>
          {
            aboutData.slice(0.3).map(item=>(
              <AboutUnder item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
            
      </section>

    </div>
  )
}
