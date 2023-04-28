import React from 'react'
import { Card,Button, Form,Row,Col } from 'react-bootstrap'
import { useState } from 'react'

function CardPayment() {

  return (
    // <div style={{ backgroundColor:"lightslategray" }}>    
        <div className='container-fluid' style={{ marginTop:"5rem" }}>
            <div style={{ marginTop:"5rem"}} > <Button variant='secondary' className='lg'> <a href='/billing'>Back</a></Button></div>

            <div className='align-self-center container'>
            <Card style={{ width: '65rem',marginTop:"5rem", alignContent:"center"}} >                   
                    <Card.Body>
                        <Card.Title>Amount : Rs.670.00</Card.Title>
                        <Card.Text>   </Card.Text>
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Card Type</Form.Label><br/>
                                    <div className='container'>
                                        <img src='images/card1.png' width="150px" height="100px"/>
                                        <img src='images/card2.jpeg' width="150px" height="100px"></img>
                                        <img src='images/card3.png' width="150px" height="100px"></img>
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
                        </Form>
                        <Button variant="primary">Pay</Button>
                    </Card.Body>
            </Card>     
            </div>
        </div>  
    // </div>
  )
}

export default CardPayment