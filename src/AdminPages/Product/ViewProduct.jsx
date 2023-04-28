import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';

function ViewProduct() {

    const [product,setProduct] = useState({
        id:"",
        name:"",
        description:"",
        quantity:"",
        agent_price:"",           
        sales_price:"",
        reorder_level:"",
        category:"",
        supplier:"",
        date_added:""
    })

    const {id} = useParams();

    useEffect( () =>{
        loadProduct();
    },[]);

    const loadProduct = async () =>{
        const result =await axios.get(`http://localhost:8080/api/v1/products/${id}`)
        setProduct(result.data);
    }


  return (
    <div>
            <div className='container'>
                
                <Card style={{ marginTop:"5rem" }} hover>
                    <Card.Body>
                    <Card.Title><strong>Product Details</strong></Card.Title>
                    <Card.Text style={{ marginTop:"1rem" }}>
                        <ListGroup variant="flush">
                        <ListGroup.Item>
                            <tr>
                            <td><b>Id :</b></td>
                            <td>{product.id}</td>
                            </tr>
                            </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Name of the product :</b></td>
                                <td>{product.name}</td>
                            </tr>                
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Product description :</b></td>
                                <td>{product.description}</td>
                            </tr>                
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Quantity :</b></td>
                                <td>{product.quantity}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Agent Price :</b></td>
                                <td>{product.agent_price}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Sales Price </b></td>
                                <td>{product.sales_price}</td>
                            </tr> 
                        </ListGroup.Item>
                    
                        <ListGroup.Item>
                            <tr>
                                <td><b>Re-order Level :</b></td>
                                <td>{product.reorder_level}</td>
                            </tr> 
                        </ListGroup.Item> 
                        <ListGroup.Item>
                            <tr>
                                <td><b>Category :</b></td>
                                <td>{product.category.name}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Supplier :</b></td>
                                <td>{product.supplier.supplier_name}</td>
                            </tr> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <tr>
                                <td><b>Added Date :</b></td>
                                <td>{product.date_added}</td>
                            </tr> 
                        </ListGroup.Item>
                        
                        </ListGroup>
                        
                    </Card.Text>
                    <Button variant='secondary'><Link to={"/products"}>Back</Link></Button>
                    </Card.Body> 
                </Card>
            </div>
    </div>
  )
}

export default ViewProduct
