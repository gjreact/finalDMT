import logo from "../asset/images/logo.png";
// import Table from 'react-bootstrap/Table';
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "../asset/css/basiclayout.css";
import SideMenu from "../pages/SideBar/SideMenu";
import '../theme/theme.css';
// import RemitterPage from "../pages/DMT/Remitter/RemitterPage";
import "../asset/css/heading.css";
import RemitterInfoPage from "../pages/DMT/Remitter/RemitterInfo/RemitterInfoPage";
import Bar from "../pages/Bar";

function BasicLayout() {
  return (
    <>
      <Container fluid className="margin-0 containerr">
        <Row className="Roww">
          <Col className="d-none d-md-block sideMenuColor col-2">
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="align-center"
                style={{ width: "100%", maxWidth: "150px" }}
                src={logo}
                alt="Paymento_Logo"
              />
            </div>
            <hr />
            <div>
              <SideMenu />
            </div>
            <hr />
            <h6>Documentation Powered by Paymento</h6>
          </Col>

          <Col className="xs-12 md-10 bg-white overflow-scroll ">
            <Row className="Roww1">
              <Col className="dark-box d-none d-sm-block ">darkboxxxx</Col>
   
              <Col className="col-12 col-sm-6" >
                <Row>
                

            <Bar/>
                  <h1 className="heading mb-0">1.Remitter</h1>
                  <p className="px-4  mb-0">
                    With these APIs we can check the Remitter mobile number is
                    already registered with our database, if yes then the
                    response system will provide remitter details. If the
                    remitter mobile number is not queried before, then system
                    will hit an OTP on the remitter mobile number to initiate
                    the registration process
                  </p>
                  
                </Row>
              </Col>
              <Col className="col-12 col-sm-6  zindex dark-box-color"></Col>


             {/* Remitter Information */}

             
           <RemitterInfoPage/>

               {/* Remitter send OTP */}

          

              <Col className="col-12 col-sm-6  " style={{maxHeight:"700px"}}>
                <Row >
                 
                  <h2 className="mb-0 mt-0">Remitter Send OTP</h2>
                  <p className="px-4  mb-5">
                  As mentioned in Remitter Information API, if a remitter is not found registered in the system, then by this API remitter can register themselves, by filling below details with OTP.
                  Using this otp Can verify the remitter
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
             
                </Row>

        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar pt-5" style={{maxHeight:"700px"}}>
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/send-otp

                  </code>
                  <h3 className="text-white">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">"abs1nxxxxx"</code><br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/> <code>"remitterPhone"</code>
                  <span>
                    :
                  </span>
                  <code className="code-cyan">"7902900295"</code><br/>
                  <code>"remitterName"</code><span>:</span><code className="code-yellow">"anu"</code>
 <br/>
                  </p>


                 


                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading p-3">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status" </code><span>: </span> <code className="code-cyan">"201"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code>"OTP send successfully"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>
                    <br/> <code>"data"</code> 
                    <p className="output-two link-heading text-white">
                       <br/><code>"remitterId"</code> <span>: </span> <code className="code-cyan">15</code>
                       <br/><code>"otpRefferenceId"</code> <span>: </span> <code className="code-yellow">"2NEBGNVgCJ92agZg"</code>
                       <br/><code>"mobile"</code> <span>: </span> <code className="code-cyan">"7902666443"</code>
                       <br/><code>"name"</code> <span>: </span> <code className="code-yellow">"Anju"</code>
                       <br/><code>"userId"</code> <span>: </span> <code className="code-cyan">3</code>
                       <br/><code>"remitterType"</code> <span>: </span> <code className="code-cyan">3</code><br/>
                      
                    
                    </p>
                   
                   </p>

                   <h5 className="text-white link-heading p-3 ">UNKNOWN RESPONSE </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span><code className="code-cyan">"404"</code>
                    <br/> <code>"success"</code> <span>: </span><code className="code-cyan">"false"</code>
                    <br/> <code>"message"</code> <span>: </span><code className="code-yellow">" "</code>
                    <br/> <code>"responseCode"</code> <span>: </span><code className="code-yellow">" "</code><br/>
                    </p>
                </Row>
              </Col>


              {/* Remitter Resend OTP */}
              <Col className="col-12 col-sm-6 pt-5" style={{maxHeight:"700px"}}>
                <Row >
                 
                  <h2 className="mb-0 mt-0 p-3">Remitter Resend OTP</h2>
                  <p className="px-4  mb-5">
                  For any kind of reasons if the remitter send otp to get failed or the remitter not verified using the OTP,
                   This endpoint using for resend the OTP
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

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar pt-5" style={{maxHeight:"700px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/resend-otp

                  </code>
                  <h3 className="text-white link-heading p-3">Method:</h3>
                  <p className="link-heading text-white">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                 <code className="code-yellow"> "abs1nxxxxx"</code><br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/> <code>"remitterPhone"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">"7902626443"</code><br/>
                 
                  </p>


                 


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

              {/* Remitter Resend OTP ends... */}


              {/* Verify Remitter OTP */}
              <Col className="col-12 col-sm-6 " style={{maxHeight:"500px"}}>
                <Row >
                
                  <h2 className="mb-0 mt-0 p-3">Verify Remitter OTP</h2>
                  <p className="px-4  mb-5">
                  As mentioned in  Remitter information, if a remitter is not found registered in the system,
                   then by this API remitter can register themselves, by filling below details with OTP and ReferenceID received from " Remitter send OTP".
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

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
                  </code>
                  <h3 className="text-white p-3">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>
 
                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  "abs1nxxxxx"<br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/>
                    <code>"otp"</code>  <span>: </span><code className="code-cyan"> "017111" </code>  <br />
                    <code>"otpRefferenceId"</code>  <span>: </span> <code className="code-yellow">"URMDiiD2UQkIkkQy" </code>  <br />
                    <code>"mobile"</code>  <span>: </span> <code className="code-cyan">"7902626443"   </code> <br />
                    <code>"remitterType"</code>  <span>: </span> <code className="code-cyan">3 </code> <br/>
                    
                 
              
                 
                  </p>


                 


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
             
       {/* Verify Remitter OTP ends.. */}
      
      
      {/* Get Remitter Balance */}
      <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row >
                   <h2 className="mb-0 mt-0 p-3">Get Remitter Balance</h2>
                  <p className="px-4  mb-5">
                  This Api is used to fetch the balance of the registered remitter number".
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
          <td>Remitter Doesn’t exist</td>
        </tr>
     
        
     
      </tbody>
      
    </Table>
    </div>

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/check-balance
                  </code>
                  <h3 className="text-white p-3">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">"abs1nxxxxx"</code><br/>
                  </p>

                  <h3 className="text-white link-section p-3 ">Request:</h3>
                   <p className="output  text-white link-heading" ><br/>
                   <code> "remitterphone"</code> <span>: </span> <code className="code-cyan">"7902626443"</code>   <br/>
                   
                    
                 
              
                 
                  </p>


                 


                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading p-3">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>
                    <br/> <code>"success" </code><span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span> <code className="code-yellow">"Remitter Balance"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">"0"</code>
                    <br/> <code>"data" </code>
                    <p className="output-two link-heading text-white">
                       <br/><code>"remitterId"</code> <span>: </span> <code className="code-cyan">29</code>
                       <br/><code>"remitterName"</code> <span>: </span> <code className="code-yellow">"dil"</code>
                       <br/><code>"mobileNumber"</code> <span>: </span> <code className="code-cyan">"7902626443"</code>
                       <br/><code>"availableBalance" </code><span>: </span> <code className="code-cyan">25000.0</code>
                       <br/><code>"totalBalance" </code><span>: </span> <code className="code-cyan">25000.0</code><br/>
                 
                      
                    
                    </p>
                   </p>

                  
                </Row>
              </Col>




      {/* Get Remitter Balance ends... */}


      {/* Benficiary */}

      <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row >
                  
                  <h2 className="mb-0 mt-0 p-3">Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Beneficiary is the bank account who receives the funds remitted by the remitter mobile number.
             <br/>  <br/>
             A beneficiary is someone to whom one can transfer money or to be able to transfer money, the customer must add a beneficiary using the beneficiary's bank account details.
      By using our APIs, you can Create, Delete and Fetch beneficiaries for your customers.
                  </p>
                 
              
     

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              
              </Col>



              {/* Beneficiary ends... */}
               

               {/* Register Beneficiary */}

               <Col className="col-12 col-sm-6" style={{maxHeight:"700px"}}>
                <Row >
             
                  <h2 className="mb-0 mt-0 p-3">Register Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Beneficiary need to be registered in the system through the remitter's mobile number and  bank details. 
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
          <td>Beneficiary already exist</td>
        </tr>
        <tr>
          <td>2</td>
          <td>404</td>
          <td>4104</td>
          <td>Enter a valid name</td>
        </tr>
        <tr>
          <td>3</td>
          <td>404</td>
          <td>105</td>
          <td>Invalid bank code</td>
        </tr>
        <tr>
          <td>3</td>
          <td>404</td>
          <td>106</td>
          <td>Sender Does Not exist</td>
        </tr>
        <tr>
          <td>4</td>
          <td>404</td>
          <td>107</td>
          <td>Invalid Account number</td>
        </tr>
        <tr>
          <td>2</td>
          <td>404</td>
          <td>108</td>
          <td>Invalid bank IFSC</td>
        </tr>
        
     
      </tbody>
    </Table>
    </div>

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"800px"}}>
          
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary
                  </code>
                  <h3 className="text-white p-3">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  "abs1nxxxxx"<br/>
                  </p>

                  <h3 className="text-white link-section p-3 p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/>
                    <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br/> 
                    <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br/> 
                    <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> "7902900295,</code><br/>  
                    <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">790290029,</code><br/> 
                    <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">8865488888,</code><br/> 
                    <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br/>
                    <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br/>
                    <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br/>
                    <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br/>
                  </p>

                  <h3 className="text-white link-section p-3">Response:</h3>
                  <h5 className="text-white link-heading">If Remitter Exist :</h5>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"201"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message"</code> <span>: </span><code className="code-yellow"> "Beneficiary Saved successfully"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">1</code><br/>
                   </p>

                  
                </Row>
              </Col>


              {/* Register Beneficiary ends... */}
         
               {/* List Beneficiary */}

               <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row >
              
                  <h2 className="mb-0 mt-5 p-3">List Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Get list of recipients for a Remitter
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
          <td>0</td>
          <td>Not found</td>
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
              http://194.195.113.218:8090/paymento/remitter-reg/getbeneficiary                  </code>
                  <h3 className="text-white">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">abs1nxxxxx"</code>"<br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/>
                    <code>"remitterid"</code>  <span>: </span> <code className="code-yellow">""</code>   <br/>
                  </p>


                 


                  <h3 className="text-white link-section p-3">Response:</h3>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status" </code><span>: </span> <code className="code-cyan">"200"</code>
                    <br/> <code>"success" </code><span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message" </code><span>: </span> <code className="code-yellow">"Loaded Successfully"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">1</code>
                    <br/> <code>"data "</code><span>:</span> <p className="output-array link-heading">
                   
                    <p className="output-two link-heading text-white">
                       <br/><code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">6</code>
                       <br/><code>"beneficiaryName"</code> <span>: </span><code className="code-yellow"> "sample"</code>
                       <br/><code>"beneficiaryBankName"</code> <span>: </span><code className="code-yellow"> "Axis Bank"</code>
                       <br/><code>"remitterId"</code> <span>: </span> <code className="code-cyan">9</code>
                       <br/><code>"remitterName"</code> <span>: </span><code className="code-yellow"> "dilsha"</code>
                       <br/><code>"remitterMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
                       <br/><code>"beneficiaryMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
                       <br/><code>"accountNumber"</code> <span>: </span> <code className="code-cyan">"123456XXXXXXX"</code>
                       <br/><code>"ifscCode"</code> <span>: </span><code className="code-yellow"> "UTIB0002916"</code>
                       <br/><code>"accountHolderName"</code> <span>: </span><code className="code-yellow"> "Vishnu"</code>
                       <br/><code>"branchName"</code> <span>: </span><code className="code-yellow"> "Mavoor Road"</code><br/>
                    </p>
                   </p>
                   <p className="output link-heading text-white">
                   <br/><code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">11</code>
                       <br/><code>"beneficiaryName"</code><span>:</span><code className="code-yellow">"aaa"</code>
                       <br/><code>"beneficiaryBankName"</code> <span>: </span> <code className="code-yellow">"Axis Bank"</code>
                       <br/><code>"remitterId"</code> <span>: </span> <code className="code-cyan">9</code>
                       <br/><code>"remitterName"</code> <span>: </span> <code className="code-yellow">"dilsha"</code>
                       <br/><code>"remitterMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
                       <br/><code>"beneficiaryMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
                       <br/><code>"accountNumber"</code> <span>: </span> <code className="code-cyan">"8596321876XXX"</code>
                       <br/><code>"ifscCode"</code> <span>: </span> <code className="code-yellow">"UTIB0002916"</code>
                       <br/><code>"accountHolderName"</code> <span>: </span> <code className="code-yellow">"Vishnu"</code>
                       <br/><code>"branchName"</code> <span>: </span> <code className="code-yellow">"Mavoor Road"</code><br/>
                   </p> 
                   <p className="output-array-two text-white link-heading "></p>
                   </p>

                  
                </Row>
              </Col>



               {/* List Beneficiary ends... */}

               {/* Delete Beneficiary */}
               <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row >
               
                  <h2 className="mb-0 mt-0 p-3">Delete Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Use this API to remove an existing beneficiary from a list of added beneficiaries.
     </p>
     <div className="m">

     
                  <Table striped bordered hover  >
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

             
                </Row>

        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary
                  </code>
                  <h3 className="text-white p-3">Method:</h3>
                  <p className="link-heading text-white p-3">POST</p>

                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                  <code className="code-yellow">"abs1nxxxxx"</code><br/>
                  </p>

                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" ><br/> <code>"remitterPhone"</code>
                  <span>
                    :
                  </span>
                 <code className="code-cyan"> "7902626443"</code><br/>
                 
                  </p>


                 


                  <h3 className="text-white link-section p-3">Response:</h3>
                   <p className="output link-heading text-white " >
                    <br/> <code>"status"</code> <span>: </span> <code className="code-cyan">"200"</code>
                    <br/> <code>"success"</code> <span>: </span> <code className="code-cyan">"true"</code>
                    <br/> <code>"message" </code><span>: </span> <code className="">"Beneficiary Deleted"</code>
                    <br/> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">1</code><br/>
                   </p>

                  
                </Row>
              </Col>



               {/* Delete Beneficiary ends... */}
              
              {/* Send Money  */}

              <Col className="col-12 col-sm-6" style={{maxHeight:"700px"}}>
                <Row>
                

            
                  <h1 className="heading mb-0 p-3">Send Money</h1>
                  <p className="px-4  mb-0">
                  Initiate a Money Transfer transaction to a bank account via NEFT/IMPS
                  </p>
                  
                </Row>
              </Col>
              <Col className="col-12 col-sm-6  zindex dark-box-color" style={{maxHeight:"500px"}}></Col>


            

              <Col className="col-12 col-sm-6" style={{maxHeight:"500px"}}>
                <Row >
              
                  <h2 className="mb-0 mt-0 p-3">Send Money</h2>
                  <p className="px-4  mb-5">
                  When you are in an UAT Environment try this account numbers for success , processing and failure response
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


                </Row>
        
              </Col>
              
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"700px"}}>
          
                <Row className="link-heading">
                  <h3 className="text-white link-section p-3">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money   </code>


                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" >
                    
                   <br/> <code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">36</code>
                    <br/> <code>"remitterId"</code> <span>: </span> <code className="code-cyan">26</code>
                    <br/> <code>"Amount"</code> <span>: </span> <code className="code-yellow">200</code><br />
                  
                 
                  </p>


                  <h3 className="text-white link-section p-3">Header:</h3>
                   <p className="output link-heading text-white " ><br/> <code>"apiKey"</code>
                  <span>
                    :
                  </span>
                 <code className="code-yellow"> "abs1nxxxxx"</code><br/>
                  </p>


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
           
            
          
              {/* Send money ends... */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
