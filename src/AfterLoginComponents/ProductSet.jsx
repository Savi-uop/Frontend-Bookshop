import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Container,Col } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';
import Title from '../Components/Title';
import ProductGroup from './ProductGroup';




function ProductSet() {
  return (
    <div className='mt-5'>

        
        <Container>

            <Card className='text-start' style={{ color: 'darkolivegreen'}}>            
                <Card.Body >
                <Card.Text> <h3><strong><Title title={"Category1"}/></strong></h3>  </Card.Text>
                </Card.Body>
            </Card>

            <CardGroup className='shadow rounded-2'>              
                {/* <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product1.jpeg"} />
                <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product2.jpeg"} />    
                <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product3.jpeg"} /> 
                <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product8.png"} />     
                <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product5.jpg"} />  
                <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product6.jpeg"} />                   */}
                 <Col md>
                  {/* <ProductCard/> */}
                  {/* <ProductGroup/> */}
                </Col>
            </CardGroup>
        </Container>

    </div>
  )
}

export default ProductSet