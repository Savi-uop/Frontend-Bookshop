import React from 'react'
import { Card,Button, } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';

function ProductCard() {
     // add to cart
  const {addItem} = useCart();


    // display product data
    const[Products,setProducts]= useState([]);
                

    useEffect( ()=> {
    loadProducts();
    },[]);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/products/getProducts");
        setProducts(result.data);
        console.log(result.data);
    };

   

  return (
    <div>

        { 
            Products.map( product1 => (
            <Card style={{ width: '14rem'}} className="cursor-pointer hover-shadow ">
                    <Card.Img variant="top" src="images/products/no-image.png" />

                    <Card.Body>
                    <Card.Title>{product1.name}</Card.Title>
                    <Card.Text style={{ color :'blue' }}><strong>{product1.sales_price}</strong>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                    </Card.Text>
                    <Button variant="info" className='text-white shadow' >Add to cart <MDBIcon fas icon="shopping-cart" /></Button>
                    {/* onClick={addItem(product1.item)} */}
                    </Card.Body>
            </Card>  
                  
            ))
        }
    </div>
  )
}

export default ProductCard
