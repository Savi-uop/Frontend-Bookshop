import React from 'react'
import { Card,Button} from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const NewProductCard = (props) => {
    let {id, name,quantity,agent_price,sales_price,reorder_level,category,supplier} =props.data;

    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }

  return (
    // <React.Fragment>
    <div>
     
     <Card 
            style={{ width: '18rem', height: 'auto' }}
            className=' text-center p-0 overflow-hidden shadow mx-auto mb-4'
        >
            <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant="top" src='images/products/no-image.png' className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {name}
                </Card.Title>
                <Card.Title>
                    Rs. <span className="h3">{sales_price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className='d-flex align-item-center m-auto border-0'
                >
                    <MDBIcon fas icon="shopping-cart" size="1.7rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>

        
        {/* <Card style={{ width: '14rem'}} className="cursor-pointer hover-shadow "> */}
                    {/* <Card.Img variant="top" src="images/products/no-image.png" /> */}

                    {/* <Card.Body> */}
                    {/* <Card.Title>{item.name}</Card.Title> */}
                    {/* <Card.Text style={{ color :'blue' }}><strong>Rs.{sales_price}.00</strong> */}
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                    {/* </Card.Text> */}
                    {/* <Button variant="info" className='text-white shadow' >Add to cart <MDBIcon fas icon="shopping-cart" /></Button> */}
                    
                    {/* </Card.Body> */}
        {/* </Card>   */}
                  

    </div>
     // </React.Fragment> 
  )
}

export default NewProductCard;
