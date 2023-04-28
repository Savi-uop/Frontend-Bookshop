import React from 'react'
import AffterLogin_subnavbar from './AffterLogin_subnavbar'
import { Card, Table,Col,Button,Row,Container } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { CartProvider } from 'react-use-cart'
import { MDBIcon } from 'mdb-react-ui-kit';

// function Cart() {
    const Cart = () => {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
        // if (isEmpty) return <h1 className='text-center'>Your cart is Empty!</h1>

  return (
    <div>
        {/* <AffterLogin_subnavbar/> */}
      <div >
        {/* <h3 >Cart</h3> */}
        <Card  style={{ marginTop:"4rem" }} hover>
        <Container className="py-4 mt-5">
            <h2 className='text-center'>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h2>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant='secondary' className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src="images/products/no-image.png" style={{ width: '4rem'}} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.name}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.sales_price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className='text-light' justify-content-center
                    >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                {/* <BsCartX size="1.7rem" /> */}
                                <MDBIcon fas icon="angle-double-left" size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button variant="success"
                                className="m-2"
                            >
                                <MDBIcon fas icon="angle-double-left" size="1.7rem" />
                                Clear Cart
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
        </Card>
      </div>
    </div>

  );
};

export default Cart;
