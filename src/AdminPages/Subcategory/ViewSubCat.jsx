import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button,ListGroup,Card } from 'react-bootstrap';

function ViewSubCat() {

   
    //load data from db

    const [subcategory,setSubCategory] = useState({
        id:"",
        subcat_name:"",
        category:"",
        description:""
      })
  
      const {id} = useParams();
  
      useEffect( () =>{
          loadSubCat();
      },[]);
  
      const loadSubCat = async () =>{
        const result =await axios.get(`http://localhost:8080/api/v1/subcategory/${id}`)
        setSubCategory(result.data);
      }


  return (
    <div>
      
        <div className='container'>
        
            <Card style={{ marginTop:"5rem" }} hover>
                <Card.Body>
                <Card.Title><strong>Sub Category Details</strong></Card.Title>
                <Card.Text style={{ marginTop:"1rem" }}>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        <tr>
                        <td><b>Id :</b></td>
                        <td>{subcategory.id}</td>
                        </tr>
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Name :</b></td>
                            <td>{subcategory.subcat_name}</td>
                        </tr>                
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Categpry Id :</b></td>
                            <td>{subcategory.category.id}</td>
                        </tr>                
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Description :</b></td>
                            <td>{subcategory.description}</td>
                        </tr> 
                    </ListGroup.Item>
                    </ListGroup>
                    
                </Card.Text>
                <Button variant='secondary'><Link to={"/categories"}>Back</Link></Button>
                </Card.Body> 
            </Card>
        </div>

    </div>
  )
}

export default ViewSubCat
