import React from 'react'
import { Button,Card,Form,Modal,Container,Badge} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditCat() {

        //load category data to edit

        let history = useNavigate();
        const {id} = useParams();
        console.log(id);
        

        const[category,setCategory] =useState({
            id: "",
            name: "",
            description: "",
            
        });

        const {name,description} =category ;

        const onInputChange = (e) => {
            setCategory({...category,[e.target.name]: e.target.value});
        };

        useEffect( ()=>{
            loadCategoryById();
        },[] );

        const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`http://localhost:8080/api/v1/category/update/${id}` ,category);
            // history.push("/");
            history("/categories");
        };

        const loadCategoryById = async () => {
            const result = await axios.get(`http://localhost:8080/api/v1/category/${id}`);
            setCategory(result.data);
        };


  return (
    <div className='container'>

        {/* <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
            <h1>Edit Category</h1>
        </div> */}

        <Card style={{ marginTop:"5rem" }} hover>
            <Form onSubmit={e=> onSubmit(e)}>
                        
                            <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                                &nbsp;<Badge bg="info">Edit Category &nbsp; &nbsp;   Id : {id}</Badge>
                            </Modal.Title>
                        

                        <Modal.Body>
                            <Container>
                                
                                    <div className='row'>
                                    <div className='col'>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Category Name</Form.Label>
                                        <Form.Control type={"text"} placeholder="Enter Category Name" name='name' value={name} onChange={(e) => onInputChange(e) } />  
                                        </Form.Group>
                                    </div>
                            
                                    <div className='col'>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type={"text"} placeholder="Enter About Category" name='description' value={description} onChange={(e) => onInputChange(e) } />  
                                    </Form.Group>
                                    </div>
                                    
                                    </div>
                                
                                <div className="d-grid gap-2"> 
                                    <Modal.Footer>
                                        <Button variant="secondary" type='submit' > <a href='/categories'>Cancel</a>  </Button> 
                                        <Button variant="info" type='submit'>Save</Button>
                                    </Modal.Footer>
                                </div>
                            </Container>
                        </Modal.Body>
                    </Form>
                </Card>
    </div>
  )
}

export default EditCat
