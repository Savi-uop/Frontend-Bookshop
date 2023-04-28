import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form,Card,Button,Badge,Modal,Container } from 'react-bootstrap';

function AddSubCategory() {

        //load category data from db
        // const [categorylist,setCategoryList] = useState([{'name':'','íd':''}])
        // useEffect(() => {
        //     const fetchData = async() =>{
        //         const response = await fetch(`http://localhost:8080/api/v1/category/getCategories`)
        //         const newData = await response.json();
        //         setCategoryList(newData);
        //         console.log(newData);
        //     };
        //     fetchData();
        // },[])

        // const handleChange = (event) => {
        //     setSubCategory(event.target.value);
        // }
    
        // const saveBtn = (e) => {
        //     e.preventDefault();
        //     console.log()
        // }

        //another method
        // const[categoryList,setCategoryList]= useState([]);
        

    useEffect( ()=> {
        loadCategories();
    },[]);

    const loadCategories = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/category/getCategories");
        setCategoryList(result.data);
        // console.log(result.data);
    };

    //  sub-category add

    // const[subcategory,setSubCategory] =useState({
    //     id: "",
    //     subcat_name: "",
    //     category:"",
    //     description: "",
    //   });
  
    //   const {id,subcat_name,category,description} =subcategory;
    //   let navigate = useNavigate()
  
    //   const onInputChange = (e) => {
    //       setSubCategory({...subcategory,[e.target.name]: e.target.value});
    //   };
  
    //   const onSubmit = async (e) => {
    //       e.preventDefault();
    //       await axios.post("http://localhost:8080/api/v1/subcategory/saveSubCategory" ,subcategory)
    //       console.log(subcategory);
    //       navigate("/categories")
    //   };

      // other method to save

    const[subcat_name,setSubCatName] = useState(''); 
    // const[catId,setCatId] = useState('');
    const[catId,setCatId] = useState('');

    const[categoryList,setCategoryList] = useState([{'id':'','name':'','description':''}]); 
    const[description,setDescription] = useState(''); 

    const [validation,valChange] =useState(false);

    const handleChange = (event) => {
        setCatId(event.target.value)
    }

    const navigate = useNavigate();

    //submit form
    const handleSubmit =(e) =>{
      e.preventDefault();
        // console.log( { subcat_name , description,catId  })

        const subCatData = { subcat_name , description,catId  };
        console.log(subCatData);

      fetch("http://localhost:8080/api/v1/subcategory/saveSubCategory",{
        // fetch("http://localhost:8080/api/v1/subcategory/saveSub",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(subCatData)
      }).then((res) => {
          alert("saved Sub Category successfully !")
          navigate('/categories')
      }).catch((err)=>{
        console.log(err.message)
      })
       
    }

      
    return (
        <div className='container'>
        
            <Card style={{ marginTop:"5rem" }} hover>
            {/* <Form onSubmit={e=> onSubmit(e)}> */}
            <Form onSubmit={handleSubmit}>          
                            <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                                &nbsp;<Badge bg="info">Add Sub Category</Badge>
                            </Modal.Title>
                        

                        <Modal.Body>
                            <Container>
                                
                                    <div className='row'>
                                    <div className='col'>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Sub-Category Name</Form.Label>
                                        <Form.Control type={"text"} placeholder="Enter Sub Category Name" name='subcat_name' onMouseDown={e=> valChange(true)} value={subcat_name} onChange={e =>setSubCatName(e.target.value)} required />  
                                        </Form.Group>
                                            { 
                                            subcat_name.length ==0 && validation && <span className='text-danger'>Enter the name </span> 
                                            }
                                    </div>

                                    <div className='col'>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Category</Form.Label>
                                        <span className='text-danger text-large'> * </span> 
                                            <Form.Select name='category' value={catId} onChange={handleChange} >
                                               

                                                {/* this works */}
                                                {/* { categorylist.map(category => (
                                                    <option value="" key={category.id}>{category.name}</option>
                                                )) 

                                                }
                                                */}

                                                <option value="0">Select category</option>
                                                {
                                                   categoryList && categoryList.map( category1 => (
                                                        <option value ={category1.id} key={category1.id}>{category1.name}</option>
                                                   ))}

                                             </Form.Select>  
                                        </Form.Group>
                                    </div>
                            
                                    <div className='col'>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type={"text"} placeholder="Enter About Sub Category" name='description' value={description} onChange={e =>setDescription(e.target.value)} />  
                                    </Form.Group>
                                    </div>
                                    
                                    </div>
                                
                                <div className="d-grid gap-2"> 
                                    <Modal.Footer>
                                        <Button variant="secondary" type='submit' > <a href='/dashboard1'>Cancel</a>  </Button> 
                                        <Button variant="info" type='submit' >Save</Button>
                                    </Modal.Footer>
                                </div>
                            </Container>
                        </Modal.Body>
                    </Form>
                </Card>
            
        </div>
    )
}

export default AddSubCategory
