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
import {
  JavaRemitterBalance,
  PythonRemitterBalance,
  ShellRemitterBalance,
  PHPRemitterBalance,
  NodeRemitterBalanceCode,
  JavascriptRemitterBalanceCode,
  SwiftRemitterBalanceCode,
  ClibcurlRemitterinfo,
  CrestsharpRemitterBalance,
  GonativeRemitterBalance,
  RubyRemitterBalanceCode,
  PowershellRemitterBalanceCode,
} from "../ResponseCodeRemitter/RequestCode/RemitterBalanceCode";
import Bar from "../../../Bar";

const RemitterBalancePage = () => {
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
      <Col className="col-12 col-sm-7 border">
        <Bar />
        <Row>
          <h2 className="mb-0 mt-0 p-3">Get Remitter Balance</h2>
          <p className="px-4  mb-5 content-bg">
            This Api is used to fetch the balance of the registered remitter
            number".
          </p>
          <div className="m sm-size">
            <Table striped bordered hover responsive id="style-2">
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
                  <td>Remitter Doesn???t exist</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h3 className=" link-font-size">URL:</h3>
          <code className="py-4 url-link">
            http://194.195.113.218:8090/paymento/remitter-reg/check-balance
          </code>
          <h3 className="py-2 link-font-size">Method:</h3>
          <p className="content-bg">POST</p>

          <h3 className="py-2 link-font-size">Header:</h3>
          <p className="output content-bg">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow">"abs1nxxxxx"</code>
            <br />
          </p>

          <h3 className="py-2 link-font-size">Request:</h3>
          <p className="output content-bg">
            <br />
            <code> "remitterphone"</code> <span>: </span>{" "}
            <code className="code-cyan">"7902626443"</code> <br />
          </p>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12 col-sm-5 zindex link-heading scrollbar codeBorderoutset pt-5"
        style={{ maxHeight: "63rem" }}
      >
        {toggleState === 0 && <JavaRemitterBalance />}
        {toggleState === 1 && <PythonRemitterBalance />}
        {toggleState === 2 && <ShellRemitterBalance />}
        {toggleState === 3 && <PHPRemitterBalance />}
        {toggleState === 4 && <NodeRemitterBalanceCode />}
        {toggleState === 5 && <PowershellRemitterBalanceCode />}
        {toggleState === 6 && <CrestsharpRemitterBalance />}
        {toggleState === 7 && <JavascriptRemitterBalanceCode />}
        {toggleState === 8 && <ClibcurlRemitterinfo />}
        {toggleState === 9 && <SwiftRemitterBalanceCode />}
        {toggleState === 10 && <GonativeRemitterBalance />}
        {toggleState === 11 && <RubyRemitterBalanceCode />}

        <div className="lang-btns ">
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

export default RemitterBalancePage;
