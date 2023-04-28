// import React from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { useState } from 'react';


function Login() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
  <div >
     
     {/* dummy modal -meka login modal eka me.  otherthan that this is not used */}
     <Modal className='shadow-lg p-3 mb-5 rounded' show={show} onHide={handleClose}>
                <span className="bg-light">
                    <Modal.Header closeButton style={{ backgroundColor:'lightgrey' }}>
                        <Modal.Title>Login </Modal.Title>
                    </Modal.Header>
                </span>

                <Modal.Body>
                    <div className="container" >
                        <Form>
                            <fieldset>
                                <Form.Group as={Col} md="11" className='container'>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Label htmlFor="TextInput1">Username</Form.Label>
                                        <Form.Control id="TextInput1" placeholder="Enter your username" type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Label htmlFor="TextInpu2">Password</Form.Label>
                                        <Form.Control id="TextInput2" placeholder="Enter your password" type="password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Agree to all terms & conditions" />
                                    </Form.Group>                                    
                                </Form.Group>
                            </fieldset>
                        </Form>
                    </div>
                    
                </Modal.Body>

                <Modal.Footer>
                    <div className='row'>
                        <div className='col-7'>
                            <p className="mb-0">Don't have an account? <a href="/signup" class="text-dark-50 fw-bold">Sign Up</a></p>
                        </div>
                    <div className='col-5'><Button type="submit" variant="info">Login</Button></div>
                </div>
                </Modal.Footer>
            </Modal>
    
      

  </div>

  )
}

export default Login;