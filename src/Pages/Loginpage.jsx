import React from 'react'
import Footer from '../Components/Footer';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginpage() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/newuser/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/welcome');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
   
   

  return (


    <div style={{ marginTop:"5rem" }}>
        {/* style={{ backgroundColor:'lightgrey' }} */}
        {/* <Button variant="primary" onClick={handleShow}>
             Launch demo modal
        </Button>
         */}

         {/* show={show} onHide={handleClose} */}
    
            {/* <div  style={{ marginTop:"5rem" }}> */}

            <Modal.Dialog className='shadow-lg p-3 mb-5 bg-white rounded'>
                <span className="bg-light">
                    <Modal.Header style={{ backgroundColor:'lightgrey' }}>
                        <Modal.Title>Login </Modal.Title>
                    </Modal.Header>
                </span>

                <Modal.Body>
                    <div className="container" >
                        <Form>
                            <fieldset>
                                <Form.Group as={Col} md="11" className='container'>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Label htmlFor="email">Email Address</Form.Label>
                                        <Form.Control id="email" placeholder="name@gamil.com" type="email" value={email} onChange={ (event) => {  setEmail(event.target.value); }} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                        <Form.Control id="password" placeholder="Enter your password" type="password" value={password} onChange={ (event) => {  setPassword(event.target.value); }} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Agree to all terms & conditions" required />
                                    </Form.Group>                                    
                                </Form.Group>
                            </fieldset>
                        </Form>
                    </div>
                    
                </Modal.Body>

                <Modal.Footer>
                    <div className='row'>
                        <div className='col-7'>
                            {/* <p className="mb-0">Don't have an account? <a href="/signup" class="text-dark-50 fw-bold">Sign Up</a></p> */}
                            <p className="mb-0">Don't have an account? <strong>Click Sign up tab</strong></p>
                        </div>
                    <div className='col-5'><Button type="submit" variant="success" onClick={login}>Login</Button></div>
                </div>
                </Modal.Footer>
            </Modal.Dialog>
            {/* </div> */}
        {/* </div> */}
        

        <div><Footer/></div>
    </div>
    
  )
}

export default Loginpage
