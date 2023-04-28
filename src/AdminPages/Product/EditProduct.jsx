import React from 'react'
import { Button,Modal,Form,Col,Row,Badge,Card } from "react-bootstrap";
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function EditProduct() {

            //load product data to edit

            let history = useNavigate();

            const {id} = useParams();
            console.log(id);
            

            const[product,setProduct] =useState({
                id: "",
                name: "",
                description: "",
                quantity:"",
                agent_price:"",
                sales_price:"",
                reorder_level:"",
                catName:"",
                category:"",
                supplierName:"",
                supplier:"",
                
            });

            const {name,description,quantity,agent_price,sales_price,reorder_level,catName,category,supplierName,supplier} =product;

            const onInputChange = (e) => {
                setProduct({...product,[e.target.name]: e.target.value});
            };

            useEffect( ()=>{
                loadProductById();
            },[] );

            const onSubmit = async e => {
                e.preventDefault();
                await axios.put(`http://localhost:8080/api/v1/products/update/${id}` ,supplier);
                // history.push("/");
                history("/suppliers");
            };

            const loadProductById = async () => {
                const result = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
                setProduct(result.data);
            };


  return (
    <div>
        <div className='container'>
            <Card style={{ marginTop:"5rem" }} hover>
                <Form >
                            {/*onSubmit={e=> onSubmit(e)}  */}
                        <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                            &nbsp;<Badge bg="info">Edit Ptoduct &nbsp; &nbsp;   Id : {id}</Badge>
                        </Modal.Title>


                        <Modal.Body>
                                <div className="container" >

                                    
                                    <fieldset>                          
                                        <Form.Group as={Col} md="12" className='container'>
                                            <Row className="g-2">
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="name">Product Name</Form.Label>
                                                    <Form.Control id="name" placeholder="Enter product name" type="text" value ={name}  />
                                                    </Form.Group>
                                                </Col>
                                                    
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="description">Description</Form.Label>
                                                    <Form.Control id="description" placeholder="Enter about product" type="text" value ={description} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="g-2">
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="category">Category</Form.Label>
                                                    <Form.Select aria-label="category" value={category} >

                                                        {  
                                                            category.map(cat1 => ( 
                                                                    
                                                                <option value={cat1.name} key={cat1.id}>{cat1.name}</option> 
                                                                ))
                                                        }

                                                               
                                                                {/* <option value="0">Select the category</option>
                                                                <option value="1">Stationary</option>
                                                                <option value="2">Writing Material</option>
                                                                <option value="3">Novel</option>
                                                                <option value="4">Newspapers</option>
                                                                <option value="5">Magazines</option>
                                                                <option value="6">Educatioonal</option>
                                                                <option value="7">Children</option> */}
                                                                {/* <option value="8">Religous</option> */}
                                                    </Form.Select>
                                                    </Form.Group>
                                                </Col>

                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="agent_price">Agent Price</Form.Label>
                                                    <Form.Control id="agent_price" type="text" value ={agent_price}  />
                                                    </Form.Group>
                                                </Col>
                                                    
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="sales_price">Sales Price</Form.Label>
                                                    <Form.Control id="sales_price" type="text" value ={sales_price} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="g-2">
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="quantity">Quantity</Form.Label>
                                                    <Form.Control id="quantity"  type="number" value ={quantity}  />
                                                    </Form.Group>
                                                </Col>
                                                    
                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="reorder_level">Re-order Level</Form.Label>
                                                    <Form.Control id="reorder_level" type="number" value ={reorder_level}  />
                                                    </Form.Group>
                                                </Col>

                                                <Col md> 
                                                    <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="supplier">Supplier</Form.Label>
                                                    <Form.Select aria-label="supplier" value={supplier} >
                                                            
                                                        {
                                                            supplier.map(supplier1 => (
                                                                <option value={supplier1.supplier_name} key={supplier1.id}>{supplier1.supplier_name}</option>
                                                            ))
                                                        }
                                                                    {/* <option value="0">Select your agent</option>
                                                                    <option value="1">Atlas</option>
                                                                    <option value="2">Richard</option>
                                                                    <option value="3">Promate</option>
                                                                    <option value="4">Mango</option>
                                                                    <option value="5">M.D.Gunasena</option> */}
                                                    </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </fieldset>
                                    

                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant='secondary' ><a href='/products'>Cancel</a></Button>
                                <Button variant="info" type='submit' >Add</Button>    
                            </Modal.Footer>

                </Form>
            </Card>
        </div>
    </div>
  )
}

export default EditProduct
