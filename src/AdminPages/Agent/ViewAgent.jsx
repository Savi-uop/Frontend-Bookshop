import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Badge, Button, Card} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';

function ViewAgent() {

        const [agent,setAgent] = useState({
            id:"",
            fname:"",
            lname:"",
            nic:"",
            dob:"",           
            address_line1:"",
            address_line2:"",
            address_line3:"",
            supplier_id:"",
            contact:""
        })

        const {id} = useParams();

        useEffect( () =>{
            loadAgent();
        },[]);

        const loadAgent = async () =>{
            const result =await axios.get(`http://localhost:8080/api/v1/agent/${id}`)
            setAgent(result.data);
        }

  return (
    <div>
            <div className='container'>
                
                <Card style={{ marginTop:"5rem" }} hover>
                    <Card.Body>
                    <Card.Title><strong>Agent Details</strong></Card.Title>
                    <Card.Text style={{ marginTop:"1rem" }}>
                        <ListGroup variant="flush">
                        <ListGroup.Item>
                            <tr>
                            <td><Badge bg="info"><b>Id : </b></Badge></td> &nbsp;
                            <td>{agent.id}</td>
                            </tr>
                            </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Fist Name :</b></td>
                                <td>{agent.fname}</td>
                            </tr>                
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Last Name :</b></td>
                                <td>{agent.lname}</td>
                            </tr>                
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>NIC :</b></td>
                                <td>{agent.contact}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>DOB :</b></td>
                                <td>{agent.dob}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Address : </b></td>
                                <td>{agent.address_line1}<br/>{agent.address_line2}<br/>{agent.address_line3}</td>
                            </tr> 
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            <tr>
                                <td><b>State :</b></td>
                                <td>{agent.address_line2}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>City :</b></td>
                                <td>{agent.address_line3}</td>
                            </tr> 
                        </ListGroup.Item> */}
                        <ListGroup.Item>
                            <tr>
                                <td><b>Supplier :</b></td>
                                <td>{agent.supplier_id.supplier_name}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Contact Number :</b></td>
                                <td>{agent.contact}</td>
                            </tr> 
                        </ListGroup.Item>
                        
                        </ListGroup>
                        
                    </Card.Text>
                    <Button variant='secondary'><Link to={"/agents"}>Back</Link></Button>
                    </Card.Body> 
                </Card>
            </div>
    </div>
  )
}

export default ViewAgent
