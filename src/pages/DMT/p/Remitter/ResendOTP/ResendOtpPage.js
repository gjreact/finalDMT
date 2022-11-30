import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
import Bar from "../../../Bar";
const ResendOtpPage = () => {
  return <>
              <Col className="col-12 col-sm-6">
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
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar pt-5">
              <div class="force-overflow"></div>
                <Row className="link-heading">
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

                  
                </Row>
              </Col>
           

              {/* Remitter Resend otp ends...*/}

      

  </>;
};

export default ResendOtpPage;
