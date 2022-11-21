import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../asset/css/slite.css";

function BasicLayout() {
  return (
    <>
      <Container fluid className="border border-2 margin-0 containerr">
        <Row className="Roww">
          <Col className="d-none d-md-block bg-dark col-2">dfsd</Col>
          <Col className="xs-12 md-10 bg-white">
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
