import React from "react";
import { Col, Container, NavLink, Row, Table } from "react-bootstrap";
import { CreateBeneficiaryCode,PythonBeneficiary } from "../../Beneficiary/ResponseBeneficiary/CreateBeneficiaryCode";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
 export const RemitterInfoCode = () => {
  return <>
         <Row className="link-heading response-margin mt-5"  style={{maxHeight:"100vh"}}>

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
  </>;
};



export const  Python= () => {
  return  <Row className="link-heading response-margin"  style={{maxHeight:"100vh"}}>
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
  </Row>;
};


