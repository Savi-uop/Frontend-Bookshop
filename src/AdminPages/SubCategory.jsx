import React from 'react'
import { useState,useEffect} from 'react';
import { Button,Card,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams} from 'react-router-dom';

function SubCategory() {

    //show categories
    const[subcategories,setSubCategories]= useState([]);
        

    useEffect( ()=> {
        loadSubCategories();
    },[]);

    const loadSubCategories = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/subcategory/getSubCats`);
        setSubCategories(result.data);
        console.log(result.data);
    };
  
    const {id} = useParams();

    const deleteSubCategory = async id =>{
        await axios.delete(`http://localhost:8080/api/v1/subcategory/deleting/${id}`);
           loadSubCategories()
    }



    // another way to loas sub categories - data tika load wenwa call krgann ba
    
        // const[categoryData,setCategoryData] = useState(null);
        // const CatList =() =>{
        //     useEffect(() => {
        //         fetch(`http://localhost:8080/api/v1/subcategory/getSubCats`).then((res)=>{
        //             return res.json();
        //         }).then((res1) =>{
        //             console.log(res1);
        //         }).catch((err) => {
        //             console.log(err.message);
        //         })
        //     },[])
        // }
        

    return (
        <div>
        
            <div style={{ marginTop:"3rem" }}> 
                <Card hover>
                    <div className='container row' style={{ marginTop:"2rem" }}>
                        <Table striped hover responsive>
                            <thead variant="dark">
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Sub-Category Name</th>
                                    {/* <th> Category Id</th> */}
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>        

                            <tbody>
                                {
                                   subcategories && subcategories.map( (subcategory,index) => (

                                        <tr>
                                            <th scope='row' key={index}><strong>{index +1}</strong></th>
                                            <td>{subcategory.id}</td>
                                            <td>{subcategory.subcat_name}</td>
                                            {/* <td>{subcategory.category && subcategory.category.map(data1=>(
                                               
                                                data1.id
                                            ))} 
                                            </td> */}
                                            {/* <td>{subcategory.category.id}</td> */}
                                            <td>{subcategory.description}</td>
                                            <td>
                                                <Link className=' btn  btn-success mx-2' size='sm'  to={`/subcategory/viewsubcat/${subcategory.id}`}>View </Link>
                                               
                                                <Link className='btn btn-info mx-2' size='sm'  to={`/subcategory/editsubcat/${subcategory.id}`}>Edit </Link>
                                                <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteSubCategory(subcategory.id) }}>Delete</Button>

                                                {/* methn  button thune function liyann */}
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

export default SubCategory
