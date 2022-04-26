import React from "react";
import {
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import image1 from "../../Images/Carousel/carousels-1.jpg";
import image2 from "../../Images/Carousel/carousels-2.png";
import image3 from "../../Images/Carousel/carousels-3.png";
import image4 from "../../Images/Carousel/carousels-4.jpg";
import SideMenuBar from "./SideMenuBar";
const Carousels = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col sm={4}>
           <SideMenuBar></SideMenuBar>
          </Col>

          <Col sm={8}>
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
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
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image4} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carousels;
