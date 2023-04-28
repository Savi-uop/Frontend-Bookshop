import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import { Button,Card,Badge,Modal,Form,Col,Row ,Table,InputGroup } from 'react-bootstrap'

function Agents() {

          // Add agent modal open
        //   const [addAgent, setAddAgent] = useState(false);

        // display agent data
        const[agents,setAgents]= useState([]);
            

          useEffect( ()=> {
              loadAgents();
          },[]);

          const loadAgents = async () => {
              const result = await axios.get("http://localhost:8080/api/v1/agent/getAgents");
              setAgents(result.data);
              console.log(result.data);
          };

          //delete supplier

          const {id1} = useParams();

          const deleteAgent = async id1 =>{
              await axios.delete(`http://localhost:8080/api/v1/agent/deleting/${id1}`);
                  loadAgents()
          }


        //   add agent
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
    
        const {id,fname,lname,nic,dob,address_line1,address_line2,address_line3,supplier,contact} =agent;
        let navigate = useNavigate()
    
        const onInputChange = (e) => {
          setAgent({...agent,[e.target.name]: e.target.value});
        };
    
        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post(`http://localhost:8080/api/v1/agent/saveAgent`,agent)
            // console.log(agent);
            navigate("/agents")
        };

        //search agent
       const [search,setSearch] = useState('')
       console.log(search);

  return (
    <div>
      
        <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
                <h1>Agents</h1>
        </div>

        <div className=" container row">
          
                <div className="col">
                <div className='container' style={{ marginTop:"2rem" }}>
                <Button variant='info'><a href='/agents/addagent/'>Add Agent </a></Button>
                </div>
                </div>
                
                <div className="col">
                  <Form className="d-flex" style={{ marginTop:"2rem" }}>
                    
                    <InputGroup className="my-3" >
                      <Form.Control type="search" placeholder="Search agents" className="me-2 " size="xl" aria-label="Search" onChange={(e) => setSearch(e.target.value)}  />
                    </InputGroup>
                  </Form>
                </div>
        </div>

        {/* <div className='container' style={{ marginTop:"2rem" }}> */}
            {/* <Button onClick={() => setAddAgent(true)} >Add Agent</Button> */}
            {/* <Button  ></Button> */}
            {/* <Button variant='info'><a href='/agents/addagent/'>Add Agent </a></Button> */}
        {/* </div> */}

        <div className='container'>
            <Card hover style={{ marginTop:"2rem" }}>
                <div className='container row'  style={{ marginTop:"2rem" }}>
                    <Table striped hover responsive>
                        <thead variant="dark">
                            <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>NIC</th>
                            <th>DOB</th>   
                            {/* <th>Street</th> */}
                            {/* <th>State</th> */}
                            {/* <th>City</th> */}
                            <th>Supplier</th>
                            <th>Contact Number</th>
                            <th>Acion</th>
                            </tr>
                        </thead>

                        <tbody>
                                {
                                    agents.filter((item) =>{
                                        return search.toLowerCase() === '' ? item : item.fname.toLowerCase().includes(search);
                                      }).map( (agent1,index) => (

                                        <tr>
                                            <th scope='row' key={index}><strong>{index +1}</strong></th>
                                            <td>{agent1.id}</td>
                                            <td>{agent1.fname}</td>
                                            <td>{agent1.lname}</td>
                                            <td>{agent1.nic}</td>
                                            <td>{agent1.dob}</td>
                                            {/* <td>{agent1.address_line1}</td> */}
                                            {/* <td>{agent1.address_line2}</td> */}
                                            {/* <td>{agent1.address_line3}</td> */}
                                            <td>{agent1.supplier_id.id}</td>
                                            <td>{agent1.contact}</td>
                                            <td>
                                                <Link className='btn  btn-success mx-2' size='sm'  to={`/agents/viewagent/${agent1.id}`}>View </Link>
                                                {/* <Button className='mx-2' variant='secondary' size='sm' >Edit</Button> */}
                                                <Link className='btn btn-info mx-2' size='sm'  to={`/agents/editagent/${agent1.id}`}>Edit </Link>
                                                <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteAgent(agent1.id) }}>Delete</Button>

                                                
                                            </td>
                                        </tr>
                                    ))
                                } 
                            </tbody>
                    </Table>
                </div>
            </Card>
        </div>


        {/* BEgin add agent modal */}
        {/* <div>
            <Modal size="lg" show={addAgent} onHide={() => setAddAgent(false)} aria-labelledby="example-modal-sizes-title" centered>
                <Form onSubmit={e=> onSubmit(e)}>
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Add new Supplier
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
                                                    <Form.Label htmlFor="supplier">Supplier</Form.Label>
                                                    <Form.Select aria-label="Floating label select example" name='supplier' value ={supplier} onChange={(e)=>onInputChange(e)}>
                                                        <option value="0">Select your Supplier Company</option>
                                                        <option value="1">Atlas</option>
                                                        <option value="2">Promate</option>
                                                        <option value="3">Richard</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                     </Form.Group>   
                                </fieldset>
                            
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="primary" onClick={() =>setAddAgent(false)}>Cancel</Button>
                        <Button variant="info" type='submit' >Add</Button>    
                    </Modal.Footer>
            </Form>  
            </Modal>
        </div> */}
          {/* End add agent modal */}

    </div>
  )
}

export default Agents
