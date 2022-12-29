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
import js from "../../../../asset/images/js.png";
import ruby from "../../../../asset/images/ruby.png";
import C from "../../../../asset/images/C.png";
import swift from "../../../../asset/images/swift.jpeg";
import Bar from "../../../Bar";
import {
  CreateBeneficiaryCode,
  PHPBeneficiary,
  PythonBeneficiary,
  ShellBeneficiary,
  NodeRegisterBeneficiary,
  JavascriptRegisterBeneficiary,
  SwiftRegisterBeneficiary,
  GonativeBeneficiaryRegister,
  ClibcurlBeneficiaryRegister,
  CrestsharpBeneficiaryRegister,
  RubyRegisterBeneficiary,
  PowershellRegisterBeneficiary,
} from "../RequestBeneficiary/CreateBeneficiaryCode";

const BeneficiaryCreatePage = () => {
  const [horizontalIconArray, setHorizontalIconArray] = useState([
    {
      id: 0,
      icon: java,
      text: "java",
    },
    {
      id: 1,
      icon: python,
      text: "python",
    },
    {
      id: 2,
      icon: shell,
      text: "shell",
    },
    {
      id: 3,
      icon: php,
      text: "php",
    },
  ]);
  const dummyArray = [];
  const cacheArray = [];
  const [verticalIconArray, setVerticalIconArray] = useState([
    {
      id: 4,
      icon: node,
      text: "Node JS",
    },
    {
      id: 5,
      icon: powershell,
      text: "Powershell",
    },
    {
      id: 6,
      icon: csharp,
      text: "Csharp",
    },
    {
      id: 7,
      icon: js,
      text: "Javascript",
    },
    {
      id: 8,
      icon: C,
      text: "C",
    },
    {
      id: 9,
      icon: swift,
      text: "Swift",
    },
    {
      id: 10,
      icon: Go,
      text: "Go",
    },
    {
      id: 11,
      icon: ruby,
      text: "ruby",
    },
  ]);

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id) => {
    console.log(id);
    setToggleState(id);
  };

  const pushItem = (icon, index) => {
    toggleTab(icon.id);
    dummyArray[0] = icon;

    setVerticalIconArray([
      ...verticalIconArray,
      verticalIconArray.splice(index, 1),
    ]);

    cacheArray[0] = horizontalIconArray[horizontalIconArray.length - 1];

    setHorizontalIconArray(
      ...horizontalIconArray,
      horizontalIconArray.splice(horizontalIconArray.length - 1, 1)
    );

    setHorizontalIconArray([
      ...horizontalIconArray,
      (horizontalIconArray[horizontalIconArray.length - 1] = dummyArray[0]),
    ]);

    setVerticalIconArray([
      ...verticalIconArray,
      (verticalIconArray[index] = cacheArray[0]),
    ]);
  };

  return (
    <>
      <Col className="col-12 col-sm-7 boder">
        <Bar />
        <Row>
          <h1 className="heading mb-0">Beneficiary</h1>
          <p className="px-4 mb-0 content-bg">
            Beneficiary is the bank account who receives the funds remitted by
            the remitter mobile number.
            <br />A beneficiary is someone to whom one can transfer money or to
            be able to transfer money, the customer must add a beneficiary using
            the beneficiary's bank account details. By using our APIs, you can
            Create, Delete and Fetch beneficiaries for your customers.
          </p>
          <h2 className="mb-0 mt-0 p-3">Register Beneficiary</h2>
          <p className="px-4  mb-5 content-bg">
            Beneficiary need to be registered in the system through the
            remitter's mobile number and bank details.
          </p>
          <div className="m">
            <Table striped bordered hover responsive id="tableDesign">
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
          <code className="py-4 url-link">
            http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary
          </code>
          <h3 className="py-2 link-font-size">Method:</h3>
          <p className="content-bg">POST</p>

          <h3 className="py-2 link-font-size">Header:</h3>
          <p className="output content-bg">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            "abs1nxxxxx"
            <br />
          </p>

          <h3 className="py-2 p-3link-font-size">Request:</h3>
          <p className="output content-bg">
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
        className="col-12 col-sm-5  link-heading scrollbar pt-5 "
      >
        {toggleState === 0 && <CreateBeneficiaryCode />}
        {toggleState === 1 && <PythonBeneficiary />}
        {toggleState === 2 && <ShellBeneficiary />}
        {toggleState === 3 && <PHPBeneficiary />}
        {toggleState === 4 && <NodeRegisterBeneficiary />}
        {toggleState === 5 && <PowershellRegisterBeneficiary />}
        {toggleState === 6 && <CrestsharpBeneficiaryRegister />}
        {toggleState === 7 && <JavascriptRegisterBeneficiary />}
        {toggleState === 8 && <ClibcurlBeneficiaryRegister />}
        {toggleState === 9 && <SwiftRegisterBeneficiary />}
        {toggleState === 10 && <GonativeBeneficiaryRegister />}
        {toggleState === 11 && <RubyRegisterBeneficiary />}

        <div className="lang-btns">
          {horizontalIconArray.map((iconName, index) => {
            return (
              <button
                className="togglebuttton"
                id={iconName.icon}
                key={index}
                onClick={() => toggleTab(iconName.id)}
              >
                <img
                  src={iconName.icon}
                  className="togglebutttonimg"
                  alt="icon"
                />
              </button>
            );
          })}

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              {verticalIconArray.map(({ icon, text, id }, index) => {
                return (
                  <Dropdown.Item
                    onClick={() => pushItem({ icon, text, id }, index)}
                    key={index}
                  >
                    <img src={icon} height="20" width="20" alt="icon" />{" "}
                    <span style={{ fontSize: "13px" }}>{text}</span>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
    </>
  );
};

export default BeneficiaryCreatePage;
