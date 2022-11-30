import React,{useState} from "react";
import { Col, Container, NavLink,Dropdown, Row, Table } from "react-bootstrap";
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


function RemitterInfoPage() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      {/* Remitter Information */}

      <Col className="col-12 col-sm-6">


        <Row>
          <h1 className="heading">Remitter</h1>
          <p>
            With these APIs we can check the Remitter mobile number is already
            registered with our database, if yes then the response system will
            provide remitter details. If the remitter mobile number is not
            queried before, then system will hit an OTP on the remitter mobile
            number to initiate the registration process
          </p>

          <h2 className="mb-0 mt-0 ">Remitter Information</h2>
          <p className="px-4  mb-5 ">
            WUsing this API You can use this API to check if the
            customer has been created on our platform. If not, you must
            create the customer before using Eko related services (like
            Money Transfer) for him/her.
          </p>
          <div className="m">
            <Table striped bordered hover responsive>
              <thead >
                <tr>
                  <th  >Sl.no</th>
                  <th >HTTP Response Code</th>
                  <th >Response Code</th>
                  <th >Message</th>
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
              <h3 className="mt-3 link-font-size">URL:</h3>
              <code className="pb-5 url-link">
                http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
              </code>


              <h3 className="m-0 link-font-size">Request:</h3>
              <p className="output    m-0" ><br /> <code>"remitterPhone"</code>
                <span>
                  :
                </span>
                "7902900295"<br />
              </p>


              <h3 className="m-0 link-font-size">Header:</h3>
              <p className="output " ><br /> <code>"apiKey"</code>
                <span>
                  :
                </span>
                <code className="code-yellow "> "abs1nxxxxx"</code><br />
              </p>
            </Row>
          </div>


        </Row>

      </Col>

      <Col id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar " >

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


      {/* Remitter Information  ends...*/}




    </>
  );
}

export default RemitterInfoPage;
