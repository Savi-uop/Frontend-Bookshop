import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Container,Col,Button } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import NewProductCard from './NewProductCard';

function ProductGroup() {

 // display product data
 const[Products,setProducts]= useState([]);
    
//  const handleClick = (item) =>{
//     console.log(item);
//  };

 useEffect( ()=> {
 loadProducts();
 },[]);

 const loadProducts = async () => {
     const result = await axios.get("http://localhost:8080/api/v1/products/getProducts");
     setProducts(result.data);
     console.log(result.data);
 };

 //cart
    const [cart,setCart] = useState([]);

    const handleClick = (item) =>{
       cart.push(item);
       console.log(cart);
     };

  return (
    <React.Fragment>
    <div>
        <section>
             {
                Products.map( item => (
                    
                    // <NewProductCard key={item.id} item={item} />

                    <Card style={{ width: '14rem'}} className="cursor-pointer hover-shadow "> 
                        <Card.Img variant="top" src="images/products/no-image.png" /> 

                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text style={{ color :'blue' }}><strong>Rs.{item.sales_price}.00</strong>
                             
                        </Card.Text>
                        <Button variant="info" className='text-white shadow' onClick={handleClick}>Add to cart <MDBIcon fas icon="shopping-cart" /></Button>
                        
                        </Card.Body>
                    </Card>  
                    
                  ))
              }          
                
             
            
            
        </section>
    </div>
    </React.Fragment>
  )
}

export default ProductGroup
