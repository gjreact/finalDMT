import React, { useState } from "react";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
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
import {
  JavaSendMoney,
  PythonSendMoney,
  ShellSendMoney,
  PHPSendMoney,
  NodeSendMoney,
  PowershellSendMoneyCode,
  CrestsharpSendMoney,
  JavascriptSendMoney,
  ClibcurlSendMoney,
  SwiftSendMoney,
  RubySendMoneyCode,
  GonativeSendMoney,
} from "../RequestSendmoney/SendMoneyCode";
import Bar from "../../../Bar";
const SendMoneyPage = () => {
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
      <Col className="col-12 col-sm-7 border">
        <Bar />
        <Row>
          <h2 className="mb-0 mt-0 p-3">Send Money</h2>
          <p className="px-4 mb-5 content-bg">
            When you are in an UAT Environment try this account numbers for
            success , processing and failure response
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
                  <td>400</td>
                  <td>114</td>
                  <td>
                    Invalid amount please enter a valid amount (100 to 5000)
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>117</td>
                  <td>Beneficiary Not found</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>400</td>
                  <td>106</td>
                  <td>Remitter does not exist</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h3 className="py-2 link-font-size ">URL:</h3>
          <code className="py-4 url-link">
            http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money
          </code>

          <h3 className="py-3 link-font-size">Request:</h3>
          <p className="output content-bg">
            <br /> <code>"beneficiaryId"</code> <span>: </span>{" "}
            <code className="code-cyan">36</code>
            <br /> <code>"remitterId"</code> <span>: </span>{" "}
            <code className="code-cyan">26</code>
            <br /> <code>"Amount"</code> <span>: </span>{" "}
            <code className="code-yellow">200</code>
            <br />
          </p>

          <h3 className="py-2 link-font-size">Header:</h3>
          <p className="output content-bg">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow"> "abs1nxxxxx"</code>
            <br />
          </p>
        </Row>
      </Col>

      <Col id="style-1" className="col-12 col-sm-5 link-heading scrollbar pt-5">
        {toggleState === 0 && <JavaSendMoney />}
        {toggleState === 1 && <PythonSendMoney />}
        {toggleState === 2 && <ShellSendMoney />}
        {toggleState === 3 && <PHPSendMoney />}
        {toggleState === 4 && <NodeSendMoney />}
        {toggleState === 5 && <PowershellSendMoneyCode />}
        {toggleState === 6 && <CrestsharpSendMoney />}
        {toggleState === 7 && <JavascriptSendMoney />}
        {toggleState === 8 && <ClibcurlSendMoney />}
        {toggleState === 9 && <SwiftSendMoney />}
        {toggleState === 10 && <GonativeSendMoney />}
        {toggleState === 11 && <RubySendMoneyCode />}

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

export default SendMoneyPage;
