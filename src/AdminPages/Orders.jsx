import React, {useState,useEffect}from "react"
import { Button,Table,Col,Row,Card,Badge } from "react-bootstrap";
import { useParams,Link} from 'react-router-dom';
import axios from 'axios';

function Orders() {

    // display product data
      const[orderList,setOrderList]= useState([]);
            

      useEffect( ()=> {
        loadOrders();
      },[]);

      const loadOrders = async () => {
          const result = await axios.get("http://localhost:8080/api/v1/order/getOrders");
          setOrderList(result.data);
          console.log(result.data);
      };


  return (
    <div>

            <div  className='container-fluid ' style={{ marginTop:"5rem" }}> 
                <h1>Orders</h1>
            </div>


            <div className='container'>
                <Card hover style={{ marginTop:"2rem" }}>
                  <div className='container row'  style={{ marginTop:"2rem" }}>
                    

                    <Table responsive striped >
                      <thead variant="dark">
                        <tr>
                          <th>#</th>
                          <th>Id</th>
                          <th>Amount</th>
                          {/* <th>Quantity</th> */}
                          <th>Type</th>
                          <th>Order Date</th>                
                          <th>Order Time</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                          {
                             orderList && orderList.map( (order1,index) => (

                                    <tr>
                                        <th scope='row' key={index}><strong>{index +1}</strong></th>
                                          <td>{order1.id}</td>
                                          <td style={{ color:'cadetblue' }}>Rs.{order1.amount}.00</td>       
                                          <td><Badge bg="danger">{order1.type}</Badge></td>
                                          <td>{order1.order_date}</td>
                                          <td>{order1.order_time}</td>
                                                  
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

export default Orders
