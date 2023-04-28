import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { MDBIcon } from 'mdb-react-ui-kit';

function categories() {
  return (
    <div className='mt-5 pt-5'>
        <div className='mt-4'>

             {/* darkturquoise */}
            <Card className='shadow rounded-2' style={{ backgroundColor: 'darkblue' , color: 'white' ,fontFamily :'fantasy'}}>
                {/* <Card.Img variant="top" src="/images/bg2.jpg" width="50px"/> */}
                <Card.Body >
                <Card.Text> <h2 className='text-left'>Shop By Categories</h2> <MDBIcon fas icon="cart-plus text-light" size='2x' /> </Card.Text>
                </Card.Body>
            </Card>
            <br />
            {/*  */}

            <CardGroup>
                <Card style={{ width: '16rem', backgroundColor: 'lightblue', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">
                    <Card.Body>
                        <Card.Title> <strong>Sationary</strong></Card.Title>
                        <a href='#'><MDBIcon fas icon="pen text-primary" size='4x' /></a>
                        <Card.Text>
                        | Pen | Pencil | Sissors | Erasor | Other |
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '16rem', backgroundColor: 'lightpink', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">
                    
                <Card.Body>
                        <Card.Title> <strong>Children</strong></Card.Title>
                        <MDBIcon fas icon="paperclip text-danger" size='4x' />
                        <Card.Text>
                        | Story Books | Workbooks | Games | Other |
                        </Card.Text>
                    </Card.Body>
                    
                </Card>

                <Card style={{ width: '16rem', backgroundColor: 'lightgray', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">
                    
                    <Card.Body>
                            <Card.Title> <strong>NewsPaper</strong></Card.Title>
                            <MDBIcon fas icon="newspaper text-secondary" size='4x' />
                            <Card.Text>
                            | Daily | Weekly  | Other |
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>

                    <Card style={{ width: '16rem', backgroundColor: 'lightcyan', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">    
                    <Card.Body>
                    <Card.Title><strong>Magazine</strong></Card.Title>
                    <MDBIcon fas icon="atlas text-info" size='4x' />
                    <Card.Text>
                    | Daily | Weekly  | Monthly | Other |
                    </Card.Text>
                    </Card.Body>
                </Card>

                
            </CardGroup>

            {/* 2nd row */}
            <CardGroup>
                <Card style={{ width: '16rem', backgroundColor: 'violet', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">
                    <Card.Body>
                        <Card.Title> <strong>Education</strong></Card.Title>
                        <MDBIcon fas icon="book text-dark" size='4x' />
                        <Card.Text>
                        | Past Paper Books | Workbooks | Other |
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '16rem', backgroundColor: 'lightgreen', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">    
                    <Card.Body>
                    <Card.Title><strong>Novel</strong></Card.Title>
                    <MDBIcon fas icon="journal-whills text-success" size='4x' />
                    <Card.Text>
                    | English | Sinhala  | Scientific Fictions | Other |
                    </Card.Text>
                    </Card.Body>
                </Card>

                

                <Card style={{ width: '16rem', backgroundColor: 'lightyellow', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">    
                    <Card.Body>
                    <Card.Title><strong>Religous</strong></Card.Title>
                    <MDBIcon fas icon="bible text-warning" size='4x' />
                    <Card.Text>
                    | Budhism | Chatholic  | Other |
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '16rem', backgroundColor: 'lightsalmon', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">    
                    <Card.Body>
                    <Card.Title><strong>Writting Materials</strong></Card.Title>
                    <MDBIcon fas icon="book-open text-danger" size='4x' />
                    <Card.Text>
                    | A4 | Writting Papers | Excerise Book | Other |
                    </Card.Text>
                    </Card.Body>
                </Card>

                {/* <Card style={{ width: '16rem', backgroundColor: 'lightsalmon', color:'Black' }} className="mb-2 cursor-pointer hover-shadow rounded-2">    
                    <Card.Body>
                    <Card.Title><strong>Writting Materials</strong></Card.Title>
                    <MDBIcon fas icon="book-open text-danger" size='4x' />
                    <Card.Text>
                    | A4 | Writting Papers | Excerise Book | Other |
                    </Card.Text>
                    </Card.Body>
                </Card> */}
                
            </CardGroup>
        </div>
        
    </div>
  )
}

export default categories