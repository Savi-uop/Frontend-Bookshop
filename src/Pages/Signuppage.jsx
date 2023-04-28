import React from 'react'
import Footer from '../Components/Footer';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

function Signuppage() {
  return (
    <div className='mt-5' style={{ backgroundColor:'darkslategray' }}>
        
        <div className="modal show bg-light" style={{ display: 'block', position: 'initial' }} >
            <Modal.Dialog className='shadow-lg p-3 mb-5 bg-white rounded'>
                <span className='bg-light'>
                    <Modal.Header closeButton style={{ backgroundColor:'lightgrey' }}>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                </span>
                <Modal.Body>
                    <div className="container" >
                        <Form>
                            <fieldset>                          
                                <Form.Group as={Col} md="12" className='container'>
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name1">First Name</Form.Label>
                                                <Form.Control id="name1" placeholder="Enter your first name" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name2 ">Last Name</Form.Label>
                                                <Form.Control id="name2" placeholder="Enter your last name" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                <Form.Control id="dob" type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">NIC</Form.Label>
                                                <Form.Control id="nic" placeholder="XXX XXX XXX V" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                <Form.Control id="contact" type="text" maxLength={10} placeholder="+94 XX XXX XXXX"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">Gender</Form.Label>
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>Select your gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="0">Female</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Address Line 1</Form.Label>
                                                <Form.Control id="contact" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="contact">Address Line 2</Form.Label>
                                                    <Form.Control id="contact" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Address Line 3</Form.Label>
                                                <Form.Control id="contact" type="text"  placeholder="Town"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="username">Username</Form.Label>
                                                <Form.Control id="username" placeholder="Enter username" type="text" />
                                            </Form.Group>
                                        </Col>

                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control id="password" placeholder="Enter your password" type="password" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Agree to all terms & conditions"  />
                                    </Form.Group>                                    
                                </Form.Group>
                            </fieldset>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className='row'>
                        <div className='col-7'>
                            <p className="mb-0">Already have an account? <a href="/login" class="text-dark-50 fw-bold">Login</a></p>
                        </div>
                        <div className='col-5'><Button variant="info">Register</Button></div>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

        <div><Footer/></div>
    </div>
  )
}

export default Signuppage