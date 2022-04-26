import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import contact from "../../Images/Contacts/Contact-us.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Container className="mt-5 contacts">
        <Row className="pt-5">
          <Col>
            <div className="pt-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>First Name</InputGroup.Text>
                <FormControl aria-label="First name" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Last Name</InputGroup.Text>
                <FormControl aria-label="Last name" />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>Ask Anything</InputGroup.Text>
                <FormControl
                  className="p-5"
                  as="textarea"
                  aria-label="textarea"
                />
              </InputGroup>
              <Button className="button" variant="outline-dark">Send</Button>
            </div>
          </Col>

          <Col>
            <img src={contact} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
