import React from "react";
import SideMenu from "../pages/SideBar/SideMenu";
import logo from "../asset/images/down-arrow-red.png";
import { Col, Container, Navbar, Row, Table } from "react-bootstrap";
import Bar from "../pages/Bar";

const BasicLayoutCopy = () => {
  return <>
 <Container fluid className="margin-0 containerr">
        <Row className="Roww">
<Col className="d-none d-lg-block sideMenuColor col-2 " style={{ minWidth: "270px" }}>
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="align-center"
                style={{ width: "100%", maxWidth: "150px" }}
                src={logo}
                alt="Paymento_Logo"
              />
            </div>
            <hr />
            <div>
              <SideMenu />
            </div>
            <hr />
            <h6>Documentation Powered by Paymento</h6>
          </Col>
          <Col className="xs-12 md-10 bg-white overflow-scroll ">
            <Row className="Roww1">
              {/* <Col className="dark-box d-none d-sm-block ">darkboxxxx</Col> */}
              
              {/* <Col className="col-12 col-sm-6" >
                <Row>


                  <Bar />
                  <h1 className="heading mb-0">1.Remitter</h1>
                  <p className="px-4  mb-0">
                    With these APIs we can check the Remitter mobile number is
                    already registered with our database, if yes then the
                    response system will provide remitter details. If the
                    remitter mobile number is not queried before, then system
                    will hit an OTP on the remitter mobile number to initiate
                    the registration process
                  </p>

                </Row>
              </Col> */}

              </Row>
              </Col>
              </Row>
              </Container>
  </>;
};

export default BasicLayoutCopy;
