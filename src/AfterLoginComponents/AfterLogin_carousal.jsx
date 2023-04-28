import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function AfterLogin_carousal() {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
                <video width="320" height="240" autoplay>
                    <source src="Shop By Categories.mp4" type="video/mp4"/>
                    <source src="Shop By Categories.ogg" type="video/ogg"/>
                    Your browser does not support the video tag.
                </video>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default AfterLogin_carousal