import React, { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
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
  JavaResendOtp,
  PythonResendOtp,
  ShellResendOtp,
  PHPResendOtp,
} from "../ResponseCodeRemitter/ResendOtpCode";

const ResendOtpPage = () => {

  const [horizontalIconArray, setHorizontalIconArray] = useState([
    {
      icon: java,
      text: "java",
    },
    {
      icon: python,
      text: "python",
    },
    {
      icon: shell,
      text: "shell",
    },
    {
      icon: php,
      text: "php",
    }
  ]);
  const dummyArray = [];
  const cacheArray = [];
  const [verticalIconArray, setVerticalIconArray] = useState([
    {
      icon: node,
      text: "Node JS",
    },
    {
      icon: powershell,
      text: "Powershell",
    },
    {
      icon: csharp,
      text: "Csharp",
    },
    {
      icon: http,
      text: "HTTP",
    },
    {
      icon: js,
      text: "Javascript",
    },
    {
      icon: kotlin,
      text: "Kotlin",
    },
    {
      icon: objectiveC,
      text: "ObjectiveC",
    },
    {
      icon: C,
      text: "C",
    },
    {
      icon: CPlusPlus,
      text: "C++",
    },
    {
      icon: swift,
      text: "Swift",
    },
    {
      icon: Go,
      text: "Go",
    },
    {
      icon: ruby,
      text: "ruby",
    }
  ]);

  // console.log("verticalIconArray-above",verticalIconArray);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const pushItem = (icon, index) => {
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

  return <>
              <Col className="col-12 col-sm-7 border">
                <Bar/>
                <Row >
                 
                  <h2 className="mb-0 mt-0 p-3">Remitter Resend OTP</h2>
                  <p className="px-4  mb-5">
                  For any kind of reasons if the remitter send otp to get failed or the remitter not verified using the OTP,
                   This endpoint using for resend the OTP
                  </p>
                  <div className="m">
                  <Table striped bordered hover responsive>
      <thead >
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
          <td>0</td>
          <td>Remitter already exist</td>
        </tr>
        <tr>
          <td>2</td>
          <td>404</td>
          <td>105</td>
          <td>Enter a valid name</td>
        </tr>
        <tr>
          <td>3</td>
          <td>404</td>
          <td>102</td>
          <td>Invalid mobile  number</td>
        </tr>
     
      </tbody>
    </Table>
    </div>

      <h3 className=" p-3 link-font-size">URL:</h3>
              <code className=" pt-5 pb-5 url-link">
              http://194.195.113.218:8090/paymento/remitter-reg/resend-otp

                  </code>
                  <h3 className=" p-3 link-font-size">Method:</h3>
                  <p className="">POST</p>

                  <h3 className=" p-3 link-font-size">Header:</h3>
                   <p className="output " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                 <code className="code-yellow"> "abs1nxxxxx"</code><br/>
                  </p>

                  <h3 className=" p-3 link-font-size">Request:</h3>
                   <p className="output" ><br/> <code>"remitterPhone"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">"7902626443"</code><br/>
                 
                  </p>

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-5 link-heading scrollbar pt-5">
              {toggleState === 0 && <JavaResendOtp />}
              {toggleState === 1 && <PythonResendOtp />}
              {toggleState === 2 && <ShellResendOtp />}
              {toggleState === 3 && <PHPResendOtp />}

              <div className="lang-btns d-flex justify-content-evenly">
          {horizontalIconArray.map((iconName, index) => {
            return (
              <button
                style={{
                  outline: "none",
                  border: "none",
                  background: "transparent",
                }}
                id={iconName.icon}
                key={index}
                onClick={() => toggleTab(index)}
              >
                <img src={iconName.icon} height="20" width="20" />
              </button>
            );
          })}

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              {verticalIconArray.map(({ icon, text }, index) => {
                // console.log(verticalIconArray, "view");
                return (
                  <Dropdown.Item
                    onClick={() => pushItem({ icon, text }, index)}
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


              <div class="force-overflow"></div>
                {/* <Row className="link-heading">
                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading p-3">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"201"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-yellow">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"OTP send successfully"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>
                    <br/> <code>"data" </code>
                    <p className="output-two link-heading text-white">
                       <br/><code>"remitterId"</code> <span>: </span> <code className="code-cyan">16</code>
                       <br/><code>"otpRefferenceId"</code> <span>: </span> <code className="code-yellow">"FLf0YdvZqx6lA9eg"</code>
                       <br/><code>"mobile"</code> <span>: </span> <code className="code-cyan">"9895924936"</code>
                       <br/><code>"name"</code> <span>: </span> <code className="code-yellow">"dil"</code>
                       <br/><code>"userId"</code> <span>: </span> <code className="code-cyan">3</code>
                       <br/><code>"remitterType"</code> <span>: </span> <code className="code-cyan">3</code><br/>
                      
                    </p>
                   </p>
                </Row> */}
              </Col>
           

              {/* Remitter Resend otp ends...*/}

      

  </>;
};

export default ResendOtpPage;
