import React, { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown, Table } from "react-bootstrap";
import "../../../../asset/css/basiclayout.css";
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
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
import Bar from "../../../Bar";
import {
  JavaVerifyOtp,
  PythonVerifyOtp,
  ShellVerifyOtp,
  PHPVerifyOtp,
  NodeVerifyOtpCode,
  JavascriptVerifyOtpCode,
  SwiftVerifyOtpCode,
  GonativeVerifyOtp,
  CrestsharpVerifyOtp,
  ClibcurlVerifyOtp,
  RubyVerifyOtpCode,
  PowershellVerifyOtpCode
} from "../ResponseCodeRemitter/RequestCode/VerifyOtpCode";

const VerifyOtpPage = () => {
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

  // console.log("verticalIconArray-above",verticalIconArray);
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
      {/* Remitter verify otp starts... */}

      <Col className="col-12 col-sm-7 border ">
        <Bar />
        <Row>
          <h2 className="mb-0 mt-0 p-3">Verify Remitter OTP</h2>
          <p className="px-4 mb-5 content-bg">
            As mentioned in Remitter information, if a remitter is not found
            registered in the system, then by this API remitter can register
            themselves, by filling below details with OTP and ReferenceID
            received from " Remitter send OTP".
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
                  <td>208</td>
                  <td>81</td>
                  <td>Invalid OTP</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>208</td>
                  <td>82</td>
                  <td>Invalid ReferenceID</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h3 className=" link-font-size">URL:</h3>
          <code className="py-4 url-link">
            http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
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

          <h3 className="py-2 link-font-size">Request:</h3>
          <p className="output content-bg">
            <br />
            <code>"otp"</code> <span>: </span>
            <code className="code-cyan"> "017111" </code> <br />
            <code>"otpRefferenceId"</code> <span>: </span>{" "}
            <code className="code-yellow">"URMDiiD2UQkIkkQy" </code> <br />
            <code>"mobile"</code> <span>: </span>{" "}
            <code className="code-cyan">"7902626443" </code> <br />
            <code>"remitterType"</code> <span>: </span>{" "}
            <code className="code-cyan">3 </code> <br />
          </p>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-5  link-heading scrollbar pt-5"
      >
        {toggleState === 0 && <JavaVerifyOtp />}
        {toggleState === 1 && <PythonVerifyOtp />}
        {toggleState === 2 && <ShellVerifyOtp />}
        {toggleState === 3 && <PHPVerifyOtp />}
        {toggleState === 4 && <NodeVerifyOtpCode />}
        {toggleState === 5 && <JavascriptVerifyOtpCode />}
        {toggleState === 6 && <SwiftVerifyOtpCode />}
        {toggleState === 7 && <GonativeVerifyOtp />}
        {toggleState === 8 && <CrestsharpVerifyOtp />}
        {toggleState === 9 && <ClibcurlVerifyOtp />}
        {toggleState === 10 && <RubyVerifyOtpCode />}
        {toggleState === 11 && <PowershellVerifyOtpCode />}

        <div className="lang-btns d-flex justify-content-evenly">
          {horizontalIconArray.map((iconName, index) => {
            return (
              <button
                className="togglebuttton"
                id={iconName.icon}
                key={index}
                onClick={() => toggleTab(index)}
              >
                <img src={iconName.icon} height="20" width="20" className="togglebutttonimg"  />
              </button>
            );
          })}

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              {verticalIconArray.map(({ icon, text,id }, index) => {
                // console.log(verticalIconArray, "view");
                return (
                  <Dropdown.Item
                    onClick={() => pushItem({ icon, text,id }, index)}
                    key={index}
                  >
                    <img src={icon} height="20" width="20" />
                    <span style={{ fontSize: "13px" }}>{text}</span>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>

      {/* Remitter verify otp  ends...*/}
    </>
  );
};

export default VerifyOtpPage;
