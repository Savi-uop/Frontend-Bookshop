import React, {useState,useEffect}from "react"
import { Button,Table,Col,Row,Card,Form, InputGroup } from "react-bootstrap";
import { useParams,Link} from 'react-router-dom';
import axios from 'axios';




export default function Products() {

    
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

       //delete productb

       const {id1} = useParams();

       const deleteProduct = async id1 =>{
           await axios.delete(`http://localhost:8080/api/v1/products/deleting/${id1}`);
               loadProducts()
       }

       //search product
       const [search,setSearch] = useState('')
       console.log(search);

  return (
    
    <div>
      {/* <Admin_navbar/> */}
        <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
            <h1>Products</h1>
        </div>

        <div className=" container row">
          
                <div className="col">
                <div className='container' style={{ marginTop:"2rem" }}>
                    <Button variant="secondary"><a href="/products/addproduct"> Add Product</a></Button>
                </div>
                </div>
                
                <div className="col">
                  <Form className="d-flex" style={{ marginTop:"2rem" }}>
                    {/* <Form.Control type="search" placeholder="Search" className="me-2 " size="xl" aria-label="Search"  />
                    <Button variant="info">Search</Button> */}
                    <InputGroup className="my-3" >
                      <Form.Control type="search" placeholder="Search products" className="me-2 " size="xl" aria-label="Search" onChange={(e) => setSearch(e.target.value)}  />
                    </InputGroup>
                  </Form>
                </div>
        </div>

        <div className='container'>
            <Card hover style={{ marginTop:"2rem" }}>
                  <div className='container row'  style={{ marginTop:"2rem" }}>
                    

                    <Table responsive striped >
                      <thead>
                        <tr>
                          {/* <th>#</th> */}
                          <th>Id</th>
                          <th>Product Name</th>
                          {/* <th>Description</th> */}
                          <th>Quantity</th>
                          <th>Agent Price</th>
                          <th>Sales Price</th>                
                          {/* <th>Re-Order Level</th> */}
                          {/* <th>Category Id</th> */}
                          {/* <th>Supplier</th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                          {
                              Products && Products.filter((item) =>{
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                              }).map( (product1,index) => (

                                    <tr>
                                        {/* <th scope='row' key={index}><strong>{index +1}</strong></th> */}
                                          <td>{product1.id}</td>
                                          <td>{product1.name}</td>
                                          {/* <td>{product1.description}</td> */}
                                          <td>{product1.quantity}</td>
                                          <td>{product1.agent_price}</td>
                                          <td>{product1.sales_price}</td>
                                          {/* <td>{product1.reorder_level}</td> */}
                                          {/* <td>{product1.category.name}</td> */}
                                          {/* <td>{product1.supplier.supplier_name}</td> */}

                                          <td>
                                              <Link className='btn  btn-success mx-2' size='sm'  to={`/products/viewproduct/${product1.id}`}>View </Link>
                                              {/* <Button className='mx-2' variant='secondary' size='sm' >Edit</Button> */}
                                              <Link className='btn btn-info mx-2' size='sm'  to={`/products/editproduct/${product1.id}`}>Edit </Link>
                                              <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteProduct(product1.id) }}>Delete</Button>

                                                          
                                          </td>
                                  </tr>
                              ))
                          } 

                            
                      </tbody>
                      
                    </Table>

                  </div>
            </Card>
        </div>
   
   
  
    </div>
  )
}
