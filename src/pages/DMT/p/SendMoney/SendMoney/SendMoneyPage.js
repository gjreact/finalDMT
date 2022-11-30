import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
import Bar from "../../../Bar";
const SendMoneyPage = () => {
  return <>

              {/* Beneficiary create page starts... */}

              <Col className="col-12 col-sm-6">
                <Row >
              
                  <h2 className="mb-0 mt-0 p-3">Send Money</h2>
                  <p className="px-4  mb-5">
                  When you are in an UAT Environment try this account numbers for success , processing and failure response
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
          <td>114</td>
          <td>Invalid amount please enter a valid amount (100 to 5000)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>404</td>
          <td>117</td>
          <td>Beneficiary Not found</td>
        </tr>
        <tr>
          <td>3</td>
          <td>400</td>
          <td>106</td>
          <td>Remitter does not exist</td>
        </tr>
     
      </tbody>
    </Table>
    </div>

    <h3 className="p-3 link-font-size ">URL:</h3>
              <code className=" pt-5 pb-5 url-link">
              http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money</code>


                  <h3 className=" p-3 link-font-size">Request:</h3>
                   <p className="output " >
                    
                   <br/> <code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">36</code>
                    <br/> <code>"remitterId"</code> <span>: </span> <code className="code-cyan">26</code>
                    <br/> <code>"Amount"</code> <span>: </span> <code className="code-yellow">200</code><br />
                  
                 
                  </p>


                  <h3 className=" p-3 link-font-size">Header:</h3>
                   <p className="output" ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                 <code className="code-yellow"> "abs1nxxxxx"</code><br/>
                  </p>


                </Row>
        
              </Col>
              
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar pt-2">
          
                <Row className="link-heading">
                 


                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading">Success Response : </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"Sendmoney Success"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">1</code>
                    <br/> <code>"data"</code> 
                    <p className="output-two link-heading text-white">
                       <br/><code>"statusCode"</code> <span>: </span> <code className="code-yellow">0</code>
                       <br/><code>"transactionId"</code> <span>: </span> <code className="code-yellow">"I22313011897"</code>
                       <br/><code>"amount"</code> <span>: </span> <code className="code-yellow">200.0</code>
                       <br/><code>"utrNumber"</code> <span>: </span> <code className="code-yellow">"927019161118"</code><br/>
                       
                    </p>
                   
                   </p>
                  <h5 className="text-white link-heading p-3">Send money failed response: </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"400"</code>
                    <br/> <code>"success"</code> <span>: </span><code className="code-cyan"> "false"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"Sendmoney Failed"</code>
                    <br/> <code>"responseCode"</code> <span>: </span><code className="code-cyan"> 0</code>
                    <br/> <code>"data"</code> 
                    <p className="output-two link-heading text-white">
                       <br/><code>"statusCode"</code> <span>: </span> <code className="code-yellow">0</code>
                       <br/><code>"transactionId"</code> <span>: </span> <code className="code-yellow">"I22313011919"</code>
                       <br/><code>"amount"</code> <span>: </span> <code className="code-yellow">200.0</code>
                       <br/><code>"utrNumber" </code><span>: </span> <code className="code-yellow">"927019161118"</code>
                       
                    </p>

                   
                   </p>
                  <h5 className="text-white link-heading p-3">Send money processing response: </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"201"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"Sendmoney processing"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">2</code>
                    <br/> <code>"data"</code> 
                    <p className="output-two link-heading text-white">
                       <br/><code>"statusCode"</code> <span>: </span> <code className="code-cyan">0</code>
                       <br/><code>"transactionId"</code> <span>: </span> <code className="code-cyan">"I22313011920"</code>
                       <br/><code>"amount"</code> <span>: </span> <code className="code-cyan">200.0</code>
                       <br/><code>"utrNumber"</code> <span>: </span> <code className="code-cyan">"927019161118"</code><br/>
                       
                    </p>
                   
                   </p>
                </Row>
              </Col>


              {/* Beneficiary create page  ends...*/}

      
  </>;
};

export default SendMoneyPage;
