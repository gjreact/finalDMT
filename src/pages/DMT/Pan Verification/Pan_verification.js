import React from "react";
import "./../../../asset/css/basiclayout.css";
import { Col, Row } from "react-bootstrap";
import Bar from "../../Bar";
import CodeWrapper from "../CodeWrapper/CodeWrapper";

function Pan_verification() {
  return (
    <div>
      <Row>
        <Col className="h-100 border">
          <Bar />
          <h1 className="mb-0 mt-0 heading ">Pan Verification</h1>
          <p className="px-4 content-bg ">
            All API requests must be authenticated with a developer_key in the
            request. Your API keys carry many privileges, so be sure to keep
            them secret!
            <br />
            You authenticate to the Payment API by providing your API key in the
            header of each request.
            <br />
            We only accept requests from shared IP with us. So you should
            validate your IP with our platform
          </p>
          <h6 className="mb-0 mt-0  panverifyh6 ">
            {" "}
            How to generate an api key
          </h6>
          <p className="px-4   content-bg">
            Production developer key will be shared after the following is done:
            <ol>
              <li>Organization's KYC is completed on Paymento’s platform</li>
              <li>
                Integration has been completed on UAT with signoff from team
              </li>
              <li>
                For UAT, a dummy developer_key can be Given while you contact
                our Team
              </li>
            </ol>
          </p>
          <h6 className=" panverifyh6 mb-0 mt-0 "> IP Address restriction</h6>
          <p className="px-4   content-bg mb-1">
            We only whitelist Indian IP addresses and the server location must
            be of India only, We accept requests only from the whitelisted IP.
            you need to contact our team for whitelisting your server IP with
            us. You can whitelist 3 IP s at a time.
          </p>
          <h3 className="py-2 link-font-size">URL:</h3>
          <p className=" content-bg  m-0">
            <code className="py-4 url-link">
              http://194.195.113.218:8090/paymento/pan/api-pan-verification
            </code>
          </p>
          <h3 className="py-4 link-font-size">Request:</h3>
          <p className="output content-bg  m-0">
            <br /> <code>"pan"</code>
            <span>:</span>
            "OPHPS99XXX"
            <br />
          </p>
          <h3 className="py-2 link-font-size">Header:</h3>
          <p className="output content-bg">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow "> "abs1nxxxxx"</code>
            <br />
          </p>
        </Col>
        <Col
          id="style-1"
          className=" panverifycol h-100 link-heading scrollbar pt-5 "
        >
          <CodeWrapper heading="Response">
            <div className="request-wrapper">
              <p className="output  text-white ">
                <br /> <code>"status"</code> <span>: </span>
                <code className="code-cyan">200</code>,
                <br /> <code>"success"</code> <span>: </span>
                <code className="code-cyan">true</code>,
                <br /> <code>"message"</code> <span>: </span>
                <code className="code-yellow">"PAN is valid."</code>,
                <br /> <code>"data":</code>
                <p className="output text-white">
                  <br /> <code>"aadhaar_seeding_status"</code> <span>: </span>
                  <code className="code-cyan">"LINKED"</code>,
                  <br /> <code>"category"</code> <span>: </span>
                  <code className="code-cyan">"Individual or Person"</code>,
                  <br /> <code>"full_name"</code> <span>: </span>
                  <code className="code-yellow">"ARYA K S"</code>
                  <br />
                </p>
              </p>
            </div>
          </CodeWrapper>
        </Col>
      </Row>
    </div>
  );
}

export default Pan_verification;
