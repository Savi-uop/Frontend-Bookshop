import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';


function ViewCat() {

    const [category,setCategory] = useState({
      id:"",
      name:"",
      description:""
    })

    const {id} = useParams();

    useEffect( () =>{
        loadCat();
    },[]);

    const loadCat = async () =>{
      const result =await axios.get(`http://localhost:8080/api/v1/category/${id}`)
      setCategory(result.data);
    }


  return (
    <div className='container'>
      
      <Card style={{ marginTop:"5rem" }} hover>
        <Card.Body>
          <Card.Title><strong>Category Details</strong></Card.Title>
          <Card.Text style={{ marginTop:"1rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <tr>
                  <td><b>Id :</b></td>
                  <td>{category.id}</td>
                </tr>
                </ListGroup.Item>
              <ListGroup.Item>
                <tr>
                    <td><b>Name :</b></td>
                    <td>{category.name}</td>
                </tr>                
              </ListGroup.Item>
              <ListGroup.Item>
                <tr>
                    <td><b>Description :</b></td>
                    <td>{category.description}</td>
                </tr> 
              </ListGroup.Item>
            </ListGroup>
              
          </Card.Text>
          <Button variant='secondary'><Link to={"/categories"}>Back</Link></Button>
        </Card.Body> 
      </Card>
    </div>
  )
}

export default ViewCat
