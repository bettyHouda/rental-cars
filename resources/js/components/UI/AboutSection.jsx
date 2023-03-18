import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about-section.css";
import aboutImg from "../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle p-4">About Us</h4>
              <h2 className="section__title p-4">Take a look under the hood of the car rental market in Morocco.</h2>
              <p className="section__description">
              RentCar is the world's largest car rental marketplace where you can book any car you want, 
               from a vibrant community of trusted hosts across Morocco. Whether traveling from afar or looking for a street car, 
                or something smooth and luxurious, guests can drive the perfect vehicle for any occasion, while hosts can take command of 
                their future by building an accessible, flexible and scalable car rental business from the ground up.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Find the perfect car
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Hit the road
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Skip the rental counter
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Convenient delivery options
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
