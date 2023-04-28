import React from 'react'
import { Form,Button,Col,Row,Modal,Badge,Card,Container } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditSupplier() {

            //load supplier data to edit

            let history = useNavigate();

            const {id} = useParams();
            console.log(id);
            
    
            const[supplier,setSupplier] =useState({
                id: "",
                supplier_name: "",
                contact: "",
                address_line1:"",
                address_line2:"",
                address_line3:"",
                
            });
    
            const {supplier_name,contact,address_line1,address_line2,address_line3} =supplier;
    
            const onInputChange = (e) => {
                setSupplier({...supplier,[e.target.name]: e.target.value});
            };
    
            useEffect( ()=>{
                loadSupplierById();
            },[] );
    
            const onSubmit = async e => {
                e.preventDefault();
                await axios.put(`http://localhost:8080/api/v1/supplier/update/${id}` ,supplier);
                // history.push("/");
                history("/suppliers");
            };
    
            const loadSupplierById = async () => {
                const result = await axios.get(`http://localhost:8080/api/v1/supplier/${id}`);
                setSupplier(result.data);
            };

  return (
    <div>
        <div className='container'>


            <Card style={{ marginTop:"5rem" }} hover>
                <Form onSubmit={e=> onSubmit(e)}>
                            
                        <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                            &nbsp;<Badge bg="info">Edit Supplier &nbsp; &nbsp;   Id : {id}</Badge>
                        </Modal.Title>
                            

                            <Modal.Body>
                                <Container>
                                    
                                <fieldset>                          
                                    <Form.Group as={Col} md="12" className='container'>
                                        <Row className="g-2">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start" >
                                                    <Form.Label htmlFor="supplier_name">Supplier Company Name</Form.Label>
                                                    <Form.Control id="supplier_name" placeholder="Enter supplier name" name='supplier_name' type="text" value ={supplier_name} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="contact">Contact No</Form.Label>
                                                    <Form.Control id="contact" placeholder="XXXXXXXXXX" type="text" name="contact" value ={contact} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>


                                        <Row className="g-3">
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line1">Address Line 1</Form.Label>
                                                    <Form.Control id="address_line1" type="text"  placeholder="Street" name="address_line1" value ={address_line1} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                        <Form.Label htmlFor="address_line2">Address Line 2</Form.Label>
                                                        <Form.Control id="address_line2" type="text"  placeholder="State" name="address_line2" value ={address_line2} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md> 
                                                <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line3">Address Line 3</Form.Label>
                                                    <Form.Control id="address_line3" type="text"  placeholder="City" name="address_line3" value ={address_line3} onChange={(e)=>onInputChange(e)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>   
                                        
                                                                      
                                    </Form.Group>
                                </fieldset>   
        
                                </Container>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" type='submit' > <a href='/suppliers'>Cancel</a>  </Button> 
                                <Button variant="info" type='submit' >Save</Button>
                            </Modal.Footer>
                    </Form>
            </Card>
        </div>
    </div>
  )
}

export default EditSupplier
