import React from 'react'
// import Afterlogin_navbar from '..AfterLoginComponents/afterlogin_navbar';
import Afterlogin_navbar from './afterlogin_navbar';
import AffterLogin_subnavbar from './AffterLogin_subnavbar';
import AfterLogin_carousal from './AfterLogin_carousal';
import Categories from './categories';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { Card,CardGroup,Container ,Row,Col,Button,Form} from 'react-bootstrap';
import ProductSet from './ProductSet';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { MDBIcon } from 'mdb-react-ui-kit';
import categories from './categories';

import {useCart} from 'react-use-cart';
import ProductGroup from './ProductGroup';
import NewProductCard from './NewProductCard';

// import SearchFilter from 'react-filter-search';


export default function AfterLogin_home() {

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

    //search
    // const { 
    //   isEmpty,
    //   totalItems,
    // } = useCart();

    // const [searchInput,setSearchInput] = useState('');
    // const [productData,setProductData] = useState([]);


    // async function getResponse(){
    //   const res = await fetch ('http://localhost:8080/api/v1/products/getProducts')
    //   .then(res=>res.json());
    //   setProductData(await res);
    // }

    // useEffect(()=>{
    //   getResponse();
    //   console.log(productData);
    // },[]);


  return (
    <div>
        <Afterlogin_navbar/>
        
        <AffterLogin_subnavbar />
        {/* <AfterLogin_carousal/> */}
        <Categories/>
        <div className='container'>
          {/* <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2 " size="xl" aria-label="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
              <Button variant="info">Search</Button>
          </Form> */}
    {/* {searchInput} */}
          {/* <SearchFilter 
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                            {results.map((item, i)=>(
                                <NewProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
          /> */}

        </div>
        {/* <ProductGroup/> */}
       {/* <ProductSet/> */}
        {/* <ProductSet/>
        <ProductSet/> */}



      {/* load products with categories */}
      <Container>

            {/* <Card className='text-start' style={{ color: 'darkolivegreen'}}>            
                <Card.Body >
                <Card.Text> <h3><strong>Products</strong></h3>  </Card.Text>
                </Card.Body>
            </Card> */}


          {/* mrthn wd kran hri product card ek */}
            <CardGroup className='shadow rounded-2'>              
            <Row className="g-3 ">
        
        
              { 
            
                productList.map( item => (
                    
                  <Col md>

                    <Card style={{ width: '14rem'}} className="cursor-pointer hover-shadow "> 
                        <Card.Img variant="top" src="images/products/no-image.png" /> 

                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        {/* <Card.Text>{item.category.id}</Card.Text> */}
                        <Card.Text style={{ color :'blue' }}><strong>Rs.{item.sales_price}.00</strong>
                             
                        </Card.Text>
                        <Button variant="info" className='text-white shadow' >Add to cart <MDBIcon fas icon="shopping-cart" /></Button>
                        
                        </Card.Body>
                    </Card> 
                  
                  </Col>
                            
                ))
              }
      
          </Row>
        </CardGroup>
        </Container>


        <Footer/>
    </div>
  )
}
