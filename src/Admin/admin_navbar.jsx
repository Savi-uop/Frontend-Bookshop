import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { useState } from 'react';

import Title from '../Components/Title';

function admin_navbar() {


  return (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='shadow-sm' fixed="top">
            <Container fluid>
                <Navbar.Brand href="#"><Title title={"BOOK MART"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" justify-content-center"  style={{ maxHeight: '100px' }} navbarScroll>
                        {/* me-auto my-2 my-lg-0 */}
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/welcome">Shop</Nav.Link>                   
                    </Nav>
                    <Nav className=" justify-content-center" style={{ flex: 1}}>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2 " aria-label="Search" />
                            <Button variant="info">Search</Button>
                        </Form>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Link href="#action1">Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav> */}
    </div>
  
  )
}

export default admin_navbar