import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./Services.css";
import image1 from "../../Images/Services/service-2.jpg";
import image2 from "../../Images/Services/service-1.jpg";
import image3 from "../../Images/Services/64407.jpg";
import image4 from "../../Images/Services/service-4.jpg";
import image5 from "../../Images/Services/service-5.jpg";
import image6 from "../../Images/Services/service-6.jpg";
import Carousels from "../Banner/Carousels";

const Services = () => {
  return (
    <div className="mt-5">
      <h1>You <span style={{ color: "#AA5600"}}>Have to Need</span> These Items</h1>
      <Container className="Services">
        <CardGroup>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image1}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong>Branding The Creative Journey</strong> <br />
                This very complete program was designed as a series of courses
                that helps you master your skills in branding, including
                developing branding strategies, branded content generation,
                image creation and customer experience.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image2}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong> Creativity and conditioning</strong> <br />
                We are the result of society, we are the depositories of
                society, and we either conform to society or break away.
                Breaking away from society depends upon our background and
                conditioning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image3}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong>We Must Come To The Point</strong>
                <br />
                To find out, your mind must be in a state of creative
                experience, capable of discovering, which means it must be
                completely free from all knowledge.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image4}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong>Branding The Creative Journey</strong> <br />
                This very complete program was designed as a series of courses
                that helps you master your skills in branding, including
                developing branding strategies, branded content generation,
                image creation and customer experience.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image5}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong> Creativity and conditioning</strong> <br />
                We are the result of society, we are the depositories of
                society, and we either conform to society or break away.
                Breaking away from society depends upon our background and
                conditioning.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 service">
            <Card.Img
              style={{ width: 323, height: 220, alignItems: "center" }}
              variant="top"
              src={image6}
            />
            <Card.Body className="m-4">
              <Card.Text>
                <strong>We Must Come To The Point</strong>
                <br />
                To find out, your mind must be in a state of creative
                experience, capable of discovering, which means it must be
                completely free from all knowledge.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div>
          <Carousels></Carousels>
        </div>
      </Container>
    </div>
  );
};

export default Services;
