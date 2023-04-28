import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button,Card,Form,Modal,Container,Badge} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import SubCategory from './SubCategory';
import CategoryTable from '../Admin/CategoryTable';

import Admin_navbar from '../Admin/admin_navbar';


function Categories() {
   

    //show categories
    // const[categories,setCategories]= useState([]);
        

    // useEffect( ()=> {
    //     loadCategories();
    // },[]);

    // const loadCategories = async () => {
    //     const result = await axios.get("http://localhost:8080/api/v1/category/getCategories");
    //     setCategories(result.data);
    // };

    // const {id} = useParams();

    // const deleteCategory = async id =>{
    //     await axios.delete(`http://localhost:8080/api/v1/category/deleting/${id}`);
    //        loadCategories()
    // }

    //delete modal
    //const [deleteShow, setDeleteShow] = useState(false);
     

  return (
    
    
        <div>
            {/* <Admin_navbar/> */}
            <div className='container-fluid ' style={{ marginTop:"5rem" }}> 
                <h1>Category / Sub-Category</h1>
            </div>

            {/* <div className='container' style={{ marginTop:"3rem" }}>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" className='lg'>Products</Button>
                    <Button variant="info" ><a href='/categories'>Categories</a></Button>
                    <Button variant="primary"><a href='/subcategory'>Sub-Categories</a></Button>
                </ButtonGroup>
            </div> */}
                
                <div className='container' style={{ marginTop:"3rem" }}>  
                    <Tabs defaultActiveKey="category"  id="cat_subcat"  className="mb-3">
                        <Tab eventKey="category" title="Category"  justify>
                            <CategoryTable/>
                        </Tab>
                        <Tab eventKey="subcategory" title="Sub Category">
                            <SubCategory/>
                        </Tab>
                        
                    </Tabs>
                </div>
            

        </div>
      
  )
}

export default Categories
