import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const SendOtpPage = () => {
  return <div>
     <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Remitter Send OTP</h2>
                  <p className="px-4  mb-5">
                  As mentioned in Remitter Information API, if a remitter is not found registered in the system, then by this API remitter can register themselves, by filling below details with OTP.
                  Using this otp Can verify the remitter
                  </p>
                  </span>
                  <Table striped bordered hover >
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

             
                </Row>

        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section ">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/send-otp

                  </code>
                  <h3 className="text-white">Method:</h3>
                  <p className="link-heading text-white">POST</p>

                  <h3 className="text-white link-section">Header:</h3>
                   <p className="output link-heading text-white " ><br/> "apiKey"
                  <span>
                    :
                  </span>
                  "abs1nxxxxx"<br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/> "remitterPhone"
                  <span>
                    :
                  </span>
                  "7902900295"<br/>
                  "remitterName":"anu" <br/>
                  </p>


                 


                  <h3 className="text-white link-section ">Response:</h3>
                  <h5 className="text-white link-heading">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "201"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "OTP send successfully"<br/>
                    <br/> "responseCode" <span>: </span> "0"<br/>
                    <br/> "data" 
                    <p className="output-two link-heading text-white">
                       <br/>"remitterId" <span>: </span> 15<br/>
                       <br/>"otpRefferenceId" <span>: </span> "2NEBGNVgCJ92agZg"<br/>
                       <br/>"mobile" <span>: </span> "7902666443"<br/>
                       <br/>"name" <span>: </span> "Anju"<br/>
                       <br/>"userId" <span>: </span> 3<br/>
                       <br/>"remitterType" <span>: </span> 3<br/>
                      
                    
                    </p>
                   
                   </p>

                   <h5 className="text-white link-heading">UNKNOWN RESPONSE </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "404"<br/>
                    <br/> "success" <span>: </span> "false"<br/>
                    <br/> "message" <span>: </span> " "<br/>
                    <br/> "responseCode" <span>: </span> " "<br/>
                    </p>
                </Row>
              </Col>
  </div>;
};

export default SendOtpPage;
