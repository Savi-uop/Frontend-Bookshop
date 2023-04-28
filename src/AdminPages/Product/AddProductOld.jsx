import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row, Alert, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProductOld() {
  //load category data from db

  //connect to backend  - add product
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [image1, setImage1] = useState("");
  const [quantity, setQuantity] = useState("");
  const [agent_price, setAgent_price] = useState("");
  const [sales_price, setSales_price] = useState("");
  const [reorder_level, setReorder_level] = useState("");
  // const [catId, setcatId] = useState("");
  const [category, setCategory] = useState("");
  // const [category, setCategory] = useState([{ name: "", id: "" }]);
  const [catList, setCatList] = useState([
    {
      id: "",
      name: "",
      description: "",
      quantity: "",
      agent_price: "",
      sales_price: "",
      reorder_level: "",
      category: "",
      supplier: "",
    },
  ]);
  const [supplierName, setSupplierName] = useState("");
  const [supplierList, setSupplierList] = useState([{ name: "", id: "" }]);

  //for adding data with image image
  // const addBtn = () => {

  //     const image1 = new FormData();
  //     image1.append('image', name);
  //     axios.post('url',image1).then((res) => {

  //         // console.log(res);
  //     })

  // }

  // console.log(image1.name);

  // load category data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/category/getCategories`
      );
      const newData = await response.json();
      setCatList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  // me function ekmai wena wdiykt dla tynne -- for category
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  //load supplier data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/supplier/getSuppliers`
      );
      const newData = await response.json();
      setSupplierList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  // for suppplier
  const handleChange1 = (event) => {
    setSupplierName(event.target.value);
  };

  //submit add product form -click event
  // when add category for const here it not works. request not save .but if remove category. it will save. catergory data type is the matter.

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //       const product={name,description,quantity,agent_price,sales_price,reorder_level,category}
  //       console.log(product)
  //       fetch("http://localhost:8080/api/v1/products/saveProducts",{
  //       method:"POST",
  //       headers:{"Content-Type":"application/json"},
  //       body:JSON.stringify(product)
  //       }).then(()=>{
  //       // alert( "New Product Added");
  //       // console.log(product);
  //       // navigate('/products')
  //       })
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ProductData = {
      name,
      description,
      agent_price,
      sales_price,
      quantity,
      reorder_level,
      category,
    };
    console.log(ProductData);

    fetch("http://localhost:8080/api/v1/products/saveProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(ProductData),
    })
      .then((res) => {
        alert("saved Product successfully !");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // other saving method
  // const [product,setProduct] = useState('');
  // function  submit(e){
  //   e.preventDefault();
  //   axios.post(`http://localhost:8080/api/v1/products/saveProducts`,{
  //     name:product.name,
  //     description:product.description
  //   })
  // }

  // useEffect(()=>{
  //     fetch("http://localhost:8080/api/v1/products/getproducts")
  //     .then(res=>res.json())
  //     .then((result)=>{
  //       setProducts(result);
  //     }
  //     )
  //   },[])

  return (
    <div>
      <div className="container">
        <Card style={{ marginTop: "5rem" }} hover>
          <Form onSubmit={handleSubmit}>
            {/* onSubmit={e=> onSubmit(e)} */}
            <Modal.Header>
              <Modal.Title id="example-modal-sizes-title-sm">
                Add new Product
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="container">
                <fieldset>
                  <Form.Group as={Col} md="12" className="container">
                    <Row className="g-2">
                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="name">Product Name</Form.Label>
                          <Form.Control
                            id="name"
                            placeholder="Enter product name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="description">
                            Description
                          </Form.Label>
                          <Form.Control
                            id="description"
                            placeholder="Enter about product"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      {/* <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="image1">
                            Image of Product
                          </Form.Label>
                          <Form.Control
                            id="image1"
                            type="file"
                            onChange={(e) => setImage1(e.target.files[0])}
                          />
                        </Form.Group>
                      </Col> */}

                      {/* <Col md>
                          <Form.Group className="mb-3 text-start">
                            <Form.Label htmlFor="image1">
                              Link of product Image
                            </Form.Label>
                            <Form.Control
                              id="image1"
                              type="text"
                              onChange={(e) => setImage1(e.target.value)}
                            />
                          </Form.Group>
                        </Col> */}
                    </Row>

                    <Row className="g-2">
                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="category">Category</Form.Label>
                          <Form.Select
                            aria-label="category"
                            value={category}
                            onChange={handleChange}
                          >
                            {/* {(e)=>setCategory(e.target.value)} */}
                            {/* Object.keys(category.category).map((cat1, index) =>
                                                                         
                                                                         <option value={category.category[cat1].id} key={index}>{category.category[cat1].name}</option> 
                                                                         )} */}
                            {/* {  category.map((newData) => {
                                                                        { newData.category.map( (cat1,index)=>{
                                                                            <option value={cat1} key={index}>{cat1}</option> 
                                                                        }
                                                                            )} 
                                                                    })} */}
                            {/* category.map(cat1 => ( */}
                            {/* <option value={cat1.name} key={cat1.id}>{cat1.name}</option> */}
                            // ))
                            {/* <option value={cat1['name']} key={cat1['id']}>{cat1['name']}</option> ) */}
                            {/* } */}
                            {/* {category && category.map((cat1) => ( */}
                            {catList.map((cat1) => (
                              <option value={cat1.id} key={cat1.id}>
                                {cat1.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="agent_price">
                            Agent Price
                          </Form.Label>
                          <Form.Control
                            id="agent_price"
                            type="text"
                            value={agent_price}
                            onChange={(e) => setAgent_price(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="sales_price">
                            Sales Price
                          </Form.Label>
                          <Form.Control
                            id="sales_price"
                            type="text"
                            value={sales_price}
                            onChange={(e) => setSales_price(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="g-2">
                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="quantity">Quantity</Form.Label>
                          <Form.Control
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="reorder_level">
                            Re-order Level
                          </Form.Label>
                          <Form.Control
                            id="reorder_level"
                            type="number"
                            value={reorder_level}
                            onChange={(e) => setReorder_level(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      {/* <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="supplier">Supplier</Form.Label>
                          <Form.Select
                            aria-label="supplier"
                            value={supplierName}
                            onChange={handleChange1}
                          > */}

                      {/* {supplierList.map((supplier1) => (
                              <option
                                value={supplier1.supplier_name}
                                key={supplier1.id}
                              >
                                {supplier1.supplier_name}
                              </option>
                            ))} */}

                      {/* <option value="0">Select your agent</option>
                                                                    <option value="1">Atlas</option>
                                                                    <option value="2">Richard</option>
                                                                    <option value="3">Promate</option>
                                                                    <option value="4">Mango</option>
                                                                    <option value="5">M.D.Gunasena</option> */}
                      {/* </Form.Select>
                        </Form.Group>
                      </Col> */}
                    </Row>
                  </Form.Group>
                </fieldset>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">
                <a href="/products">Cancel</a>
              </Button>
              <Button variant="info" type="submit">
                Add
              </Button>
              {/* onClick={addBtn} */}
            </Modal.Footer>
            {/*  */}
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default AddProductOld;
