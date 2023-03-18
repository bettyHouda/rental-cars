import React from 'react';
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../assets/all-images/cars-img/blog-1.jpg";
import "../styles/services.css"

export default function ServicesS({aboutClass}) {
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
              <h4 className="section__subtitle p-4">Our Services</h4>
              <h2 className="section__title p-4">who are we ?</h2>
              <p className="section__description w-50">
              "RentCar" Prepare your vacation with rent car. View instant car rental rates and book a car online at a discounted rate and unlimited mileage.
              </p>

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
  )
}
