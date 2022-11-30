import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
import Bar from "../../../Bar";

const SendOtpPage = () => {
  return (


<>

              {/* Remitter Information */}

              <Col className="col-12 col-sm-6">
                <Row >
                  <h2 className="mb-0 mt-0">Remitter Send OTP</h2>
                   <p className="px-4  mb-5">
                     As mentioned in Remitter Information API, if a remitter is not found registered in the system, then by this API remitter can register themselves, by filling below details with OTP.
                     Using this otp Can verify the remitter
                   </p>
                   <div className="m table-responsive">
                     <Table striped bordered hover responsive id="style-1" className="scrollbar">
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
                     http://194.195.113.218:8090/paymento/remitter-reg/send-otp
                   </code>
                   <h3 className="link-font-size">Method:</h3>
                   <p className=" p-3">POST</p>
                   <h3 className=" p-3 link-font-size">Header:</h3>
                   <p className="output " ><br /> <code>"apiKey"</code>
                     <span>
                       :
                     </span>
                     <code className="code-yellow">"abs1nxxxxx"</code><br />
                   </p>
                   <h3 className=" p-3 link-font-size">Request:</h3>
                   <p className="output  " ><br /> <code>"remitterPhone"</code>
                     <span>
                       :
                     </span>
                     <code className="code-cyan">"7902900295"</code><br />
                     <code>"remitterName"</code><span>:</span><code className="code-yellow">"anu"</code>
                     <br />
                   </p>
                 </Row>
               </Col>
               <Col id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar pt-5" >
                 <Row className="link-heading">
                  

                   <h3 className="text-white link-section p-3">Response:</h3>
                   <h5 className="text-white link-heading p-3">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                     <br /> <code>"status" </code><span>: </span> <code className="code-cyan">"201"</code>
                     <br /> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                     <br /> <code>"message"</code> <span>: </span> <code>"OTP send successfully"</code>
                     <br /> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>
                     <br /> <code>"data"</code>
                     <p className="output-two link-heading text-white">
                       <br /><code>"remitterId"</code> <span>: </span> <code className="code-cyan">15</code>
                       <br /><code>"otpRefferenceId"</code> <span>: </span> <code className="code-yellow">"2NEBGNVgCJ92agZg"</code>
                       <br /><code>"mobile"</code> <span>: </span> <code className="code-cyan">"7902666443"</code>
                       <br /><code>"name"</code> <span>: </span> <code className="code-yellow">"Anju"</code>
                       <br /><code>"userId"</code> <span>: </span> <code className="code-cyan">3</code>
                       <br /><code>"remitterType"</code> <span>: </span> <code className="code-cyan">3</code><br />
                     </p>
                  </p>
                  <h5 className="text-white link-heading p-3 ">UNKNOWN RESPONSE </h5>
                   <p className="output link-heading text-white " >
                     <br /> <code>"status"</code> <span>: </span><code className="code-cyan">"404"</code>
                     <br /> <code>"success"</code> <span>: </span><code className="code-cyan">"false"</code>
                     <br /> <code>"message"</code> <span>: </span><code className="code-yellow">" "</code>
                     <br /> <code>"responseCode"</code> <span>: </span><code className="code-yellow">" "</code><br />
                   </p>
                 </Row>
               </Col>
              {/* Remitter Information  ends...*/}

      </>
    )
};

export default SendOtpPage;
