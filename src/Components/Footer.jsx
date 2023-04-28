import React from 'react'
// import { ModalFooter } from 'react-bootstrap'
import 'react-bootstrap';
// import '../Components/footer.css';
import { MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='container-fluid bg-dark'>
        <footer className="py-5 ">
            <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h6 className='primary text-white'>Useful Links</h6>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="/categories" className="nav-link p-0 text-muted">Category</a></li>
                    <li className="nav-item mb-2"><a href="/products" className="nav-link p-0 text-muted">Products</a></li>
                    <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
                    <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h6 className='text-white'>Category</h6>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Stationary</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Writting Material</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Novel</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Story Books</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">WorkBooks</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h6 className='text-white'>Contacts</h6>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
 
           <div className="col-md-4 offset-md-1 mb-3">
                <form>
                <h6 className='text-white'>Subscribe to our newsletter</h6>
                <p className='text-muted'>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" className="form-control" type="email" placeholder="name@example.com"/>
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
            </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p className='text-muted text-center'>© 2022 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-dark" href="#"><MDBIcon fab icon="facebook text-white" size='lg' /></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><MDBIcon fab icon="instagram text-white" size='lg' /></a></li> 
                    <li className="ms-3"><a className="link-dark" href="#"><use href="#facebook"><MDBIcon fab icon="twitter text-white" size='lg' /></use></a></li> 

                </ul>
            </div> 

        </footer>
    </div>
  )
}

export default Footer