import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Navbar,Nav,Container,Form,Button, Table , Col,Row} from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
// import {Container,Col,Row} from'react-bootstrap';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useCart } from 'react-use-cart';


import NewProductCard from './NewProductCard';

function AffterLogin_subnavbar() {

    const [lgShow, setLgShow] = useState(false)

    const { 
        isEmpty,
        totalItems,
      } = useCart();

    const [searchInput,setSearchInput] = useState('');
    const [productData,setProductData] = useState([]);

  return (
    <>
        <div className='pt-3' >

            <Navbar bg="light" expand="xxl" className='mt-5 shadow ' fixed='top' style={{ marginTop:"35rem" }}>
                <Container fluid >
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    
                        <Nav.Link href="#"><strong >Welcome, miss. <a><u>Arunoda Jayasundara</u></a></strong></Nav.Link>    
                        
                    </Nav>

                    <Nav className='justify-content-center' style={{ flex: 1}}>
                        <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2 " size="xl" aria-label="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
                                <Button variant="info">Search</Button>
                        </Form>
                    </Nav>

                    <Nav className='justify-content-center'>
                        <Nav.Link href="#wishlist"><MDBIcon far icon="heart text-danger" className='me-3 ' size='2x'/></Nav.Link> 
                        {/* <Nav.Link href="#cart"><MDBIcon fas icon="shopping-cart text-info" className='me-3 ' size='2x' onClick={() => setLgShow(true)} /></Nav.Link>     */}
                       
                       {!isEmpty && <span style={{ position : 'relative',left: '-21px',top:'-18px' }}>{totalItems}</span>}
                        <Nav.Link href="/cart"><MDBIcon fas icon="shopping-cart text-info" className='me-3 ' size='2x' />
                        {/* <span style={{ marginLeft:!isEmpty ? '-13px' : 0}}>Cart</span> */}
                        </Nav.Link> 
                        
                    </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
            

        </div>


        {/* Begin of Cart nodal */}

        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg" style={{ color:'cornflowerblue' }}> Order Confirmation </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Table responsive striped hover>
                        <thead style={{ backgroundColor:'lightblue', color:'Blue' }}>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>55.00</td>
                                <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                <td>50.00</td>
                                <td>500.00</td>
                                <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>55.00</td>
                                <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                <td>50.00</td>
                                <td>500.00</td>
                                <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>55.00</td>
                                <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                <td>50.00</td>
                                <td>500.00</td>
                                <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>

                            <tr style={{ backgroundColor:'black', color:'white' }}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td align='right'><strong>Total</strong></td>
                                <td align='right'><strong>Rs.890.00</strong></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick="" >Checkout <MDBIcon fas icon="credit-card ms-2" /></Button>
            </Modal.Footer>
        </Modal>

        {/* End of cart modal */}

    </>
  )
}

export default AffterLogin_subnavbar