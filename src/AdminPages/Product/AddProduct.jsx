import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row, Alert, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {

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

  
  // When click category chnage inside the dropdown
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  
  // When click supplier chnage inside the dropdown
  const handleChange1 = (event) => {
    setSupplier(event.target.value);
  };



  //connect to backend  - add product
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [image1, setImage1] = useState("");
  const [quantity, setQuantity] = useState("");
  const [agent_price, setAgent_price] = useState("");
  const [sales_price, setSales_price] = useState("");
  const [reorder_level, setReorder_level] = useState("");
  const [category, setCategory] = useState("");
  const [catList, setCatList] = useState([
    {
      id: "",
      name: "",
      description: ""
    },
  ]);
  const [supplier, setSupplier] = useState("");
  const [supplierList, setSupplierList] = useState([{ id: "",supplier_name: "",contact:"",address_line1:"",address_line2:"",address_line3:""  }]);

  

 

  

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
      supplier
    };
    console.log(ProductData);

    fetch("http://localhost:8080/api/v1/product/saveProduct1",{
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(ProductData)
    })
      .then((res) => {
        alert("saved Product successfully !");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  

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
                            name="name"
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
                            name="description"
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

                    </Row>

                    <Row className="g-2">
                      {/* <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="category">Category</Form.Label>
                          <Form.Select
                            aria-label="category"
                            value={category}
                            onChange={handleChange}
                          >
 
                            {catList.map((cat1) => (
                              <option value={cat1.id} key={cat1.id}>
                                {cat1.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col> */}

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="category">Category</Form.Label>
                          <Form.Select
                            aria-label="category"
                            value={category}
                            onChange={handleChange}
                          >
                            <option value="0">--------------Select category--------------</option>
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
                            name="agent_price"
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
                            name="sales_price"
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
                            name="quantity"
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
                            name="reorder_level"
                            type="number"
                            value={reorder_level}
                            onChange={(e) => setReorder_level(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      <Col md>
                        <Form.Group className="mb-3 text-start">
                          <Form.Label htmlFor="supplier">Supplier</Form.Label>
                          <Form.Select
                            aria-label="supplier"
                            value={supplier}
                            onChange={handleChange1}
                          >

                          {supplierList.map((supplier1) => (
                                  <option
                                    value={supplier1.id}
                                    key={supplier1.id}
                                  >
                                    {supplier1.supplier_name}
                                  </option>
                                ))}

                     
                      </Form.Select>
                        </Form.Group>
                      </Col>
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

export default AddProduct;
