import React from 'react'
import Footer from '../Components/Footer'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import Navbar1 from '../Components/Navbar1';

function Contact() {
  return (
    <>
      <Navbar1/>
      <div className=' pt-5' style={{ backgroundColor:"ButtonShadow" }}>
          <MDBContainer className="my-5 shadow-2" >

          <MDBCard>
              <MDBRow className='g-0'>

              <MDBCol md='6'>
                  <MDBCardImage src='images/contact2.jpg' alt="login form" className='rounded-start w-100' />
              </MDBCol>

              <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>

                      <div className='d-flex flex-row mt-2'>
                          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                          <span className="h1 fw mb-0">Contact Us</span>
                      </div>

                      <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}></h5>

                      <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg"/>
                      <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                      <MDBInput wrapperClass='mb-4' label='Message' id='formControlLg' type='text' size="lg" />

                      <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Send</MDBBtn>
                  
                  </MDBCardBody>
              </MDBCol>

              </MDBRow>
          </MDBCard>

          </MDBContainer>
      </div>

      <div><Footer/></div>
    </>
  )
}

export default Contact