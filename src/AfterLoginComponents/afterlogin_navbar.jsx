import React from 'react'
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MDBIcon } from 'mdb-react-ui-kit';

import Title from '../Components/Title';

function afterlogin_navbar() {
  return (
    <div>

        {/* begin of navbar */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='shadow-sm' fixed="top">
            <Container>
            <Navbar.Brand href="#home"><Title title={"BOOK MART"}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Categories" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Stationary</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Novels </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Writting Materials</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">WorkBooks</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                {/* <nav><Link to="/about">about</Link></nav> */}
                <Nav.Link href="/contact">Contact</Nav.Link>

                </Nav>
                <Nav>
                  <Nav.Link  onClick="#" href="/"><MDBIcon fas icon="user" className='ms-2 me-3' size='sm'/>Sign out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* end of navbar*/}

    </div>
  )
}

export default afterlogin_navbar