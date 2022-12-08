import React, { useEffect, useState } from "react";
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
import Bar from '../../.././Bar'
import {
  JavaRemitter,
  PythonRemitter,
  ShellRemitter,
  PHPRemitter,
  NodeRemitterInfoCode,
  JavascriptRemitterInfoCode,
  SwiftRemitterInfoCode,
  GonativeRemitterInfo,
  ClibcurlRemitterInfo,
  CrestsharpRemitterInfo,
  RubyRemitterInfo,
  PowerShellRemitterInfo,
} from "../ResponseCodeRemitter/RequestCode/RemitterInfoCode";


const RemitterInfoPage = () => {

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
    }
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
    }
  ]);

  const [toggleState, setToggleState] = useState(0);

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
      {/* Beneficiary create page starts... */}

      <Col className="col-12 col-sm-7 border" >
        <Bar />

        <Row>
          <h1 className="heading">Remitter</h1>
          <p className="content-bg">
            With these APIs we can check the Remitter mobile number is already
            registered with our database, if yes then the response system will
            provide remitter details. If the remitter mobile number is not
            queried before, then system will hit an OTP on the remitter mobile
            number to initiate the registration process
          </p>

          <h2 className="mb-0 mt-0 ">Remitter Information</h2>
          <p className="px-4  mb-5 content-bg">
            Using this API You can use this API to check if the customer has
            been created on our platform. If not, you must create the customer
            before using Eko related services (like Money Transfer) for him/her.
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
                  <td>Remitter Doesn't exist</td>
                </tr>
              </tbody>
            </Table>

            <Row>
              <h3 className="py-2 link-font-size">URL:</h3>
              <code className="py-4 url-link">
                http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
              </code>

              <h3 className="py-2 link-font-size">Request:</h3>
              <p className="output content-bg  m-0">
                <br /> <code>"remitterPhone"</code>
                <span>:</span>
                "7902900295"
                <br />
              </p>

              <h3 className="py-2 link-font-size">Header:</h3>
              <p className="output content-bg">
                <br /> <code>"apiKey"</code>
                <span>:</span>
                <code className="code-yellow "> "abs1nxxxxx"</code>
                <br />
              </p>
            </Row>
          </div>
        </Row>
      </Col>
      <Col
        id="style-1"
        className="col-12   link-heading scrollbar pt-5 "
        style={{width:"500px"}}
      >
        {toggleState === 0 && <JavaRemitter />}
        {toggleState === 1 && <PythonRemitter />}
        {toggleState === 2 && <ShellRemitter />}
        {toggleState === 3 && <PHPRemitter />}   
        {toggleState === 4 && <NodeRemitterInfoCode />}
        {toggleState === 5 && <PowerShellRemitterInfo />}
        {toggleState === 6 && <CrestsharpRemitterInfo />}
        {toggleState === 7 && <JavascriptRemitterInfoCode />}
        {toggleState === 8 && <ClibcurlRemitterInfo />}
        {toggleState === 9 && <SwiftRemitterInfoCode />}
        {toggleState === 10 && <GonativeRemitterInfo />}
        {toggleState === 11 && <RubyRemitterInfo />}

        <div className="lang-btns d-flex justify-content-evenly ">
          {horizontalIconArray.map(({ icon, id }, index) => {
            return (
              <button

              className="togglebutton"
              id={icon}
              key={index}
           
              onClick={() =>{ 
             
                toggleTab(id)
              }}
              >
                <img src={icon} height="20" width="20" />
              </button>
            );
          })}

          <Dropdown >
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
                      pushItem({ icon, text,id }, index)
                    }

                   
                    }
                    style={{maxWidth:"480px"}}
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
    </>
  );
};

export default RemitterInfoPage;
