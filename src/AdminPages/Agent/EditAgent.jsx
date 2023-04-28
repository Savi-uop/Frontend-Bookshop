import React from 'react'
import { Form,Button,Col,Row,Modal,Badge,Card,Container } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function EditAgent() {

        //load agent data to edit

        let history = useNavigate();

        const {id} = useParams();
        console.log(id);
        

        const[agent,setAgent] =useState({
            id: "",
            fname: "",
            lname: "",
            nic: "",
            dob: "",
            address_line1:"",
            address_line2:"",
            address_line3:"",
            contact: "",
            supplier: "",
        });

        const {fname,lname,nic,dob,address_line1,address_line2,address_line3,supplier_id,contact} =agent;

        const onInputChange = (e) => {
            setAgent({...agent,[e.target.name]: e.target.value});
        };

        useEffect( ()=>{
            loadAgentById();
        },[] );

        const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`http://localhost:8080/api/v1/agent/update/${id}` ,agent);
            // history.push("/");
            history("/agents");
        };

        const loadAgentById = async () => {
            const result = await axios.get(`http://localhost:8080/api/v1/agent/${id}`);
            setAgent(result.data);
        };


  return (
    <div>
        <div className='container'>


            <Card style={{ marginTop:"5rem" }} hover>
                <Form onSubmit={e=> onSubmit(e)}>
                    
                    <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                        &nbsp;<Badge bg="info">Edit Agent &nbsp; &nbsp;   Id : {id}</Badge>
                    </Modal.Title>
                        

                    <Modal.Body>
                        <div className="container" >
                            
                                <fieldset>                          
                                    <Form.Group as={Col} md="12" className='container'>
                                        <Row className="g-2">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="fname">First Name</Form.Label>
                                                    <Form.Control name="fname" placeholder="Enter your first name" type="text" value ={fname} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="lname ">Last Name</Form.Label>
                                                    <Form.Control name="lname" placeholder="Enter your last name" type="text" value ={lname} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="g-2">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="nic">NIC</Form.Label>
                                                    <Form.Control name='nic' placeholder="XXX XXX XXX V" type="text" value ={nic} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                    <Form.Control name='dob' type="date" value ={dob} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            
                                        </Row>
                                                                               
                                        <Row className="g-3">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line1">Address Line 1</Form.Label>
                                                    <Form.Control name='address_line1' type="text"  placeholder="Street" value ={address_line1} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                        <Form.Label htmlFor="address_line2">Address Line 2</Form.Label>
                                                        <Form.Control name='address_line2' type="text"  placeholder="State" value ={address_line2} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line3">Address Line 3</Form.Label>
                                                    <Form.Control name='address_line3' type="text"  placeholder="City" value ={address_line3} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="g-2">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                    <Form.Control name='contact' type="text" maxLength={10} placeholder="+94 XX XXX XXXX" value ={contact} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="supplier_id">Supplier</Form.Label>
                                                    <Form.Select aria-label="Floating label select example" name='supplier_id' onChange={(e)=>onInputChange(e)}>
                                                        
                                                                
                                                            {/* //this is not working */}
                                                                {/* <option value ={supplier} key={supplier.id} selected>{supplier.supplier_name}</option> */}
                                                        
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                     </Form.Group>   
                                </fieldset>
                            
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" type='submit' > <a href='/agents'>Cancel</a>  </Button> 
                        <Button variant="info" type='submit' >Save</Button>
                    </Modal.Footer>

                </Form>
            </Card>
        </div>
    </div>
  )
}

export default EditAgent
