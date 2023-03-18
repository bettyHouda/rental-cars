import React from 'react';
import { Container, Row, Col , ListGroup , ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import "../styles/footer.css"

export default function Footer() {
  
  const quickLinks = [
    {
      path:'/home',
      display:'Home'
    },
    {
    path:'/rent',
    display:'Rent car'
    },
    {
      path:'/about',
      display:'About'
    },
    {
      path:'/service',
      display:'Services'
    },
    {
      path:'/condition',
      display:'Conditions'
    }
  ]

  const quickCar = [
    {
      path:'#',
      display:'Citroen C3'
    },
    {
      path:'#',
      display:'Dacia Duster'
    },
    {
      path:'#',
      display:'Ford Fiesta'
    },
    {
      path:'#',
      display:'Renault Clio 5'
    },
  ]

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className="logo">
              <h1>
                <Link to="/home" className='d-flex align-items-center gap-3'>
                  <i class="ri-roadster-fill"></i>
                  <span>RentCar</span>
                </Link>
              </h1>
            </div>
            <p className='footer_logo-content'>Rent car is the only place you need to rent a car for your trip, whether you come
								from Morocco or from abroad ,we offer you the best car you want.</p>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='md-4'>
              <h5 className='footer_link-title'>Links</h5>
              <ListGroup>
                {
                  quickLinks.map((item , index)=>(
                    <ListGroupItem key={index} className='p-0 mt-3 border-0 bg-transparent
                    quick_link'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='md-4'>
              <h5 className='footer_link-title'>Best Cars</h5>
              <ListGroup>
                {
                  quickCar.map((item , index)=>(
                    <ListGroupItem key={index} className='p-0 mt-3 border-0 bg-transparent quick_link'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer_link-title mb-4'>Contact us</h5>
              <p className='office_info'>Phone: +212665474399</p>
              <p className='office_info'>Email: rentcar@gmail.com</p>
              <p className='office_info'>Safi,El jadida,Marrakech.Morocco</p>
              <p className='office_info'>Office Time:9am-7pm</p>
            </div>
          </Col>
          <Col lg='12'>
            <div className='footer_bottom'>
              <p className='gap-1 pt-4'>
                <i class='ri-copyright-line'></i>Copyright {year} Developed by Ofppt stagiaire. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
