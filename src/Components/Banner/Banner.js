import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "../../Images/Carousel/bike-1.png";
import banner from "../../Images/Brand/Banner-1.png";
import image2 from "../../Images/Carousel/bike-2.png";
import image3 from "../../Images/Carousel/bike-4.jpg";
const Banner = () => {
  return (
    <div>
      <Container>
      <div>
        <Row xs={6} md={12} lg={8}>
          <Col xs={6}>
              <h3 style={{padding:90, margin:40}}>Brand Are Looking For A Better <span style={{color: "rgb(244, 100, 20)", fontSize:"larger"}}>Product</span></h3>
          </Col>


          <Col xs={6}>
              <img style={{width:500}} src={banner} alt=""/>
          </Col>
        </Row>
      </div>

      <div>
        {/* <Row>
            <Col sm={4}>sm=8</Col>

            <Col sm={8}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
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
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row> */}
      </div>
      </Container>
    </div>
  );
};

export default Banner;
