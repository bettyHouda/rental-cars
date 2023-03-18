import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import CardItem from "../components/UI/CardItem";
import carData from "../components/assets/data/carData";

const RentCar = () => {
  return (
    <div>
      <CommonSection title="Rent Car" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By prices
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CardItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section></div>
    
  );
};

export default RentCar;
