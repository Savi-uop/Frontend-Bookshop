import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Footer from '../Components/Footer';
import Navbar1 from '../Components/Navbar1';


function About() {
  return (
    <div>
      <Navbar1 />
          <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
              About  <br />
              <span style={{color: 'hsl(218, 81%, 75%)'}}>BOOK MART</span>
            </h1>

            <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>

            <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>

          </MDBCol>

          <MDBCol md='6' className='position-relative'>

            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>

              {/* <img
                src="images/bg1.jpg"
                class="img-thumbnail"
                alt="Hollywood Sign on The Hill"
              /> */}

              <div class="ratio ratio-16x9">
                <iframe
                  src="images/vdo.webm"
                  title="YouTube video"
                  allowfullscreen 
                  frameborder="1"
                  allow="autoplay">
                </iframe>
              </div> 
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

    </MDBContainer>
      <div><Footer/></div>
    </div>
  )
}

export default About