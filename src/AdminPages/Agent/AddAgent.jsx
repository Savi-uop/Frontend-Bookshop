import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import { Button,Card,Badge,Modal,Form,Col,Row ,Table } from 'react-bootstrap'
import Suppliers from '../Suppliers';

function AddAgent() {

        // load supplier details
        const[suppliers,setSuppliers]= useState([]);
        

        useEffect( ()=> {
            loadSuppliers();
        },[]);

        const loadSuppliers = async () => {
            const result = await axios.get("http://localhost:8080/api/v1/supplier/getSuppliers");
            setSuppliers(result.data);
            // console.log(result.data);
        };

         //   add agent
         const[agent,setAgent] =useState({
            // id: "",
            fname: "",
            lname: "",
            nic: "",
            dob: "",
            address_line1:"",
            address_line2:"",
            address_line3:"",
            contact: "",
            supplier_id: "",
        });
    
        const {fname,lname,nic,dob,address_line1,address_line2,address_line3,supplier_id,contact} =agent;
        let navigate = useNavigate()
    
        const onInputChange = (e) => {
          setAgent({...agent,[e.target.name]: e.target.value});
        };
    
        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post(`http://localhost:8080/api/v1/agent/saveAgent`,agent);
            console.log(agent);
            navigate("/agents")
        }

       
            
            // const onSubmit =  async(e)=>{

            //     await axios.post(`http://localhost:8080/api/v1/agent/saveAgent`,
            //      JSON.stringify(agent),
            //     {
            //         headers:{
            //             'Content-TYpe' : 'application/json'
            //         }
            //     }
            // );
            // alert("Done")
            // console.log(agent);
            // }   

        
    
        

  return (
    <div>
      
        <div className='container'>
            <Card style={{ marginTop:"5rem" }} hover>
        
                <Form onSubmit={e=> onSubmit(e)}>
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Add new Agent
                        </Modal.Title>
                        </Modal.Header>
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
                                                        <Form.Select aria-label="Floating label select example" name='supplier_id' value={supplier_id}  onChange={(e)=>onInputChange(e)}>

                                                            {/* <option value="0">select</option>
                                                            <option value="1">Atlas</option>
                                                            <option value="2">Promate</option>
                                                            <option value="3">Richard</option> */}

                                                            {/* {       
                                                            suppliers.map( supplier1 =>( 
                                                                <option value={supplier1.supplier_name} key={supplier1.id} >{supplier1.supplier_name}</option> */}
                                                                
                                                        {/* ))}  */}

                                                            {
                                                                //this is working .it saves the agent id - not in relational modal
                                                            suppliers.map( (supplier1,index) => (
                                                                <option value ={supplier1.id} key={supplier1.id}>{supplier1.supplier_name}</option>
                                                        ))}

                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form.Group>   
                                    </fieldset>
                                
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant='isecondary' ><a href='/agents'>Cancel</a></Button>
                            <Button variant="info" type='submit' >Add</Button>    
                        </Modal.Footer>
                </Form>  

            </Card>

        </div>

    </div>
  )
}

export default AddAgent
