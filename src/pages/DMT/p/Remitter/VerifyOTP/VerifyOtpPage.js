import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
import Bar from "../../../Bar";
const VerifyOtpPage = () => {
  return <>

           


              {/* Remitter verify otp starts... */}

              <Col className="col-12 col-sm-6 " >
                <Row >
                
                  <h2 className="mb-0 mt-0 p-3">Verify Remitter OTP</h2>
                  <p className="px-4  mb-5">
                  As mentioned in  Remitter information, if a remitter is not found registered in the system,
                   then by this API remitter can register themselves, by filling below details with OTP and ReferenceID received from " Remitter send OTP".
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
              <code className="pt-5 pb-5 url-link">
              http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
                  </code>
                  <h3 className=" p-3 link-font-size">Method:</h3>
                  <p className=" p-3">POST</p>
 
                  <h3 className="p-3 link-font-size">Header:</h3>
                   <p className="output " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  "abs1nxxxxx"<br/>
                  </p>

                  <h3 className=" p-3 link-font-size">Request:</h3>
                   <p className="output" ><br/>
                    <code>"otp"</code>  <span>: </span><code className="code-cyan"> "017111" </code>  <br />
                    <code>"otpRefferenceId"</code>  <span>: </span> <code className="code-yellow">"URMDiiD2UQkIkkQy" </code>  <br />
                    <code>"mobile"</code>  <span>: </span> <code className="code-cyan">"7902626443"   </code> <br />
                    <code>"remitterType"</code>  <span>: </span> <code className="code-cyan">3 </code> <br/>
                    
                 
              
                 
                  </p>


                 


             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar codeBorderoutset" >
              <div class="force-overflow"></div>
                <Row className="link-heading">
              

                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading p-3">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"OTP verified"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code><br />
                    </p>
                  
                </Row>
              </Col>
           

              {/* Remitter verify otp  ends...*/}

      
          
  </>;
};

export default VerifyOtpPage;
