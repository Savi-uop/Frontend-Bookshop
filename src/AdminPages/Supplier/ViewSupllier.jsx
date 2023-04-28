import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';


function ViewSupllier() {

        const [supplier,setSupplier] = useState({
            id:"",
            supplier_name:"",
            contact:"",
            address_line1:"",
            address_line2:"",
            address_line3:""
        })
    
        const {id} = useParams();
    
        useEffect( () =>{
            loadSupplier();
        },[]);
    
        const loadSupplier = async () =>{
            const result =await axios.get(`http://localhost:8080/api/v1/supplier/${id}`)
            setSupplier(result.data);
        }

  return (
    <div>
        <div className='container'>
      
            <Card style={{ marginTop:"5rem" }} hover>
                <Card.Body>
                <Card.Title><strong>Supplier Details</strong></Card.Title>
                <Card.Text style={{ marginTop:"1rem" }}>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        <tr>
                        <td><b>Id :</b></td>
                        <td>{supplier.id}</td>
                        </tr>
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Name :</b></td>
                            <td>{supplier.supplier_name}</td>
                        </tr>                
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Contact No :</b></td>
                            <td>{supplier.contact}</td>
                        </tr> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>Street :</b></td>
                            <td>{supplier.address_line1}</td>
                        </tr> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>State :</b></td>
                            <td>{supplier.address_line2}</td>
                        </tr> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <tr>
                            <td><b>City :</b></td>
                            <td>{supplier.address_line3}</td>
                        </tr> 
                    </ListGroup.Item>
                    </ListGroup>
                    
                </Card.Text>
                <Button variant='secondary'><Link to={"/suppliers"}>Back</Link></Button>
                </Card.Body> 
            </Card>
        </div>
    </div>
  )
}

export default ViewSupllier
