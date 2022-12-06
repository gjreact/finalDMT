import React, { useState } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import "../../../../asset/css/basiclayout.css";
import shell from "../../../../asset/images/shell.jpg";
import CPlus from "../../../../asset/images/Cplus.png";
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
  ListBeneficiaryCode,
  PHPListBeneficiary,
  PythonListBeneficiary,
  ShellListBeneficiary,
} from "../RequestBeneficiary/ListBeneficiaryCode";
import { CreateBeneficiaryCode } from "../RequestBeneficiary/CreateBeneficiaryCode";
import Bar from "../../../Bar";

const BeneficiaryListPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      {/* Beneficiary create page starts... */}

      <Col className="col-12 col-sm-7 border">
        <Bar />
        <Row>
          <h2 className="mb-0 ">List Beneficiary</h2>
          <p className="px-4 mb-5 content-bg">Get list of recipients for a Remitter</p>
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
      <Col id="style-1" className="col-12 col-sm-5 link-heading scrollbar pt-5">
        {toggleState === 1 && <ListBeneficiaryCode />}
        {toggleState === 2 && <PythonListBeneficiary />}
        {toggleState === 3 && <ShellListBeneficiary />}
        {toggleState === 4 && <PHPListBeneficiary />}
        {toggleState === 5 && <PHPListBeneficiary />}
        {toggleState === 6 && <PHPListBeneficiary />}
        {toggleState === 7 && <PHPListBeneficiary />}
        {toggleState === 8 && <PHPListBeneficiary />}
        {toggleState === 9 && <PHPListBeneficiary />}
        {toggleState === 10 && <PHPListBeneficiary />}
        {toggleState === 11 && <PHPListBeneficiary />}
        {toggleState === 12 && <PHPListBeneficiary />}

        {/* <Tabs defaultActiveKey="java">
        <Tab eventKey="java" title={java} className="text-white" >
          <ListBeneficiaryCode/>
        </Tab>
        
        <Tab eventKey="python" title={<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/></svg>} className="text-white">
         <PythonListBeneficiary/>
        </Tab>

        <Tab eventKey="shell" title={<img src={shell} height="30px" width="25px"></img>} className="text-white" >
          <ShellListBeneficiary/>
        </Tab>

        <Tab eventKey="PHP" title={<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 80" width="30px" height="30px"><path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"/><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"/><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"/><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"/></g></svg>} >
         <PHPListBeneficiary/>
        </Tab>
        
        <Tab eventKey="CPlus"  title={<img src={CPlus} height="30px" width="25px"></img>} ></Tab>
        <Tab eventKey="Go"  title={<img src={Go} height="30px" width="25px"></img>} ></Tab>
       

       
         

         
      </Tabs> */}

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
          {/* <button style={{outline:"none",border:"none",background:"transparent"}} id="php" onClick={() =>setDropdown(!dropdown)}>
         </svg></button> */}
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

        <Row className="link-heading"></Row>
      </Col>

      {/* Beneficiary create page  ends...*/}
    </>
  );
};

export default BeneficiaryListPage;
