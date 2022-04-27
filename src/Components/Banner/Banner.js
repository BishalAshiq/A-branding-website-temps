import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import banner from "../../Images/Brand/Banner-1.png";
const Banner = () => {
  return (
    <div>
      <Container>
        <div>
          <Row xs={6} md={12} lg={12}>
            <Col xs={6}>
              <h3 style={{ padding: 90, margin: 40 }}>
                Brand Are Looking For A Better{" "}
                <span
                  style={{ color: "rgb(244, 100, 20)", fontSize: "larger" }}
                >
                  Product
                </span>
              </h3>
            </Col>
            <Col xs={6}>
              <img style={{ width: 500 }} src={banner} alt="" />
            </Col>
          </Row>
        </div>
        <div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
