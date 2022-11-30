import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import '../../../../asset/css/basiclayout.css'
import SideMenu from "../../../../pages/SideBar/SideMenu";
import logo from "../../../../asset/images/logo.png";
import Bar from "../../../Bar";
const RemitterBalancePage = () => {
    return <>

              {/* Remitter balance page starts... */}

              
              <Col className="col-12 col-sm-6" >
            <Row >
                <h2 className="mb-0 mt-0 p-3">Get Remitter Balance</h2>
                <p className="px-4  mb-5">
                    This Api is used to fetch the balance of the registered remitter number".
                </p>
                <div className="m sm-size">
                    <Table striped bordered hover responsive id="style-2">
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
                                <td>Remitter Doesn’t exist</td>
                            </tr>



                        </tbody>

                    </Table>
                </div>
                <h3 className=" link-font-size">URL:</h3>
                <code className=" pt-5 pb-5 url-link">
                    http://194.195.113.218:8090/paymento/remitter-reg/check-balance
                </code>
                <h3 className=" p-3 link-font-size">Method:</h3>
                <p className=" p-3">POST</p>

                <h3 className=" p-3 link-font-size">Header:</h3>
                <p className="output " ><br /> <code>"apiKey"</code>
                    <span>
                        :
                    </span>
                    <code className="code-yellow">"abs1nxxxxx"</code><br />
                </p>

                <h3 className="p-3 link-font-size">Request:</h3>
                <p className="output" ><br />
                    <code> "remitterphone"</code> <span>: </span> <code className="code-cyan">"7902626443"</code>   <br />





                </p>






            </Row>

        </Col>
        <Col id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar codeBorderoutset pt-5" style={{ maxHeight: "63rem" }}>
            <div class="force-overflow"></div>
            <Row className="link-heading">
               




                <h3 className="text-white link-section p-3">Response:</h3>
                <h5 className="text-white link-heading p-3">SUCCESS </h5>
                <p className="output link-heading text-white " >
                    <br /> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>
                    <br /> <code>"success" </code><span>: </span> <code className="code-cyan">"true"</code>
                    <br /> <code>"message"</code> <span>: </span> <code className="code-yellow">"Remitter Balance"</code>
                    <br /> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>
                    <br /> <code>"data" </code>
                    <p className="output-two link-heading text-white">
                        <br /><code>"remitterId"</code> <span>: </span> <code className="code-cyan">29</code>
                        <br /><code>"remitterName"</code> <span>: </span> <code className="code-yellow">"dil"</code>
                        <br /><code>"mobileNumber"</code> <span>: </span> <code className="code-cyan">"7902626443"</code>
                        <br /><code>"availableBalance" </code><span>: </span> <code className="code-cyan">25000.0</code>
                        <br /><code>"totalBalance" </code><span>: </span> <code className="code-cyan">25000.0</code><br />



                    </p>
                </p>


            </Row>
        </Col>
           

              {/* Remitter balance page  ends...*/}

      

    </>;
};

export default RemitterBalancePage;
