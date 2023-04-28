import React from 'react'
import { Form,Card,Modal,Badge,Container,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditSubCat() {

    //load category
    const[categoryList,setCategoryList] = useState([{'id':'','name':'','description':''}]);  
    const [category1,setCategory1] =useState('');

    useEffect( ()=> {
        loadCategories();
    },[]);

    const loadCategories = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/category/getCategories");
        setCategoryList(result.data);
        // console.log(result.data);
    };
    const handleChange = (event) => {
        setCategory1(event.target.value)
    }

    //load sub-category data to edit

    let history = useNavigate();
    const {id} = useParams();
    console.log(id);
    

    const[subcategory,setSubCategory] =useState({
        id: "",
        name: "",
        description: "",
        
    });

    const {subcat_name,category,description} =subcategory ;

    const onInputChange = (e) => {
        setSubCategory({...subcategory,[e.target.name]: e.target.value});
    };

    useEffect( ()=>{
        loadCategoryById();
    },[] );

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/subcategory/update/${id}` ,subcategory);
        // history.push("/");
        history("/categories");
    };

    
    const loadCategoryById = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/subcategory/${id}`);
        setSubCategory(result.data);
    };



    // another method

    // const {id} = useParams();
    // useEffect(()=>{
    //     fetch("http://localhost:8080/api/v1/subcategory" + id).then((res)=>{
    //         return res.json();
    //     }).then((resp)=>{
    //         setSubcat_Name(resp.id);
    //         setDescription(resp.subcat_name);
    //         setCategory(resp.category);
    //     }).catch((err) =>{
    //         console.log(err.message);
    //     })
    // },[]);

    // const [subcat_name,setSubcat_Name] = useState("");
    // const [description,setDescription] = useState("");
    // const [category,setCategory] = useState("");
    // const [catList,setCatList] = useState("");

    // const navigate =useNavigate();

  
    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     const subCatData ={id, subcat_name,description,category};

    //     fetch("http://localhost:8080/api/v1/subcategory/update/"+id,{
    //         method:"PUT",
    //         headers:{"content-type":"application/json"},
    //         body: JSON.stringify(subCatData)
    //       }).then((res) => {
    //           alert("saved  successfully !")
    //           navigate('/categories');
    //       }).catch((err)=>{
    //         console.log(err.message)
    //       })
    // }


  return (
    <div>
        <div className='container'>


            <Card style={{ marginTop:"5rem" }} hover>
            <Form onSubmit={e=> onSubmit(e)}>
            {/* <Form onSubmit={e=> handleSubmit(e)}> */}
                        
                            <Modal.Title id="example-modal-sizes-title-lg"  style={{ marginTop:"1rem" }}>
                                &nbsp;<Badge bg="info">Edit Sub Category &nbsp; &nbsp;   Id : {id}</Badge>
                            </Modal.Title>
                        

                        <Modal.Body>
                            <Container>
                                
                                    <div className='row'>
                                    <div className='col'>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Sub-Category Name</Form.Label>
                                        <Form.Control type={"text"} placeholder="Enter Sub Category Name" name='subcat_name' value={subcat_name} onChange={(e) => onInputChange(e) }  />  
                                        {/* <Form.Control type={"text"} name='subcat_name' value={subcat_name} onChange={(e) => setSubcat_Name(e) } />   */}
                                        </Form.Group>
                                    </div>

                                    <div className='col'>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select name='category' id='category' value ={category1} onChange={handleChange} selected>


                                        {/* <Form.Select name='category' id='category' value ={category} onChange={(e)=>setCategory(e)}> */}
                                            {/* <option th:each = "category : ${category}"
                                                    th:value="${category.id}" 
                                                    th:text="${category.name}"                                            
                                            >
                                            </option> */}

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
                                        <Form.Control type={"text"} placeholder="Enter About Category" name='description' value={description} onChange={(e) => onInputChange(e) } />  
                                        {/* <Form.Control type={"text"} placeholder="Enter About Category" name='description' value={description} onChange={(e) => setDescription(e) } />   */}
                                    </Form.Group>
                                    </div>
                                    
                                    </div>
                                
                                <div className="d-grid gap-2"> 
                                    <Modal.Footer>
                                        <Button variant="secondary" type='submit' > <a href='/categories'>Cancel</a>  </Button> 
                                        <Button variant="info" type='submit'>Save</Button>
                                    </Modal.Footer>
                                </div>
                            </Container>
                        </Modal.Body>
                    </Form>
                </Card>
            </div>
    </div>
  )
}

export default EditSubCat
