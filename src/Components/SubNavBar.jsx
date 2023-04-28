import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Navbar,Nav,Container,Form,Button } from 'react-bootstrap';

function SubNavBar() {
  return (
    <div className='pt-3' >
        
        <Navbar bg="light" expand="lg" className='mt-5 shadow ' fixed='top' style={{ marginTop:"5rem" }}>
        <Container fluid >
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
             
            </Nav>
            
            <Form className="d-flex ">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"               
                    />
                    <Button variant="info">Search</Button>
                </Form>

                
            </Navbar.Collapse>
        </Container>
    </Navbar>
                    
       
               
    </div>
  )
}

export default SubNavBar
