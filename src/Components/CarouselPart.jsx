import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function CarouselPart() {
  return (
    <div className='mt-9'>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/carousal1.jpg"
                alt="First slide"
                height="680px"
                />
                <Carousel.Caption>
                <h3>Place your order online</h3>
                <p>Make your life smart..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/carousal2.jpg"
                alt="Second slide"
                height="680px"
                />

                <Carousel.Caption style={{ color:'blue' }}>
                <h3 >Books | Stationaries | Novels ...</h3>
                <p><strong>BOOK-MART</strong></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/carousal5.jpg"
                alt="Third slide"
                height="680px"
                />

                <Carousel.Caption style={{ color:'red' }}>
                <h3>Get your all stationaries from here</h3>
                <p>
                Save your time & make your life easier
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselPart
