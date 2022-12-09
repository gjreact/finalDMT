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
  ClibcurlBeneficiaryList,
  CrestsharpBeneficiaryList,
  GonativeBeneficiaryList,
  JavascriptListBeneficiary,
  ListBeneficiaryCode,
  NodeListBeneficiary,
  PHPListBeneficiary,
  PowershellListBeneficiary,
  PythonListBeneficiary,
  RubyListBeneficiary,
  ShellListBeneficiary,
  SwiftListBeneficiary,
} from "../RequestBeneficiary/ListBeneficiaryCode";
import Bar from "../../../Bar";


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

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (id) => {

    setToggleState(id);
  };

  const pushItem = (icon, index) => {
    console.log(icon);

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
          <h2 className="mb-0 mt-0 p-3">List Beneficiary</h2>
          <p className="px-4 mb-5 content-bg">Get list of recipients for a Remitter</p>
          <div className="m">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Si no.</th> <th>HTTP Response Conde</th>
                  <th>Response Code</th> <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>404</td>
                  <td>0</td>
                  <td>Not found</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h3 className=" p-3 link-font-size">URL:</h3>
          <code className="py-4 url-link">
            http://194.195.113.218:8090/paymento/remitter-reg/getbeneficiary
          </code>
          <h3 className="py-2 link-font-size">Method:</h3>
          <p className="content-bg">POST</p>

          <h3 className="py-2 link-font-size">Header:</h3>
          <p className="output content-bg">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow">abs1nxxxxx"</code>"<br />
          </p>

          <h3 className="py-2 link-font-size">Request:</h3>
          <p className="output content-bg">
            <br />
            <code>"remitterid"</code> <span>: </span>{" "}
            <code className="code-yellow">""</code> <br />
          </p>
        </Row>
      </Col>

      {/* ewrtfyguijo;k */}
      <Col
        id="style-1"
        className="col-12 col-sm-5  link-heading scrollbar pt-5 "
      >
        {toggleState === 0 && <ListBeneficiaryCode />}
        {toggleState === 1 && <PythonListBeneficiary />}
        {toggleState === 2 && <ShellListBeneficiary />}
        {toggleState === 3 && <PHPListBeneficiary />}
        {toggleState === 4 && <NodeListBeneficiary />}
        {toggleState === 5 && <PowershellListBeneficiary />}
        {toggleState === 6 && <CrestsharpBeneficiaryList />}
        {toggleState === 7 && <JavascriptListBeneficiary />}
        {toggleState === 8 && <ClibcurlBeneficiaryList />}
        {toggleState === 9 && <SwiftListBeneficiary />}
        {toggleState === 10 && <GonativeBeneficiaryList />}
        {toggleState === 11 && <RubyListBeneficiary />}

        <div className="lang-btns d-flex justify-content-evenly">
          {horizontalIconArray.map(({ icon, id }, index) => {
            return (
              <button
                style={{
                  outline: "none",
                  border: "none",
                  background: "transparent",
                }}
                id={icon}
                key={index}
                onClick={() => toggleTab(id)}
              >
                <img src={icon} height="20" width="20" alt="icon" />
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
                    onClick={() => {
                      toggleTab(id);
                      pushItem({ icon, text, id }, index);
                    }}
                    key={index}
                  >
                    <img src={icon} height="20" width="20" alt="icon" />
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
