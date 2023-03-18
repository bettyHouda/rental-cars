import React from "react";
import "../styles/carform.css";
import { Form, FormGroup } from "reactstrap";

export default function CarForm() {
    const submitHandler = (event) => {
        event.preventDefault();
    };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label>Pick up location</label>
          <select>
            <option value="safi">Safi</option>
            <option value="eljadida">El jadida</option>
            <option value="marrakech">Marrakech</option>
          </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <label>Return location</label>
          <select>
            <option value="safi">Safi</option>
            <option value="eljadida">El jadida</option>
            <option value="marrakech">Marrakech</option>
          </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <label>Bebe Seat</label>
      <input type="number" placeholder="bebe seat" />
      
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <label>Offers</label>
          <select>
            <option value="safi">Tawing</option>
            <option value="eljadida">Luggage Rack</option>
          </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
  )
}
