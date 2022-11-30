import React,{useState} from "react";
import { Col, Container, Row,Dropdown, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import shell from "../../../../asset/images/shell.jpg";
import Go from '../../../../asset/images/Go.png';
import java from '../../../../asset/images/java.png';
import python from '../../../../asset/images/python.png';
import php from '../../../../asset/images/php.png';
import node from '../../../../asset/images/node.png';
import powershell from '../../../../asset/images/powershell.svg';
import csharp from '../../../../asset/images/csharp.png';
import http from '../../../../asset/images/http.png';
import js from '../../../../asset/images/js.png';
import kotlin from '../../../../asset/images/kotlin.jpeg';
import ruby from '../../../../asset/images/ruby.png';
import objectiveC from '../../../../asset/images/objectiveC.png';
import C from '../../../../asset/images/C.png';
import CPlusPlus from '../../../../asset/images/CPlusPlus.png';
import swift from '../../../../asset/images/swift.jpeg';

import { DeleteBeneficiaryCode, PHPDeleteBeneficiary, PythonDeleteBeneficiary, ShellDeleteBeneficiary } from "../ResponseBeneficiary/DeleteBeneficiaryCode";
const BeneficiaryDeletePage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return <>



    {/* Beneficiary delete page starts... */}

    <Col className="col-12 col-sm-7">
      <Row >
        <h2 className="mb-0 mt-0 p-3">Delete Beneficiary</h2>
        <p className="px-4  mb-5">
          Use this API to remove an existing beneficiary from a list of added beneficiaries.
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
                <td>400</td>
                <td>0</td>
                <td>Beneficiary not found</td>
              </tr>


            </tbody>
          </Table>
        </div>

        <h3 className="  link-font-size">URL:</h3>
        <code className=" pt-5 pb-5 url-link ">
          http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary
        </code>
        <h3 className="p-3  link-font-size">Method:</h3>
        <p className="p-3">POST</p>

        <h3 className="p-3  link-font-size">Header:</h3>
        <p className="output " ><br /> <code>"apiKey"</code>
          <span>
            :
          </span>
          <code className="code-yellow">"abs1nxxxxx"</code><br />
        </p>

        <h3 className=" p-3  link-font-size">Request:</h3>
        <p className="output " ><br /> <code>"remitterPhone"</code>
          <span>
            :
          </span>
          <code className="code-cyan"> "7902626443"</code><br />

        </p>


      </Row>


    </Col>
    <Col id="style-1" className="col-12 col-sm-5 zindex link-heading scrollbar pt-5" >


    {toggleState === 1 && <DeleteBeneficiaryCode />}
      {toggleState === 2 && <PythonDeleteBeneficiary />}
      {toggleState === 3 && <ShellDeleteBeneficiary />}
      {toggleState === 4 && <PHPDeleteBeneficiary />}
      {toggleState === 5 && <PHPDeleteBeneficiary />}
      {toggleState === 6 && <PHPDeleteBeneficiary />}
      {toggleState === 7 && <PHPDeleteBeneficiary />}
      {toggleState === 8 && <PHPDeleteBeneficiary />}
      {toggleState === 9 && <PHPDeleteBeneficiary />}
      {toggleState === 10 && <PHPDeleteBeneficiary />}
      {toggleState === 11 && <PHPDeleteBeneficiary />}
      {toggleState === 12 && <PHPDeleteBeneficiary />}

      <div className="lang-btns d-flex justify-content-evenly">
        <button style={{ outline: "none", border: "none", background: "transparent" }} id="java" onClick={() => toggleTab(1)}><img src={java} height="20" width="20" /></button>
        <button style={{ outline: "none", border: "none", background: "transparent" }} id="python" onClick={() => toggleTab(2)}><img src={python} height="20" width="20" /></button>
        <button style={{ outline: "none", border: "none", background: "transparent" }} id="shell" onClick={() => toggleTab(3)}><img src={shell} height="20" width="20" /></button>
        <button style={{ outline: "none", border: "none", background: "transparent" }} id="" onClick={() => toggleTab(4)}><img src={php} height="20" width="20" /></button>
        <button style={{ outline: "none", border: "none", background: "transparent" }} id="" onClick={() => toggleTab(5)}><img src={Go} height="20" width="20" /></button>
        {/* <button style={{outline:"none",border:"none",background:"transparent"}} id="php" onClick={() =>setDropdown(!dropdown)}>
         </svg></button> */}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"><img src={node} height="20" width="20" />  <span style={{ fontSize: "13px" }}>Node js</span></Dropdown.Item>
            <Dropdown.Item href="#/action-2"><img src={powershell} height="20" width="20" />   <span style={{ fontSize: "13px" }}>Powershell</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={csharp} height="20" width="20" />  <span style={{ fontSize: "13px" }}> Csharp</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={http} height="20" width="20" />  <span style={{ fontSize: "13px" }}> HTTP</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={js} height="20" width="20" />  <span style={{ fontSize: "13px" }}> Javascript</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={kotlin} height="20" width="20" />  <span style={{ fontSize: "13px" }}> Kotlin</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={ruby} height="20" width="20" />  <span style={{ fontSize: "13px" }}> Ruby</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={objectiveC} height="20" width="20" />  <span style={{ fontSize: "13px" }}> Objective C</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={C} height="20" width="20" />  <span style={{ fontSize: "13px" }}>  C</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={CPlusPlus} height="20" width="20" />  <span style={{ fontSize: "13px" }}>  C++</span></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><img src={swift} height="20" width="20" />  <span style={{ fontSize: "13px" }}>  Swift</span></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </Col>

    {/* Beneficiary delete page  ends...*/}




  </>;
};

export default BeneficiaryDeletePage;
