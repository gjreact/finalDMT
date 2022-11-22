import React from "react";
import { Col, Row } from "react-bootstrap";
import BasicLayout from "../../../layout/BasicLayout";

function RemitterPage() {
  return (
    <>
      <BasicLayout>
        <Col className="col-12 col-sm-6">
          <Row>
            <h1 className="heading">1.Remitter</h1>
            <p>
              With these APIs we can check the Remitter mobile number is already
              registered with our database, if yes then the response system will
              provide remitter details. If the remitter mobile number is not
              queried before, then system will hit an OTP on the remitter mobile
              number to initiate the registration process
            </p>
          </Row>
        </Col>
      </BasicLayout>
    </>
  );
}

export default RemitterPage;
