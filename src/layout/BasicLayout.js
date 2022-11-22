import logo from "../asset/images/logo.png";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../asset/css/basiclayout.css";
import SideMenu from "../pages/SideBar/SideMenu";
// import RemitterPage from "../pages/DMT/Remitter/RemitterPage";
import "../asset/css/heading.css";

function BasicLayout() {
  return (
    <>
      <Container fluid className="margin-0 containerr">
        <Row className="Roww">
          <Col className="d-none d-md-block bg-dark col-2 left-section">
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="align-center"
                style={{ width: "100%", maxWidth: "150px" }}
                src={logo}
                alt="Paymento_Logo"
              />
            </div>
            <div>
              <SideMenu />
            </div>
          </Col>

          <Col className="xs-12 md-10 bg-white overflow-scroll ">
            <Row className="Roww1">
              <Col className="dark-box d-none d-sm-block ">darkboxxxx</Col>
              <Col className="col-12 col-sm-6">
                <Row>
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
              </Col>
              {/* {children} */}
              <Col className="col-12 col-sm-6 bg-dark zindex"></Col>
              <Col className="col-12 col-sm-6">
                <Row>
                  <h2 className="mb-0 mt-0">a.Remitter Information</h2>
                  <p className="px-4  mb-0">
                    WUsing this API You can use this API to check if the
                    customer has been created on our platform. If not, you must
                    create the customer before using Eko related services (like
                    Money Transfer) for him/her.
                  </p>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6 zindex bg-dark">
                <Row>
                  <h3>URL:</h3>
                  <code className="text-white">
                    http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
                  </code>
                  <h3>Request:</h3>
                  <code>"{"8281020104"}"</code>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6">
                <Row>
                  <h2 className="mb-0 mt-0">b:Remitter Send OTP</h2>
                  <p className="px-4  mb-0">
                    As mentioned in Remitter Information API, if a remitter is
                    not found registered in the system, then by this API
                    remitter can register themselves, by filling below details
                    with OTP. Using this otp Can verify the remitter
                  </p>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6 zindex bg-dark text-white">
                <Row>
                  <h3>URL:</h3>
                  <code className="text-white">
                    http://194.195.113.218:8090/paymento/remitter-reg/send-otp
                  </code>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6">
                <Row>
                  <h2 className="mb-0 mt-0">c:Remitter Resend OTP</h2>
                  <p className="px-4  mb-0">
                    For any kind of reasons if the remitter send otp to get
                    failed or the remitter not verified using the OTP, This
                    endpoint using for resend the OTP
                  </p>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6 zindex bg-dark">
                <Row>
                  <h3>Header:request</h3>
                  <code>
                    http://194.195.113.218:8090/paymento/remitter-reg/resend-otp
                  </code>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6">
                <Row>
                  <h2 className="mb-0 mt-0">d:Verify Remitter OTP</h2>
                  <p className="px-4  mb-0">
                    As mentioned in Remitter information, if a remitter is not
                    found registered in the system, then by this API remitter
                    can register themselves, by filling below details with OTP
                    and ReferenceID received from " Remitter send OTP"
                  </p>
                </Row>
              </Col>
              <Col className="col-12 col-sm-6 zindex bg-dark">
                <Row>
                  <h3>URL:</h3>
                  <code>
                    http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
                  </code>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
