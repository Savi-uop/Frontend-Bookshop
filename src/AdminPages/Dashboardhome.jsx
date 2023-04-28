import React,  { useState,useEffect } from 'react'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import { Button } from 'react-bootstrap';

import { MDBIcon } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Dashboardhome() {

    // to open product modal
    // const [addProductShow, setAddProductShow] = useState(false);
    const [addProduct, setAddProduct] = useState(false);

    // to open Category modal
    const [addCatShow, setAddCatShow] = useState(false);

    // to open Sub-category modal
    const [addSubCatShow, setAddSubCatShow] = useState(false);

     

     //connect to backend  --product
    // const [name,setName] = useState('')
    // const [description,setDescription] = useState('')
    // const [category,setCategory] = useState('')
    // const [quantity,setQuantity] = useState('')
    // const [agent_price,setAgent_price] = useState('')
    // const [sales_price,setSales_price] = useState('')
    // const [reorder_level,setReorder_level] = useState('')
    // const [agent_id,setAgent_id] = useState('')

    // const[Products,setProducts]= useState([])

    //connect to backend -- category
    //meka kalin krpu ekata oni tika
    // const [name,setName] = useState('')
    // const [description,setDescription] = useState('')

    //const[categories,setCategories]= useState([])
   
    //submit form -click event -- product add
    // when add categoey for const here it not works. request not save .but if remove category. it will save. catergory data type is the matter.
    
    // const handleClick = (e)=>{
    //   e.preventDefault()
    //     const product={name,description,quantity,agent_price,sales_price,reorder_level,agent_id,category}
    //     console.log(product)
    //     fetch("http://localhost:8080/api/v1/products/saveProducts",{
    //       method:"POST",
    //       headers:{"Content-Type":"application/json"},
    //       body:JSON.stringify(product)

    //     }).then(()=>{
    //       <Alert>( "New Product Added")</Alert>
    //     })
        
    // }

    // useEffect(()=>{
    //   fetch("http://localhost:8080/api/v1/products/getproducts")
    //   .then(res=>res.json())
    //   .then((result)=>{
    //     setProducts(result);
    //   }
    //   )
    // },[])

     //submit form -click event  ---category add
     //kalin krame - this is working

    // const handleClick1 = (e)=>{
    //   e.preventDefault()
    //     const category={name,description}
    //     console.log(category)
    //     fetch("http://localhost:8080/api/v1/category/saveCat" ,{
    //       method:"POST",
    //       headers:{ "Content-Type":"application/json"},
    //       body:JSON.stringify(category)

    //     }).then(()=>{
    //       <Alert>( "New Category Added")</Alert>
    //     })
        
    // }

    // useEffect(()=>{
    //   fetch("http://localhost:8080/api/v1/category/getCategories")
    //   .then(res=>res.json())
    //   .then((result)=>{
    //     setCategories(result);
    //   }
    //   )
    // },[])

    // category add
    // working method

    // const[category,setCategory] =useState({
    //     id: "",
    //     name: "",
    //     description: "",
    // });

    // const {id,name,description} =category;
    // let navigate = useNavigate()

    // const onInputChange = (e) => {
    //   setCategory({...category,[e.target.name]: e.target.value});
    // };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:8080/api/v1/category/saveCat" ,category)
    //     navigate("/categories")
    // };

    // other method

    const[name,setName] = useState(''); 
    const[description,setDescription] = useState(''); 

    // const[categories,setCategories] = useState([]); 

    const navigate = useNavigate();

    //submit form
    const handleSubmit =(e) =>{
      e.preventDefault();
        // console.log( { name , description  })

        const catData = { name , description  };
        

      fetch("http://localhost:8080/api/v1/products/saveProducts",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(catData)
      }).then((res) => {
          alert("saved Category successfully !")
          navigate('/categories')
      }).catch((err)=>{
        console.log(err.message)
      })
       
    }

    

   

  return (
    <div className='container-fluid ' style={{ marginTop:"5rem" }}>

      <div >

        <h1>Dashboard</h1>

        <CardGroup>
          <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "green"}}>
          
            <Card.Body >
              <Card.Title style={{ fontFamily:"monospace" , color:"black" , justifyItems:"center" }} >
                {/* <Button size='lg' variant='success' onClick={() => setAddProduct(true)} >Add Product <MDBIcon fas icon="angle-double-right " size='lg' /></Button> */}
                <Button size='lg' variant='success' href='/orders'>Orders <MDBIcon fas icon="angle-double-right" size='lg' /></Button></Card.Title>
              
            </Card.Body>
            
          </Card>

          <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "orange"}}>
          
            <Card.Body >
              <Card.Title style={{ fontFamily:"monospace" , color:"black"}}> 
                <Button size='lg' variant='warning' onClick={() => setAddCatShow(true)}>Add Category <MDBIcon fas icon="angle-double-right" size='lg' /></Button>
                
              </Card.Title>
              
            </Card.Body>
          
          </Card>

          <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "cornflowerblue"}}>
          
            <Card.Body >
              <Card.Title style={{ fontFamily:"monospace" , color:"black"}}> 
                {/* <Button size='lg' variant='primary' onClick={() => setAddSubCatShow(true)}>Add Subcategory <MDBIcon fas icon="angle-double-right" size='lg' /></Button> */}
                <Button size='lg' variant='info'><a href='/subcategory/addsubcat'>Add Subcategory <MDBIcon fas icon="angle-double-right" size='lg' /></a></Button>
                {/* <Button size='lg' variant='info'><Link href='/subcategory/addsubcat'>Add Subcategory <MDBIcon fas icon="angle-double-right" size='lg' /></Link></Button> */}
              </Card.Title>
              
            </Card.Body>
          
          </Card>

          <Card className="cursor-pointer hover-shadow" style={{backgroundColor: "crimson"}} >
            
            <Card.Body >
              <Card.Title style={{ fontFamily:"monospace" , color:"black"}} >
                <Button size='lg' variant='danger' href='billing'>Billing <MDBIcon fas icon="angle-double-right" size='lg' /></Button>
              </Card.Title>
            </Card.Body>
          
          </Card>

          

        </CardGroup>

      </div>

      {/* Space */}
      <div className='mt-5'></div>

      {/* <div className='row'>

        <div className=' container col'>
          <Card style={{ width: '18rem' }} className="cursor-pointer hover-shadow">
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

        <div className=' container col'>
          <Card style={{ width: '18rem' }} className="cursor-pointer hover-shadow">
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

        <div className=' container col'>
          <Card style={{ width: '18rem' }} className="cursor-pointer hover-shadow">
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

      </div> */}

      <div className='container'>

      </div>



      {/* <div >
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className='lg'>Products</Button>
            <Button variant="info" className='lg'>Categories</Button>
            <Button variant="primary" className='lg'>Sub-Categories</Button>
        </ButtonGroup>
      </div> */}

      {/* view categories */}
      <div className='container' >

        

      </div>



      {/* ---------------- Models starts from here -------------------------- */}

      {/* ---------- Model To -  Add Product ---------------- */}

      {/* <Modal size="lg" show={addProduct} onHide={() => setAddProduct(false)} aria-labelledby="example-modal-sizes-title" className='shadow rounded' centered>

        <span className="bg-light rounded-3">
          <Modal.Header closeButton style={{ backgroundColor:'lightgrey' }}>
              <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
        </span>

          <Modal.Body>
          <div className="container" >

            <Form>
              <fieldset>                          
                <Form.Group as={Col} md="12" className='container'>
                        <Row className="g-2">
                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="name">Product Name</Form.Label>
                                  <Form.Control id="name" placeholder="Enter product name" type="text" value ={name} onChange={(e)=>setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            
                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="description">Description</Form.Label>
                                  <Form.Control id="description" placeholder="Enter about product" type="text" value ={description} onChange={(e)=>setDescription(e.target.value)} />
                                </Form.Group>
                            </Col>
                          </Row>

                          <Row className="g-2">
                              <Col md> 
                                    <Form.Group className="mb-3 text-start">
                                      <Form.Label htmlFor="category">Category</Form.Label>
                                      <Form.Select aria-label="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                        <option value="0">Select the category</option>
                                        <option value="1">Stationary</option>
                                        <option value="2">Writing Material</option>
                                        <option value="3">Novel</option>
                                        <option value="4">Newspapers</option>
                                        <option value="5">Magazines</option>
                                        <option value="6">Educatioonal</option>
                                        <option value="7">Children</option>
                                        <option value="8">Religous</option>
                                      </Form.Select>
                                    </Form.Group>
                              </Col>

                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="agent_price">Agent Price</Form.Label>
                                  <Form.Control id="agent_price" type="text" value ={agent_price} onChange={(e)=>setAgent_price(e.target.value)} />
                                </Form.Group>
                            </Col>
                            
                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="sales_price">Sales Price</Form.Label>
                                  <Form.Control id="sales_price" type="text" value ={sales_price} onChange={(e)=>setSales_price(e.target.value)} />
                                </Form.Group>
                            </Col>
                          </Row>

                          <Row className="g-2">
                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="quantity">Quantity</Form.Label>
                                  <Form.Control id="quantity"  type="number" value ={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                                </Form.Group>
                            </Col>
                            
                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="reorder_level">Re-order Level</Form.Label>
                                  <Form.Control id="reorder_level" type="number" value ={reorder_level} onChange={(e)=>setReorder_level(e.target.value)} />
                                </Form.Group>
                            </Col>

                            <Col md> 
                                <Form.Group className="mb-3 text-start">
                                  <Form.Label htmlFor="agent_id">Agent</Form.Label>
                                  <Form.Select aria-label="agent_id" value={agent_id} onChange={(e)=>setAgent_id(e.target.value)}>
                                    <option value="0">Select your agent</option>
                                    <option value="1">Atlas</option>
                                    <option value="2">Richard</option>
                                    <option value="3">Promate</option>
                                    <option value="4">Mango</option>
                                    <option value="5">M.D.Gunasena</option>
                                  </Form.Select>
                                </Form.Group>
                            </Col>
                          </Row>
                </Form.Group>
              </fieldset>
            </Form>

          </div>
          </Modal.Body>

          <Modal.Footer>
          <Button variant="info" onClick={handleClick} >Add</Button>
          <Button variant="primary" >Cancel</Button>
          </Modal.Footer>

      </Modal> */}
      
      {/* --------- End of product add modal ---------------- */}



      {/* --------- Category add modal ---------------- */}

    {/* <Modal size="lg" show={addCatShow} onHide={() =>setAddCatShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <Badge bg="info">Add New Category</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
                <div className='row'>
                  <div className='col'>
                    <Form.Group className="mb-3" controlId="name1">
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Category Name"  value ={name} onChange={(e)=>setName(e.target.value)} />  
                    </Form.Group>
                  </div>
        
                <div className='col'>
                  <Form.Group className="mb-3" controlId="description1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter About Category" value ={description} onChange={(e)=>setDescription(e.target.value)} />  
                  </Form.Group>
                </div>
                  
                </div>
              
              <div className="d-grid gap-1">
                <Button variant="info" size="lg" onClick={handleClick1}>
                  Add Category
                </Button>
              </div>

            </Form>
          </Container>
        </Modal.Body>
      </Modal>  */}


<Modal size="lg" show={addCatShow} onHide={() =>setAddCatShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
      {/* <Form onSubmit={(e) => onSubmit(e)}> */}
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <Badge bg="info">Add New Category</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            
                <div className='row'>
                  <div className='col'>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control type={"text"} placeholder="Enter Category Name" name='name'  value ={name} onChange={e =>setName(e.target.value)} />  
                      {/* onChange={(e)=>onInputChange(e)} */}
                    </Form.Group>
                  </div>
        
                <div className='col'>
                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type={"text"} placeholder="Enter About Category" name='description' value ={description} onChange={e =>setDescription(e.target.value)} />  
                  </Form.Group>
                </div>
                  
                </div>
              
              {/* <div className="d-grid gap-2"> */}
              <Modal.Footer>
                <Button variant="secondary" onClick={() =>setAddCatShow(false)}>
                  Cancel
                </Button>
                {/* <Link variant="info" type='submit' to="/dashboard1">Cancel</Link> */}
                {/* onClick={handleClick1} */}
                <Button size="lg" variant="danger" type='submit' style={{ color:"black" , width:"10rem"}}>
                  Add
                </Button>
              </Modal.Footer>

          
          </Container>
        </Modal.Body>
        </Form>
      </Modal> 


      {/* --------- End of Category add modal ------------- */}


      {/* ---------  Sub-Category add modal ---------------- */}

       {/* <Modal size="lg" show={addSubCatShow} onHide={() =>setAddSubCatShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <Badge bg="info">Add Sub-Category</Badge>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                  <div className='row'>
                    <div className='col'>
                      <Form.Group className="mb-3" controlId="subcat_name">
                        <Form.Label>Sub-Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Sub-Category Name" name='subcat_name' value ={subcat_name} onChange={(e)=>onInputChange(e)} />  
                      </Form.Group>
                    </div>

                    <div className='col'>
                      <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value ={category} onChange={(e)=>onInputChange(e)}>
                          <option>Category-I</option>
                          <option>Category-I</option>
                          <option>Category-I</option>
                          <option>Category-I</option>
                        </Form.Select>  
                      </Form.Group>
                    </div>
                  </div>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter About Sub-Category " name='description' value ={description} onChange={(e)=>onInputChange(e)} />  
                </Form.Group>

                <div className="d-grid gap-1">
                  <Button variant="info" size="lg" type='submit'>
                    Add Sub-Category
                  </Button>
                </div>

              </Form>
            </Container>
          </Modal.Body>
        </Form>
      </Modal> */}

       {/* --------- End of Sub-Category add modal ------------- */}

      
    </div>
  )
}
