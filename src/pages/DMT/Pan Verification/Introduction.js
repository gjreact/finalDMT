import React from "react";
import "./../../../asset/css/basiclayout.css";
import { Col, Row } from "react-bootstrap";
import Bar from "../../Bar";

function Introduction() {
  return (
    <div>
      <Col
        style={{ height: "100h" }}
        className="col-lg-10  col-md-12 col-sm-12   "
      >
        <Bar />

        <Row>
          <h1 style={{ height: "10h" }} className=" mb-0 mt-0 heading border">
            Introduction
          </h1>
          <p
            style={{ paddingBottom: "300px" }}
            className="  border  content-bg "
          >
            PAN Verification feature enables you to instantly verify PAN details
            of individuals or businesses before you onboard them or make any
            transactions with them. The feature helps you to validate if a
            particular PAN is valid, also check if it belongs to an individual
            or a business.
            <br />
            <br />
            You can use the PAN verification feature for various purposes, such
            as:
            <ul>
              <li>Onboarding vendors</li>
              <li>Onboarding employees</li>
              <li>Transferring funds or processing payments</li>
              <li> Required for KYC verification</li>
            </ul>
            You can do a single verification at a time via API. View details
            like PAN type, name of the PAN holder, verification status, and
            more, of all PAN numbers shared in the file
          </p>
        </Row>
      </Col>
    </div>
  );
}

export default Introduction;
