import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// import ProductCard from '../Components/ProductCard';


function Content() {

  const [isHovering,setIsHovering] = useState(false);


  //load products
  const[productList,setProductList]= useState([]);

            

  useEffect( ()=> {
      loadProducts();
  },[]);

  const loadProducts = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/products/getProducts");
      setProductList(result.data);
      console.log(result.data);
  };

  return (
    <div className ='container'>
      <Container>
        <span></span>
            <Card className='text-start' style={{ color: 'darkolivegreen'}}>            
                <Card.Body >
                <Card.Text> <h3><strong>Products</strong></h3>  </Card.Text>
                </Card.Body>
            </Card>
      </Container>
      <Container className ='posts-list mb-5'>

      </Container>


      <Row className="g-3 ">
        
          {

            productList.map( product1 => (
              <Col md>

                <Card style={{ width: '14rem'}} className="cursor-pointer hover-shadow ">
                    <Card.Img variant="top" src="images/products/no-image.png" />
      
                    <Card.Body>
                      <Card.Title>{product1.name}</Card.Title>
                      <Card.Text style={{ color :'blue' }}><strong>Rs.{product1.sales_price}.00</strong>
                          {/* Some quick example text to build on the card title and make up the
                          bulk of the card's content. */}
                      </Card.Text>
                      <Button variant="info" className='text-white shadow' href ="/login">Add to cart <MDBIcon fas icon="shopping-cart" /></Button>
                    </Card.Body>
                </Card> 
              
              </Col>
            ))

          }
        
      </Row>

      
      {/* <Row className="g-3 ">
        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product1.jpeg"} />
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product2.jpeg"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product3.jpeg"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product4.png"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product5.jpg"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product6.jpeg"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product7.jpeg"} />     
        </Col>

        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product8.png"} />     
        </Col>
          
        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product9.png"} />     
        </Col>
          
        <Col md>
          <ProductCard title={"Gel Pen"} price={"Rs.30.00"} path={"images/products/product10.jpeg"} />     
        </Col>
          
      </Row>    */}
    </div>
  )
}

export default Content