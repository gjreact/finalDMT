import React, { useState } from "react";
import { Col, Row, Dropdown, Table } from "react-bootstrap";
import "../../../../asset/css/basiclayout.css";
import shell from "../../../../asset/images/shell.jpg";
import Go from "../../../../asset/images/Go.png";
import java from "../../../../asset/images/java.png";
import python from "../../../../asset/images/python.png";
import php from "../../../../asset/images/php.png";
import node from "../../../../asset/images/node.png";
import powershell from "../../../../asset/images/powershell.svg";
import csharp from "../../../../asset/images/csharp.png";
import http from "../../../../asset/images/http.png";
import js from "../../../../asset/images/js.png";
import kotlin from "../../../../asset/images/kotlin.jpeg";
import ruby from "../../../../asset/images/ruby.png";
import objectiveC from "../../../../asset/images/objectiveC.png";
import C from "../../../../asset/images/C.png";
import CPlusPlus from "../../../../asset/images/CPlusPlus.png";
import swift from "../../../../asset/images/swift.jpeg";
import {
  CreateBeneficiaryCode,
  // CSharpBeneficiary,
  // JavaBeneficiary,
  PHPBeneficiary,
  PythonBeneficiary,
  ShellBeneficiary,
} from "../ResponseBeneficiary/CreateBeneficiaryCode";

const BeneficiaryCreatePage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      {/* Beneficiary create page starts... */}

      <Col className="col-12 col-sm-7 border">
        <Row>
          <h1 className="heading mb-0">Beneficiary</h1>
          <p className="px-4 mb-0 backroundP-tag">
            Beneficiary is the bank account who receives the funds remitted by
            the remitter mobile number.
            <br />A beneficiary is someone to whom one can transfer money or to
            be able to transfer money, the customer must add a beneficiary using
            the beneficiary's bank account details. By using our APIs, you can
            Create, Delete and Fetch beneficiaries for your customers.
          </p>
          <h2 className="mb-0 mt-0 p-3">Register Beneficiary</h2>
          <p className="px-4  mb-5">
            Beneficiary need to be registered in the system through the
            remitter's mobile number and bank details.
          </p>
          <div className="m">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Sl.no</th>
                  <th>HTTP Response Code</th>
                  <th>Response Code</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>404</td>
                  <td>501</td>
                  <td>Beneficiary already exist</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>4104</td>
                  <td>Enter a valid name</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>404</td>
                  <td>105</td>
                  <td>Invalid bank code</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>404</td>
                  <td>106</td>
                  <td>Sender Does Not exist</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>404</td>
                  <td>107</td>
                  <td>Invalid Account number</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>108</td>
                  <td>Invalid bank IFSC</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h3 className=" p-3 link-font-size">URL:</h3>
          <code className=" pt-5 pb-5 url-link">
            http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary
          </code>
          <h3 className=" p-3 link-font-size">Method:</h3>
          <p className="p-3">POST</p>

          <h3 className=" p-3 link-font-size">Header:</h3>
          <p className="output ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            "abs1nxxxxx"
            <br />
          </p>

          <h3 className=" p-3 p-3 link-font-size">Request:</h3>
          <p className="output">
            <br />
            <code>"beneficiaryName"</code> <span>: </span>{" "}
            <code className="code-yellow">"anu",</code>
            <br />
            <code>"beneficiaryBankId" </code> <span>: </span>
            <code className="code-cyan"> 36,</code>
            <br />
            <code>"remitterMobileNumber" </code> <span>: </span>
            <code className="code-cyan"> "7902900295,</code>
            <br />
            <code>"beneficiaryMobileNumber"</code> <span>: </span>{" "}
            <code className="code-cyan">790290029,</code>
            <br />
            <code>"accountNumber"</code> <span>: </span>{" "}
            <code className="code-cyan">8865488888,</code>
            <br />
            <code>"address" </code> <span>: </span>{" "}
            <code className="code-yellow">Calicut,</code>
            <br />
            <code>"ifscCode" </code> <span>: </span>{" "}
            <code className="code-yellow">UTIB0002916,</code>
            <br />
            <code>"accountHolderName" </code> <span>: </span>
            <code className="code-yellow"> Venu,</code>
            <br />
            <code>"branchName"</code> <span>: </span>{" "}
            <code className="code-yellow">Mavoor Road</code> <br />
          </p>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-5  link-heading scrollbar pt-5"
      >
        {toggleState === 1 && <CreateBeneficiaryCode />}
        {toggleState === 2 && <PythonBeneficiary />}
        {toggleState === 3 && <ShellBeneficiary />}
        {toggleState === 4 && <PHPBeneficiary />}
        {toggleState === 5 && <PHPBeneficiary />}
        {toggleState === 6 && <PHPBeneficiary />}
        {toggleState === 7 && <PHPBeneficiary />}
        {toggleState === 8 && <PHPBeneficiary />}
        {toggleState === 9 && <PHPBeneficiary />}
        {toggleState === 10 && <PHPBeneficiary />}
        {toggleState === 11 && <PHPBeneficiary />}
        {toggleState === 12 && <PHPBeneficiary />}

        <div className="lang-btns d-flex justify-content-evenly">
          <button
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            id="java"
            onClick={() => toggleTab(1)}
          >
            <img src={java} height="20" width="20" />
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            id="python"
            onClick={() => toggleTab(2)}
          >
            <img src={python} height="20" width="20" />
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            id="shell"
            onClick={() => toggleTab(3)}
          >
            <img src={shell} height="20" width="20" />
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            id=""
            onClick={() => toggleTab(4)}
          >
            <img src={php} height="20" width="20" />
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            id=""
            onClick={() => toggleTab(5)}
          >
            <img src={Go} height="20" width="20" />
          </button>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <img src={node} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}>Node js</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <img src={powershell} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}>Powershell</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={csharp} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Csharp</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={http} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> HTTP</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={js} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Javascript</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={kotlin} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Kotlin</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={ruby} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Ruby</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={objectiveC} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Objective C</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={C} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> C</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={CPlusPlus} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> C++</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <img src={swift} height="20" width="20" />{" "}
                <span style={{ fontSize: "13px" }}> Swift</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>

      {/* Beneficiary create page  ends...*/}
    </>
  );
};

export default BeneficiaryCreatePage;
