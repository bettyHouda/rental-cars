import React from 'react';
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../assets/all-images/cars-img/tesla.jpg";
import "../styles/services.css"

export default function ServicesE({aboutClass}) {
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
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__section-content se ">
              <h2 className="section__title p-4">Why "RentCar"?</h2>
              <p className="section__description ">
              "RentCar" Rent a Car offers car rental offers in Safi, El Jadida and Marrakech that meet all your needs. 
              Many car rental offers are available: cheap car rental, Prestige car rental at special prices ... Possibility to get a quote for car rental in safi or other and book online.
              </p>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
