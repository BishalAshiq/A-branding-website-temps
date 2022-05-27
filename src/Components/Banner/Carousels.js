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
    <div style={{marginTop: 100}}>
        <h1 data-aos="zoom-in"><span style={{color:"#D57008", marginTop:"40px"}}>Templates</span> Items</h1>
      <Container className="mt-5 pb-5">
        <Row >
          <Col sm={4} data-aos="zoom-in-right">
           <SideMenuBar></SideMenuBar>
          </Col>

          <Col sm={8} data-aos="zoom-in-left">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <h2 style={{ color: "#EF087A"}}>InstaGram</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h2 style={{ color: "#EF087A"}}>Dribble</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                  <h2 style={{ color: "#EF087A"}}>LinkedIn</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image4} alt="Third slide" />
                <Carousel.Caption>
                  <h2 style={{ color: "#EF087A"}}>FaceBook</h2>
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
