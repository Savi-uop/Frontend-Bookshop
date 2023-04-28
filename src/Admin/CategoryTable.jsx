import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button,Card,Modal} from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteCatModal from './DeleteCatModal';

function CategoryTable() {

    //show categories
    const[categories,setCategories]= useState([]);
        

    useEffect( ()=> {
        loadCategories();
    },[]);

    const loadCategories = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/category/getCategories");
        setCategories(result.data);
    };

    

    const {id} = useParams();

    const deleteCategory = async id =>{
        await axios.delete(`http://localhost:8080/api/v1/category/deleting/${id}`);
           loadCategories()
    }

    // modal
    // const [deleteShow, setDeleteShow] = useState(false);
    // const[modalData,setModalData]= useState({
    //     id:"",
    //     name:"",
    //     description:"",
    // })

    // const loadCategories = () => {
    //     fetch("http://localhost:8080/api/v1/category/getCategories")
    //     .then(response => response.json())
    //     .then(res => setCategories(res))
    // }

    // const showDetails = (id) => {
    //     fetch(`http://localhost:8080/api/v1/category/${id}`)
    //     .then(response => response.json())
    //     .then(res => setModalData(res))
    // }
   

  return (

    <div>

            <div  style={{ marginTop:"3rem" }}>

                            
            <Card hover>
                <div className='container row'  style={{ marginTop:"2rem" }}>
                    <Table striped hover responsive>
                        <thead variant="dark">
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Category Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>        

                        <tbody>
                            {
                                categories.map( (category,index) => (

                                    <tr>
                                        <th scope='row' key={index}><strong>{index +1}</strong></th>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>
                                            <Link className=' btn  btn-success mx-2' size='sm'  to={`/category/viewCat/${category.id}`}>View </Link> 
                                            
                                            <Link className='btn btn-info mx-2' size='sm'  to={`/category/editCat/${category.id}`}>Edit </Link> 
                                            <Button className='mx-2' variant='danger' size='sm' onClick={() => {deleteCategory(category.id) }}>Delete</Button>

                                            {/* <Button className='mx-2' variant='info' onClick={(e)=>showDetails(category.id)} data-toggle="modal" data-id='mymodal' data-target='#mymodal' >Try</Button>         */}
                                        </td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </Table>

                </div>

            </Card>

            </div>  


             {/* delete modal */}
            {/* <div className='modal' id='mymodal'>
            <Modal size="sm" show={modalData} onHide={() => setModalData(false)} aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton >
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Are you sure to delete category with id {modalData.id} ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <Button variant='danger' data-dismiss="modal" className='close'> No</Button>
                            <Button variant='info' > Yes</Button>
                </Modal.Body>
            </Modal>
            </div> */}
            {/* delete of modal */}

      
    </div>
  )
}

export default CategoryTable
