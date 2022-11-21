import logo from "../asset/images/logo.png"
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../asset/css/slite.css";
import RemitterBalancePage from "../pages/DMT/Remitter/RemitterBalance/RemitterBalancePage";

function BasicLayout() {
  return (
    <>
      <Container fluid className="border border-2 margin-0 containerr">
        <Row className="Roww">
          <Col className="d-none d-md-block bg-dark col-2">
            <div className="mt-3 d-flex justify-content-center">
             <img className="align-center" style={{width:"100%",maxWidth:"150px"}} src={logo} alt="Paymento_Logo" />
            </div>
            <div>
              <RemitterBalancePage />
            </div>
          </Col>
          <Col className="xs-12 md-10 bg-white">
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
