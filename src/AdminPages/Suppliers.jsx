import React,{ useState,useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Badge,Modal,Form,Col,Row,Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Suppliers() {

      // Add Supplier
      const [addSupplier, setAddSupplier] = useState(false);
      //viewSupplier
      const [supplierShow, setSupplierShow] = useState(false);
      //edit Supplier
      const [supplierEditShow, setSupplierEditShow] = useState(false);
      // delete Supplier
      const [supplierDeleteShow, setSupplierDeleteShow] = useState(false);


          //show supplier list as  a table
          const[suppliers,setSuppliers]= useState([]);
            

          useEffect( ()=> {
              loadSuppliers();
          },[]);

          const loadSuppliers = async () => {
              const result = await axios.get("http://localhost:8080/api/v1/supplier/getSuppliers");
              setSuppliers(result.data);
          };

          //delete supplier

          const {id1} = useParams();

          const deleteSupplier = async id1 =>{
              await axios.delete(`http://localhost:8080/api/v1/supplier/deleting/${id1}`);
                  loadSuppliers()
          }

          // add supplier

          const[supplier,setSupplier] =useState({
            id: "",
            supplier_name: "",
            contact: "",
            address_line1: "",
            address_line2: "",
            address_line3: "",
        });

        const {id,supplier_name,contact,address_line1,address_line2,address_line3} =supplier;
        let navigate = useNavigate()

        const onInputChange = (e) => {
          setSupplier({...supplier,[e.target.name]: e.target.value});
        };

        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post(`http://localhost:8080/api/v1/supplier/saveSupplier`,supplier)
            navigate("/suppliers")
        };


  return (
    <div>
      <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
            <h1>Supplier</h1>
      </div>

      <div className='container' style={{ marginTop:"2rem" }}>
            <Button onClick={() => setAddSupplier(true)}>Add Supplier</Button>
      </div>

      <div  className='container'>
        <Card hover style={{ marginTop:"2rem" }}>
              <div className='container row'  style={{ marginTop:"2rem" }}>
                  <Table striped hover responsive>
                      <thead variant="dark">
                        <tr>
                          {/* <th>#</th> */}
                          <th>Id</th>
                          <th>Supplier Name</th>
                          <th>Contact No</th>
                          <th>Street</th>
                          <th>State</th>
                          <th>City</th>
                          <th>Acion</th>
                        </tr>
                      </thead>

                      <tbody>
                              {
                                  suppliers.map( (supplier1,index) => (

                                      <tr>
                                          {/* <th scope='row' key={index}><strong>{index +1}</strong></th> */}
                                          <td>{supplier1.id}</td>
                                          <td>{supplier1.supplier_name}</td>
                                          <td>{supplier1.contact}</td>
                                          <td>{supplier1.address_line1}</td>
                                          <td>{supplier1.address_line2}</td>
                                          <td>{supplier1.address_line3}</td>
                                          <td>
                                              <Link className='btn  btn-success mx-2' size='sm'  to={`/suppliers/viewsupplier/${supplier1.id}`}>View </Link>
                                              {/* <Button className='mx-2' variant='secondary' size='sm' >Edit</Button> */}
                                              <Link className='btn btn-info mx-2' size='sm'  to={`/suppliers/editsupplier/${supplier1.id}`}>Edit </Link>
                                              <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteSupplier(supplier1.id) }}>Delete</Button>

                                              
                                          </td>
                                      </tr>
                                  ))
                              } 
                        </tbody>
                  </Table>
              </div>
        </Card>
      </div>



        {/* add a supplier Modal */}

        <Modal size="lg" show={addSupplier} onHide={() => setAddSupplier(false)} aria-labelledby="example-modal-sizes-title" centered>
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
                    </div>
              </Modal.Body>

              <Modal.Footer>
              <Button variant="primary" onClick={() =>setAddSupplier(false)}>Cancel</Button>
                <Button variant="info" type='submit' >Add</Button>
                  
              </Modal.Footer>
          </Form>  
        </Modal>
        {/* End of add Modal */}


      

        {/* Edit an supplier Modal */}

        {/* <Modal size="lg" show={supplierEditShow} onHide={() => setSupplierEditShow(false)} aria-labelledby="example-modal-sizes-title" centered>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Supplier : #2
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
                                                <Form.Label htmlFor="name">Supplier Company Name</Form.Label>
                                                <Form.Control id="name" placeholder="Enter supplier name" type="text"  />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="contact">Contact No</Form.Label>
                                                <Form.Control id="contact" placeholder="XXXXXXXXXX" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    
                                        
                                    <Col md> 
                                      <Form.Group className="mb-3 text-start">
                                        <Form.Label htmlFor="description">Description</Form.Label>
                                          <Form.Control id="description" placeholder="special note" type="text" />
                                        </Form.Group>
                                    </Col>
                                    
                                    

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
                                                    <Form.Control id="address_line2" type="text"  placeholder="Street" />
                                            </Form.Group>
                                        </Col>
                                        <Col md> 
                                            <Form.Group className="mb-3 text-start">
                                                <Form.Label htmlFor="address_line3">Address Line 3</Form.Label>
                                                <Form.Control id="address_line3" type="text"  placeholder="Town"/>
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
           
        </Modal>*/}

        {/* End of Edit Modal */}

        {/* Delete modal */}
       
        <Modal size="sm" show={supplierDeleteShow} onHide={() =>  setSupplierDeleteShow(false)}  >
          <Alert variant="danger">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Delete Product
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure to delete this supplier?</p>  
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info">Yes</Button>
              <Button variant="primary">Cancel</Button>
            </Modal.Footer> 
        </Alert> 
        </Modal>

        {/* End of Delete Modal */}


    </div>
  )
}
