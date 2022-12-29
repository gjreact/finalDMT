import logo from "../asset/images/logo_blue.png";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import SideMenu from "../pages/SideBar/SideMenu";
import "../asset/css/theme.css";
import "../asset/css/heading.css";

function BasicLayout({ children }) {
  return (
    <>
      <Container fluid className="margin-0 containerr">
        <Row className="Roww">
          <Col
            className="d-none d-lg-block sideMenuColor col-2 border "
            style={{ minWidth: "270px" }}
          >
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="align-center"
                style={{ width: "100%", maxWidth: "150px" }}
                src={logo}
                alt="Paymento_Logo"
              />
            </div>
            <hr className="hrline" />
            <div>
              <SideMenu />
            </div>
            <hr className="hrline" />
            <h6 className="docHead">Documentation Powered by Paymento</h6>
          </Col>
          <Col className="xs-12 md-10 bg-white overflow-scroll">
            <Row className="Roww1">{children}</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
