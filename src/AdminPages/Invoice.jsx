import { React,useRef } from 'react';
import { Table,Button } from 'react-bootstrap'
import ReactToPrint from 'react-to-print';
import { MDBIcon } from 'mdb-react-ui-kit';
import { render } from 'react-dom';

class Invoice  {
    render(){
    return(

        ///current not used for this page
    <div>     
        <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>U.price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Rs.56.00</td>
                                <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                <td>130.00</td>
                                <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>       

                            <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Rs.56.00</td>
                                    <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                    <td>130.00</td>
                                    <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>
                            <tr>
                                    <td>3</td>
                                    <td>ewds</td>
                                    <td>Rs.56.00</td>
                                    <td><a href=""><MDBIcon fas icon="minus me-2" /></a> 10 <a href=""><MDBIcon fas icon="plus ms-2" /></a></td>
                                    <td>130.00</td>
                                    <td><a href="#"><MDBIcon fas icon="trash text-info" /></a></td>
                            </tr>
                        </tbody>
                    </Table>


        </div>
    </div>
    );
    }
}

export default Invoice;