import React from "react";
import { Col, Row } from "react-bootstrap";
import Bar from "../../Bar";

function Authentication() {
  return (
    <>
      <Col className="col-lg-10  col-md-12 col-sm-12 authparagraph border-end">
        <Bar />
        <h1 className="mb-0 mt-0 heading">Authentication</h1>
        <Row className="h-100 w-90">
          <p className="px-4  mb-0 content-bg">
            <p className="authparagraph">
              All API requests must be authenticated with a developer_key in the
              request. Your API keys carry many privileges, so be sure to keep
              them secret! You authenticate to the Payment API by providing your
              API key in the header of each request. We only accept requests
              from shared IP with us. So you should validate your IP with our
              platform
            </p>
            <h2 className="heading2">HOW TO GENERATE AN API KEY</h2>
            <p>
              Production developer key will be shared after the following is
              done:
            </p>
            <ol type="1">
              <li>Organization's KYC is completed on Paymento’s platform </li>
              <li>
                Integration has been completed on UAT with signoff from Eko team
              </li>
              <li>
                For UAT, a dummy developer_key can be Given while you contact
                our Team
              </li>
            </ol>
            <h2 className="heading2">IP ADDRESS RESTRICTION</h2>
            <p>
              We only whitelist Indian IP addresses and the server location must
              be of India only, We accept requests only from the whitelisted IP.
              you need to contact our team for whitelisting your server IP with
              us. You can whitelist 3 IP s at a time.
            </p>
          </p>
        </Row>
      </Col>
    </>
  );
}

export default Authentication;
