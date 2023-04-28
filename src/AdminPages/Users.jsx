import { Button } from 'react-bootstrap';
import React,{ useState } from 'react'
import { Badge,Modal,Form,Col,Row,Alert,Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import Toast from 'react-bootstrap/Toast';
// import Admin_navbar from "../Admin/admin_navbar";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


export default function Users() {

    // display agent data
    const[users,setUsers]= useState([]);
            

    useEffect( ()=> {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/users/getUsers");
        setUsers(result.data);
        console.log(result.data);
    };

    //delete supplier

    const {id1} = useParams();

    const deleteUser = async id1 =>{
        await axios.delete(`http://localhost:8080/api/v1/users/deleting/${id1}`);
            loadUsers()
    }


  //view user
//   const [userShow, setUserShow] = useState(false);
  //edit user
//   const [editShow, setEditShow] = useState(false);
  // delete modal
//   const [smShow, setSmShow] = useState(false);

  // add user
    const [showsign, setSignUp] = useState(false); 
    const SignUpClose = () => setSignUp(false);
    const signUpShow = () => setSignUp(true);  

  return (
    <div>
      
        <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
                <h1>Users</h1>
        </div>

        <div className='container' style={{ marginTop:"2rem" }}>
            {/* <Button onClick={() => setAddAgent(true)} >Add Agent</Button> */}
            {/* <Button  ></Button> */}
            <Button variant='info'><a href='/agents/addagent/'>Add User </a></Button>
        </div>

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
                            {/* <th>DOB</th>    */}
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Acion</th>
                            </tr>
                        </thead>

                        <tbody>
                                {
                                    users.map( (user1,index) => (

                                        <tr>
                                            <th scope='row' key={index}><strong>{index +1}</strong></th>
                                            <td>{user1.id}</td>
                                            <td>{user1.fname}</td>
                                            <td>{user1.lname}</td>
                                            <td>{user1.nic}</td>
                                            {/* <td>{user1.dob}</td> */}
                                            <td>{user1.email}</td>
                                            <td>{user1.contact}</td>
                                            <td>
                                                <Link className='btn  btn-success mx-2' size='sm'  to={`/users/viewagent/${user1.id}`}>View </Link>
                                                {/* <Button className='mx-2' variant='secondary' size='sm' >Edit</Button> */}
                                                <Link className='btn btn-info mx-2' size='sm'  to={`/users/edituser/${user1.id}`}>Edit </Link>
                                                <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteUser(user1.id) }}>Delete</Button>

                                                
                                            </td>
                                        </tr>
                                    ))
                                } 
                            </tbody>
                    </Table>
                </div>
            </Card>
        </div>


        {/* View an user Modal */}

          {/* <Modal size="lg" show={userShow} onHide={() => setUserShow(false)} aria-labelledby="example-modal-sizes-title" centered>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              User : #2
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <div className="container" >
                        <Form>
                            <fieldset>                          
                                <Form.Group as={Col} md="12" className='container'>
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start" >
                                                <Form.Label htmlFor="name1">First Name</Form.Label>
                                                <Form.Control id="name1" placeholder="Enter your first name" type="text" disabled />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name2 ">Last Name</Form.Label>
                                                <Form.Control id="name2" placeholder="Enter your last name" type="text" disabled/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                <Form.Control id="dob" type="date" disabled />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">NIC</Form.Label>
                                                <Form.Control id="nic" placeholder="XXX XXX XXX V" type="text" disabled/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                <Form.Control id="contact" type="text" maxLength={10} placeholder="+94 XX XXX XXXX" disabled />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">Gender</Form.Label>
                                                <Form.Select aria-label="Floating label select example" disabled>
                                                    <option>Select your gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="0">Female</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Address Line 1</Form.Label>
                                                <Form.Control id="contact" type="text"  placeholder="Street" disabled/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="contact">Address Line 2</Form.Label>
                                                    <Form.Control id="contact" type="text"  placeholder="Street" disabled/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Address Line 3</Form.Label>
                                                <Form.Control id="contact" type="text"  placeholder="Town" disabled/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="username">Username</Form.Label>
                                                <Form.Control id="username" placeholder="Enter username" type="text" disabled />
                                            </Form.Group>
                                        </Col>

                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control id="password" placeholder="Enter your password" type="password" disabled/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                                                   
                                </Form.Group>
                            </fieldset>
                        </Form>
                </div>
        </Modal.Body>
          
        </Modal> */}
        {/* End of View Modal */}


        {/* Edit Modal */}

        {/* <Modal size="lg" show={editShow} onHide={() => setEditShow(false)} aria-labelledby="example-modal-sizes-title-sm" centered>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              User : #2
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <div className="container" >
                        <Form>
                            <fieldset>                          
                                <Form.Group as={Col} md="12" className='container'>
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name1">First Name</Form.Label>
                                                <Form.Control id="name1" placeholder="Enter your first name" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name2 ">Last Name</Form.Label>
                                                <Form.Control id="name2" placeholder="Enter your last name" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                <Form.Control id="dob" type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">NIC</Form.Label>
                                                <Form.Control id="nic" placeholder="XXX XXX XXX V" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                <Form.Control id="contact" type="text" maxLength={10} placeholder="+94 XX XXX XXXX"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">Gender</Form.Label>
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>Select your gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="0">Female</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="address_line1">Address Line 1</Form.Label>
                                                <Form.Control id="address_line1" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line2">Address Line 2</Form.Label>
                                                    <Form.Control id="caddress_line2" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="address_line3">Address Line 3</Form.Label>
                                                <Form.Control id="address_line3" type="text"  placeholder="Town"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="username">Username</Form.Label>
                                                <Form.Control id="username" placeholder="Enter username" type="text" />
                                            </Form.Group>
                                        </Col>

                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control id="password" placeholder="Enter your password" type="password" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                                                   
                                </Form.Group>
                            </fieldset>
                        </Form>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">Save Changes</Button>
          <Button variant="primary">Cancel</Button>
        </Modal.Footer>
      </Modal> */}

        

        {/* End of Edit modal */}


        {/* Delete modal */}
        
        {/* <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
          <Alert variant="danger">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Delete User
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure to delete user?</p>  
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info">Yes</Button>
              <Button variant="primary">Cancel</Button>
            </Modal.Footer> 
        </Alert> 
      </Modal> */}

        {/* End of Delete Modal */}


        {/* Signup ----create acount ----add user */}

        <Modal show={showsign} className='shadow rounded' onHide={SignUpClose}>
            {/* <Modal.Dialog className='shadow-lg p-3 mb-5 rounded'> */}
                <span className="bg-light rounded-3">
                    <Modal.Header closeButton style={{ backgroundColor:'lightgrey' }}>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                </span>
                <Modal.Body>
                    <div className="container" >
                        <Form>
                            <fieldset>                          
                                <Form.Group as={Col} md="12" className='container'>
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name1">First Name</Form.Label>
                                                <Form.Control id="name1" placeholder="Enter your first name" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="name2 ">Last Name</Form.Label>
                                                <Form.Control id="name2" placeholder="Enter your last name" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="dob">Date Of Birth</Form.Label>
                                                <Form.Control id="dob" type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">NIC</Form.Label>
                                                <Form.Control id="nic" placeholder="XXX XXX XXX V" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="g-2">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                <Form.Control id="contact" type="text" maxLength={10} placeholder="+94 XX XXX XXXX"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="nic">Gender</Form.Label>
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>Select your gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="0">Female</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="address_line1">Address Line 1</Form.Label>
                                                <Form.Control id="address_line1" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                    <Form.Label htmlFor="address_line2">Address Line 2</Form.Label>
                                                    <Form.Control id="address_line2" type="text"  placeholder="Street"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="address_line3">Address Line 3</Form.Label>
                                                <Form.Control id="address_line3" type="text"  placeholder="Town"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3">
                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="username">Username</Form.Label>
                                                <Form.Control id="username" placeholder="Enter username" type="text" />
                                            </Form.Group>
                                        </Col>

                                        <Col md>
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control id="password" placeholder="Enter your password" type="password" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Group className="mb-3 text-start">
                                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Agree to all terms & conditions"  />
                                    </Form.Group>                                    
                                </Form.Group>
                            </fieldset>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className='row'>
                        
                        <div className='col'><Button variant="info" onClick={SignUpClose}>Add User</Button></div>
                    </div>
                </Modal.Footer>
            {/* </Modal.Dialog> */}
        </Modal>


        {/* ENd of  add user */}

    </div>

  
  )

  
}


