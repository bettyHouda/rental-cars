import React from 'react'
import { Form, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom';
import "../styles/bookingform.css"
export default function BookingForm() {
  
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      <FormGroup className="select__group">
          <label>Pick up location</label>
          <select>
            <option value="safi">Safi</option>
            <option value="eljadida">El jadida</option>
            <option value="marrakech">Marrakech</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
        <label>Return location</label>
          <select>
            <option value="safi">Safi</option>
            <option value="eljadida">El jadida</option>
            <option value="marrakech">Marrakech</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
        <label>Pick up date</label>
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
        <label>Pick up time</label>
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
        <label>Return date</label>
          <input type="date" placeholder="Journey date" required />
        </FormGroup>


        <FormGroup className="form__group">
          <Link to='/rent'><button className="btn find__car-btn">
          Search
          </button></Link>
        </FormGroup>
      </div>
    </Form>
  
  )
}
