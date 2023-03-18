import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import "../styles/navbar.css"

export default function NavBar() {

    const navLinks = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/rent',
            display: 'Rent car '
        },
        {
            path: '/about',
            display: 'About us'
        },
        {
            path: '/service',
            display: 'Services'
        }
    ]

    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
    return (
        <div className='main_navbar'>
            <Container>
                <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                    
                    <span className='mobile_menu'>
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className="menu">
                            { navLinks.map((item, index) => (
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active nav_item' : 'nav_item'} key={index}>{item.display}</NavLink>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className='nav_right'>
                        <div className="search_box">
                            <input type="text" placeholder='search' />
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </div> */}
                    <Row>
                    <Col lg="4" md="3" sm="4">
                    <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-roadster-fill"></i>
                    <span>
                      RentCar 
                    </span>
                  </Link>
                </h1>
              </div>
                </Col></Row>
                
            </div>
            </Container>
        </div>
    )
    }
