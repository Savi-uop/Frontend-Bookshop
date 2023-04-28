import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Reports() {

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
    <div>
        <div className='container-fluid ' style={{ marginTop:"5rem" }}> 
            <h1>Reports</h1>
        </div>

        <div className='row'>

          <div className=' container col ml-2'>
            <Card style={{ width: '25rem' }} className="cursor-pointer hover-shadow">
              <Card.Body>
                <Card.Title>Income Reports</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.....
                </Card.Text>
                <Card.Link href="#">User Report</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className=' container col'>
            <Card style={{ width: '25rem' }} className="cursor-pointer hover-shadow">
              <Card.Body>
                <Card.Title>Product Report</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className=' container col'>
            <Card style={{ width: '25rem' }} className="cursor-pointer hover-shadow">
              <Card.Body>
                <Card.Title>User Report</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className=' container col'>
            <Card style={{ width: '25rem' }} className="cursor-pointer hover-shadow">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>

      </div>


    </div>

  )
}
