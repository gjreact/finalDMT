import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function RemitterInfoPage() {
  return (
    <>
        <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row>
                 
                  <h2 className="mb-0 mt-0 ">a.Remitter Information</h2>
                  <p className="px-4  mb-5 mr-0 ml-0">
                    WUsing this API You can use this API to check if the
                    customer has been created on our platform. If not, you must
                    create the customer before using Eko related services (like
                    Money Transfer) for him/her.
                  </p>
                <div className="m">
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
          <td>501</td>
          <td>Remitter Doesn't exist</td>
        </tr>
     
      </tbody>
    </Table>
    </div>

             
                </Row>
        
              </Col>
              
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
                    http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
                  </code>
                 

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/> <code>"remitterPhone"</code>
                  <span>
                    :
                  </span>
                  "7902900295"<br/>
                  </p>


                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                 <code className="code-yellow"> "abs1nxxxxx"</code><br/>
                  </p>


                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading">If Remitter Exist : </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>,
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>,
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"Remitter Exists"</code>,
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>,
                    <br/> <code>"data"</code> 
                    <p className="output-two link-heading text-white">
                       <br/><code>"remitterPhone"</code> <span>: </span> <code className="code-cyan">"7902900295"</code>,
                       <br/><code>"remitterName"</code> <span>: </span> <code className="code-yellow">"dilsha"</code>,
                       <br/><code>"remitterAddress" </code><span>: </span> <code className="code-yellow">"veluthedath"</code>,
                       <br/><code>"remitterPinCode"</code> <span>: </span> <code className="code-cyan">"528963"</code>,
                       <br/><code>"remitterCity"</code> <span>: </span> <code className="code-yellow">"calicut"</code>,
                       <br/><code>"remitterState"</code> <span>: </span> <code className="code-yellow">"kerala"</code>,
                       <br/><code>"remitterStatus"</code> <span>: </span> <code className="code-yellow">"Active"</code>,
                       <br/><code>"userId"</code> <span>: </span> <code className="code-cyan">"3"</code>,
                       <br/><code>"userName"</code> <span>: </span> <code className="code-yellow">"qwert G"</code>,
                       <br/><code>"totalBalance"</code> <span>: </span> <code className="code-cyan">"9"</code>,
                       <br/><code>"id"</code> <span>: </span> <code className="code-cyan">"25000.0"</code><br/>
                    
                    </p>
                   
                   </p>
                </Row>
              </Col>
    </>
  );
}

export default RemitterInfoPage;
