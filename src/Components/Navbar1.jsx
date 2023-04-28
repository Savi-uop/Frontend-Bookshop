import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.bundle.min.js';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBIcon } from "mdb-react-ui-kit";
// import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import Title from "../Components/Title";
// import ButtonTitle from '..Components/ButtonTitle';

import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

// import {Button,Modal,Form,Col} from 'react-bootstrap';

function Navbar1() {
  // for login modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // login activity
  const [ufname, setUFname] = useState("");
  const [ulname, setULname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //for signup
  const [showsign, setSignUp] = useState(false);
  const SignUpClose = () => setSignUp(false);
  const signUpShow = () => setSignUp(true);

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/newuser/save", {
        ufname: ufname,
        ulname: ulname,
        email: email,
        password: password,
      });
      alert("User Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  //save user - customer
  // const[user,setUser] =useState({
  //     id: "",
  //     fname: "",
  //     lname: "",
  //     dob: "",
  //     nic: "",
  //     contact: "",
  //     email: "",
  //     user_name:"",
  //     password:""
  // });

  // const {id,fname,lname,dob,nic,contact,email,user_name,password} =user;
  // let navigate = useNavigate()

  // const onInputChange = (e) => {
  //   setUser({...user,[e.target.name]: e.target.value});
  // };

  // const onSubmit = async (e) => {
  //     e.preventDefault();
  //     await axios.post(`http://localhost:8080/api/v1/users/saveUser`,user)
  //     // console.log(user);
  //     // <Alert variant="success">
  //     //    <p> "Successfully Registered!"</p>
  //     // </Alert>
  //     alert("Successfully Registered!");

  //     // navigate("/welcome")
  // };

  return (
    <>
      {/* begin of navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow-sm"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Title title={"BOOK MART"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Stationary
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Novels </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Writting Materials
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  WorkBooks
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about">About</Nav.Link>
              {/* <nav><Link to="/about">about</Link></nav> */}
              <Nav.Link href="/contact">Contact</Nav.Link>

              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className=" justify-content-center"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {/* me-auto my-2 my-lg-0 */}
                  {/* <Nav.Link href="/">Home</Nav.Link> */}
                  {/* <Nav.Link href="/products">Products</Nav.Link> */}
                  <Nav.Link href="/welcome">Shop</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              {/* <Navbar.Collapse id="navbarScroll">
                    <Nav className=" justify-content-center" style={{ flex: 1}}>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2 " aria-label="Search" />
                            <Button variant="info">Search</Button>
                        </Form>
                    </Nav>
            </Navbar.Collapse> */}
            </Nav>

            <Nav>
              {/* logout */}

              {/* <Nav.Link href="/"><MDBIcon fas icon="user" className="ms-2 me-3" size="sm"  />{btitle}</Nav.Link> */}
              {/* href="/login"       */}

              {/* <Nav.Link onClick={signUpShow}> <p style={{ color:"white" }}>{bname}</p></Nav.Link> */}
              {/* login */}
              {/* <Nav.Link eventKey={2} onClick={handleShow}> <text style={{ color:"white" }}>{bname}</text></Nav.Link>    */}
              <Nav.Link href="/admin">Admin</Nav.Link>
              <Nav.Link onClick={signUpShow}>Signup</Nav.Link>
              {/* <Nav.Link eventKey={2} onClick={handleShow}> Login</Nav.Link> */}
              <Nav.Link eventKey={2} href="/login">
                {" "}
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* end of navbar*/}

      {/* begin of login modal */}
      <Modal
        className="shadow-lg p-3 mb-5 rounded"
        show={show}
        onHide={handleClose}
      >
        <span className="bg-light rounded-3">
          <Modal.Header closeButton style={{ backgroundColor: "lightblue" }}>
            <Modal.Title>
              <strong>Login</strong>{" "}
            </Modal.Title>
          </Modal.Header>
        </span>

        <Modal.Body>
          <div className="container">
            <Form>
              <fieldset>
                <Form.Group as={Col} md="11" className="container">
                  <Form.Group className="mb-3 text-start">
                    <Form.Label htmlFor="Tuser_name">Username</Form.Label>
                    <Form.Control
                      id="TextInput1"
                      placeholder="Enter your username"
                      type="text"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-start">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      id="password"
                      placeholder="Enter your password"
                      type="password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-start">
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="Agree to all terms & conditions"
                    />
                  </Form.Group>
                </Form.Group>
              </fieldset>
            </Form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="row">
            <div className="col-7">
              <p className="mb-0">
                Don't have an account?{" "}
                <a
                  // href="/signup"
                  class="text-dark-50 fw-bold"
                  onClick={signUpShow}
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="col-5">
              <Link to="/welcome">
                <Button type="submit" variant="info" onClick={handleClose}>
                  Login
                </Button>{" "}
              </Link>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {/* end of login modal */}

      {/* Begin of signup modal */}

      {/* <Modal show={showsign} className='shadow rounded' onHide={SignUpClose}>
            <Form onSubmit={e=> onSubmit(e)}>
           
                <span className="bg-light rounded-3">
                    <Modal.Header closeButton style={{ backgroundColor:'lightgrey' }}>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                </span>
                <Modal.Body>
                    <div className="container" >
                        
                            <fieldset>                          
                                <Form.Group as={Col} md="12" className='container'>
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="fname">First Name</Form.Label>
                                                <Form.Control placeholder="Enter your first name" name="fname" type="text" required  value={fname} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="lname ">Last Name</Form.Label>
                                                <Form.Control placeholder="Enter your last name" name="lname" type="text" value={lname} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                <Form.Control name="dob" type="date" value={dob} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">NIC</Form.Label>
                                                <Form.Control name="nic" placeholder="XXX XXX XXX V" type="text" value={nic} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                <Form.Control name="contact" type="text" maxLength={10} placeholder="+94 XX XXX XXXX" value={contact} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Email Address</Form.Label>
                                                <Form.Control name="email" type="email"  placeholder="name@gmail.com" value={email} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>

                                   

                                    <Row className="g-3">
                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="user_name">Username</Form.Label>
                                                <Form.Control name="user_name" placeholder="Enter username" type="text" value={user_name} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>

                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control  placeholder="Enter your password" name="password" type="password" value={password} onChange={(e)=>onInputChange(e)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Agree to all terms & conditions" required />
                                    </Form.Group>                                    
                                </Form.Group>
                            </fieldset>
                        
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className='row'>
                        <div className='col-7'>
                            <p className="mb-0">Already have an account? <a href="/login" class="text-dark-50 fw-bold">Login</a></p>
                        </div>
                        <div className='col-5'><Button variant="info" type='submit'   onClick={SignUpClose}>Register</Button></div>
                       
                    </div>
                </Modal.Footer>
            
            </Form>
        </Modal> */}

      {/* End of sign up modal */}

      {/* Signup */}

      <Modal show={showsign} className="shadow rounded" onHide={SignUpClose}>
        <Form>
          <span className="bg-light rounded-3">
            <Modal.Header closeButton style={{ backgroundColor: "lightgrey" }}>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
          </span>
          <Modal.Body>
            <div className="container">
              <fieldset>
                <Form.Group as={Col} md="12" className="container">
                  <Row className="g-2">
                    <Col md>
                      <Form.Group className="mb-3 text-start">
                        <Form.Label htmlFor="fname">First Name</Form.Label>
                        <Form.Control
                          placeholder="Enter your first name"
                          name="ufname"
                          type="text"
                          required
                          value={ufname}
                          onChange={(event) => {
                            setUFname(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group className="mb-3 text-start">
                        <Form.Label htmlFor="lname ">Last Name</Form.Label>
                        <Form.Control
                          placeholder="Enter your last name"
                          name="luname"
                          type="text"
                          required
                          value={ulname}
                          onChange={(event) => {
                            setULname(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-2">
                    <Col md>
                      <Form.Group className="mb-3 text-start">
                        <Form.Label htmlFor="contact">Email Address</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="name@gmail.com"
                          pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                          required
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md>
                      <Form.Group className="mb-3 text-start">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                          placeholder="Enter your password"
                          name="password"
                          required
                          type="password"
                          value={password}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3 text-start">
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="Agree to all terms & conditions"
                      required
                    />
                  </Form.Group>
                </Form.Group>
              </fieldset>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className="row">
              <div className="col-7">
                <p className="mb-0">
                  Already have an account?{" "}
                  <a href="/login" class="text-dark-50 fw-bold">
                    Login
                  </a>
                </p>
              </div>
              <div className="col-5">
                <Button variant="info" type="submit" onClick={save}>
                  Register
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* End signup */}
    </>
  );
}

export default Navbar1;
