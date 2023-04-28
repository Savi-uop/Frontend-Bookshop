import React, { useRef } from 'react'
import { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Badge, Button, Table,Container,Form,Row,Col,InputGroup } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';


import Invoice from './Invoice';
import { render } from '@testing-library/react';

export default function Billingdashboard() {

const componentRef = useRef();
const handlePrint  = useReactToPrint({
    content:() => componentRef.current,
});
    
//payment
    const [lgShow, setLgShow] = useState(false)

    //load categories
    const[categories,setCategories]= useState([]);

    const[modalData,setModalData]= useState({
        id:"",
        name:"",
        description:"",
    })

    const loadCategories = () => {
        fetch("http://localhost:8080/api/v1/category/getCategories")
        .then(response => response.json())
        .then(res => setCategories(res))
    }

    const showDetails = (id) => {
        fetch(`http://localhost:8080/api/v1/category/${id}`)
        .then(response => response.json())
        .then(res => setModalData(res))
    }
    useEffect( ()=> {
        loadCategories();
    },[])

    // display product data
    const[Products,setProducts]= useState([]);
            

    useEffect( ()=> {
      loadProducts();
    },[]);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/products/getProducts");
        setProducts(result.data);
        console.log(result.data);
        // console.log(Products)
    };

    //search product 
   
     const [search,setSearch] = useState('')
     console.log(search);

  return (
    <div>
        <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
            <h1>Billing Dashboard</h1>
        </div>

        <div className='container-fluid'> 
            <div className='row'>
                <div className='col-3'>
                    
                        {
                                categories.map( (cat,index) => (
                                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "ButtonHighlight", height:"3rem" , marginTop:"1rem"}} >
                                        <Card.Body >
                                            <Card.Title>
                                            {/* <a href=""> Stationary </a> */}
                                            <a data-toggle="modal" data-id="category" onClick={(e)=>showDetails(cat.id)}  >{cat.name}</a>
                                            </Card.Title>    
                                        </Card.Body>    
                                    </Card>
                                    
            
                                 ) )
                        }
                    
                    
                    
                    {/* <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "aliceblue", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title>
                            <a href=""> Stationary </a>
                            
                            </Card.Title>    
                        </Card.Body>    
                    </Card> */}
{/* 
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "ButtonHighlight", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Wtriting Material </a>
                           
                            </Card.Title>    
                        </Card.Body>    
                    </Card>

                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "aliceblue", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Education </a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card>
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "ButtonHighlight", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Newspapers </a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card>
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "aliceblue", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Magazine</a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card>
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "ButtonHighlight", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Religous </a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card>
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "aliceblue", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Novel </a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card>
                    <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "ButtonHighlight", height:"4rem"}}>
                        <Card.Body >
                            <Card.Title  >
                            <a href=""> Children </a>
                            </Card.Title>    
                        </Card.Body>    
                    </Card> */}


                    
                </div>

                <div className='col-3'>
                    <div className='row'><Button size='lg' varient="primary">Bills Issued</Button></div>
                    <div className='mt-5'></div>
                    <div className='row'><Button size='lg' varient="primary">Bills hold</Button></div>

                    <div className="col">
                        <Form className="d-flex" style={{ marginTop:"2rem" }}>
                            
                            <InputGroup className="my-3" >
                            <Form.Control type="search" placeholder="Search agents" className="me-2 " size="xl" aria-label="Search" onChange={(e) => setSearch(e.target.value)}  />
                            </InputGroup>
                        </Form>
                    </div>

                    <div className='container'>
                        <tbody>
                            <Card>
                          {
                              Products && Products.filter((item) =>{
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                              }).map( (product1,index) => (

                                    <Table>
                                        <tr style={{color:"cadetblue"}}>
                                        {/* <th scope='row' key={index}><strong>{index +1}</strong></th> */}
                                         
                                          <Card hover style={{ height:"1rem" , marginTop:"0.3rem"}}>
                                            <td>{product1.name}</td>
                                          </Card>
                                          
                                          {/* <td>{product1.sales_price}</td> */}
                                          {/* <td><a><MDBIcon fas icon="plus" /></a></td> */}
                                        </tr>
                                    </Table>
                                ))
                            } 

                        </Card>
                        </tbody>
                    </div>

                </div>

                <div className='col-6' >
                    <Card className="cursor-pointer hover-shadow" >
                        <Card.Body ref={componentRef}>
                            <Card.Title >
                                    <div className='row'>
                                        <div className='col'><Badge bg='info'> Bill #1234</Badge></div> 
                                        <div className='col'><Badge bg='info' > Date : {new Date().toLocaleString() + ""}</Badge></div>
                                    </div> 
                            </Card.Title>  
                            <Table>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>U.price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>CR Book</td>
                                    <td>Rs.56.00</td>
                                    <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 2 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                    <td>130.00</td>
                                    <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Pen</td>
                                    <td>Rs.26.00</td>
                                    <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 5 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                    <td>130.00</td>
                                    <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Excercise Book</td>
                                    <td>Rs.56.00</td>
                                    <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 2 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                    <td>130.00</td>
                                    <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                                </tr>
                            </tbody>
                            </Table>

                            <div className='d-grid gap-2' style={{ backgroundColor:"lightseagreen" }}><strong>Total : 2391.00</strong></div>
                        </Card.Body>    
                        <Card.Footer>
                            {/* <Button onClick={() => setLgShow(true)} >Process <MDBIcon fas icon="credit-card ms-2" /></Button> */}
                        
                            <ButtonGroup aria-label="Basic example">
                                {/* <a href='/cpayment'>Card</a>  */}
                                <Button variant="secondary" className='lg'onClick={() => setLgShow(true)} >Card <MDBIcon fas icon="credit-card ms-2" /></Button>
                                {/* <Button variant="secondary" className='lg'>Cash<MDBIcon fas icon="credit-card ms-2" /></Button> */}
                               
                                {/* <Invoice ref={componentRef} /> */}
                                <Button variant="secondary" className='lg' onClick={handlePrint}>Cash<MDBIcon fas icon="credit-card ms-2" /></Button>
                               
                                        
                            </ButtonGroup>
                    
                        </Card.Footer>
                    </Card>
                </div>

            </div>
        </div>


        {/* Modals */}

        {/* pdf content */}

        

        {/* end of pdf content */}

        {/* Begin of Cart nodal */}

        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg" style={{ color:'aliceblue' }}> Order Confirmation </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Card Type</Form.Label><br/>
                                    <div className='container'>
                                        <img src='images/card3.png' width="150px" height="100px"></img>
                                        <img src='images/card1.png' width="150px" height="100px"/>
                                        <img src='images/card2.jpeg' width="150px" height="100px"></img>   
                                    </div>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Account Number</Form.Label>
                                        <Form.Control type="text" placeholder="XXX XXX XXX XXX" />   
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name on the card</Form.Label>
                                        <Form.Control type="text" />   
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Expire Date</Form.Label>
                                        <Form.Control type="month" placeholder="MM/YYYY" />   
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>CVC</Form.Label>
                                        <Form.Control type="text" maxLength="3" placeholder="XXX" />   
                                </Form.Group></Col>
                            </Row>
                            <div><Button variant="primary" type='submit'>Pay</Button></div>
                        </Form>
                        
                </Container>
            </Modal.Body>

            <Modal.Footer>
               
                    {/* <Button variant="secondary" className='lg'>Pay</Button> */}
   
            </Modal.Footer>
        </Modal>

        {/* End of cart modal */}


         {/*product modal */}
         {/* <div className='modal' id='mymodal'> */}
            <Modal size="lg" show={modalData} onHide={() => setModalData(false)} aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton >
                    <Modal.Title id="example-modal-sizes-title-sm">
                         <Badge bg="dark">{modalData.name} </Badge>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalData.id}
                            {/* <Button variant='danger' data-dismiss="modal" className='close'> No</Button>
                            <Button variant='info' > Yes</Button> */}
                </Modal.Body>
            </Modal>
            {/* </div> */}
            {/* products of modal */}

        {/* category */}

    </div>
  );
};


