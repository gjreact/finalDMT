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

              <Col className="col-12 col-sm-6">
                <Row>
                

            
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

          

              <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Remitter Send OTP</h2>
                  <p className="px-4  mb-0">
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


              {/* Remitter Resend OTP */}
              <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Remitter Resend OTP</h2>
                  <p className="px-4  mb-5">
                  For any kind of reasons if the remitter send otp to get failed or the remitter not verified using the OTP,
                   This endpoint using for resend the OTP
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
              http://194.195.113.218:8090/paymento/remitter-reg/resend-otp

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
                  "7902626443"<br/>
                 
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
                       <br/>"remitterId" <span>: </span> 16<br/>
                       <br/>"otpRefferenceId" <span>: </span> "FLf0YdvZqx6lA9eg"<br/>
                       <br/>"mobile" <span>: </span> "9895924936"<br/>
                       <br/>"name" <span>: </span> "dil"<br/>
                       <br/>"userId" <span>: </span> 3<br/>
                       <br/>"remitterType" <span>: </span> 3<br/>
                      
                    
                    </p>
                   
                   </p>

                  
                </Row>
              </Col>

              {/* Remitter Resend OTP ends... */}


              {/* Verify Remitter OTP */}
              <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Verify Remitter OTP</h2>
                  <p className="px-4  mb-5">
                  As mentioned in  Remitter information, if a remitter is not found registered in the system,
                   then by this API remitter can register themselves, by filling below details with OTP and ReferenceID received from " Remitter send OTP".
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

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section ">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
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
                   <p className="output  text-white link-heading" ><br/>
                    "otp"  <span>: </span> "017111"   <br/>
                    "otpRefferenceId"  <span>: </span> "URMDiiD2UQkIkkQy"   <br/>
                    "mobile"  <span>: </span> "7902626443"   <br/>
                    "remitterType"  <span>: </span> 3  <br/>
                    
                 
              
                 
                  </p>


                 


                  <h3 className="text-white link-section ">Response:</h3>
                  <h5 className="text-white link-heading">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "201"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "OTP verified"<br/>
                    <br/> "responseCode" <span>: </span> "0"<br/>
                   </p>

                  
                </Row>
              </Col>
             
       {/* Verify Remitter OTP ends.. */}
      
      
      {/* Get Remitter Balance */}
      <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Get Remitter Balance</h2>
                  <p className="px-4  mb-5">
                  This Api is used to fetch the balance of the registered remitter number".
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
          <td>501</td>
          <td>Remitter Doesn’t exist</td>
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
              http://194.195.113.218:8090/paymento/remitter-reg/check-balance
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
                   <p className="output  text-white link-heading" ><br/>
                    "remitterphone"  <span>: </span> "7902626443"   <br/>
                   
                    
                 
              
                 
                  </p>


                 


                  <h3 className="text-white link-section ">Response:</h3>
                  <h5 className="text-white link-heading">SUCCESS </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "200"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Remitter Balance"<br/>
                    <br/> "responseCode" <span>: </span> "0"<br/>
                    <br/> "data" 
                    <p className="output-two link-heading text-white">
                       <br/>"remitterId" <span>: </span> 29<br/>
                       <br/>"remitterName" <span>: </span> "dil"<br/>
                       <br/>"mobileNumber" <span>: </span> "7902626443"<br/>
                       <br/>"availableBalance" <span>: </span> 25000.0<br/>
                       <br/>"totalBalance" <span>: </span> 25000.0<br/>
                 
                      
                    
                    </p>
                   </p>

                  
                </Row>
              </Col>




      {/* Get Remitter Balance ends... */}


      {/* Benficiary */}

      <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Beneficiary is the bank account who receives the funds remitted by the remitter mobile number.
             <br/>  <br/>
             A beneficiary is someone to whom one can transfer money or to be able to transfer money, the customer must add a beneficiary using the beneficiary's bank account details.
      By using our APIs, you can Create, Delete and Fetch beneficiaries for your customers.
                  </p>
                 
                  </span>
     

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              
              </Col>



              {/* Beneficiary ends... */}
               

               {/* Register Beneficiary */}

               <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Register Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Beneficiary need to be registered in the system through the remitter's mobile number and  bank details. 
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
          <td>Invaid bank code</td>
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

             
                </Row>
        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section ">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary
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
                   <p className="output  text-white link-heading" ><br/>
                    "beneficiaryName"  <span>: </span> "anu"   <br/>
                    "beneficiaryBankId"  <span>: </span> 36   <br/>
                    "remitterMobileNumber"  <span>: </span> "7902900295"   <br/>
                    "beneficiaryMobileNumber"  <span>: </span> 7902900295  <br/>
                    "accountNumber"  <span>: </span> 88654888882  <br/>
                    "address"  <span>: </span> Calicut  <br/>
                    "ifscCode"  <span>: </span> UTIB0002916  <br/>
                    "accountHolderName"  <span>: </span> Venu  <br/>
                    "branchName"  <span>: </span> Mavoor Road  <br/>
                  </p>

                  <h3 className="text-white link-section ">Response:</h3>
                  <h5 className="text-white link-heading">If Remitter Exist :</h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "201"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Beneficiary Saved successfully"<br/>
                    <br/> "responseCode" <span>: </span> 1<br/>
                   </p>

                  
                </Row>
              </Col>


              {/* Register Beneficiary ends... */}
         
               {/* List Beneficiary */}

               <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">List Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Get list of recipients for a Remitter
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
          <td>Not found</td>
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
              http://194.195.113.218:8090/paymento/remitter-reg/getbeneficiary                  </code>
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
                   <p className="output  text-white link-heading" ><br/>
                    "remitterid"  <span>: </span> ""   <br/>
                  </p>


                 


                  <h3 className="text-white link-section ">Response:</h3>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "200"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Loaded Successfully"<br/>
                    <br/> "responseCode" <span>: </span> 1<br/>
                    <br/> "data "<span>:</span> <p className="output-array link-heading">
                   
                    <p className="output-two link-heading text-white">
                       <br/>"beneficiaryId" <span>: </span> 6<br/>
                       <br/>"beneficiaryName" <span>: </span> "sample"<br/>
                       <br/>"beneficiaryBankName" <span>: </span> "Axis Bank"<br/>
                       <br/>"remitterId" <span>: </span> 9<br/>
                       <br/>"remitterName" <span>: </span> "dilsha"<br/>
                       <br/>"remitterMobileNumber" <span>: </span> "7902900XXX"<br/>
                       <br/>"beneficiaryMobileNumber" <span>: </span> "7902900XXX"<br/>
                       <br/>"accountNumber" <span>: </span> "123456XXXXXXX"<br/>
                       <br/>"ifscCode" <span>: </span> "UTIB0002916"<br/>
                       <br/>"accountHolderName" <span>: </span> "Vishnu"<br/>
                       <br/>"branchName" <span>: </span> "Mavoor Road"<br/>
                    </p>
                   </p>
                   <p className="output link-heading text-white">
                   <br/><code>"beneficiaryId"</code> <span>: </span> 11<br/>
                       <br/><code>"beneficiaryName":"aaa"</code><br/>
                       <br/>"beneficiaryBankName" <span>: </span> "Axis Bank"<br/>
                       <br/>"remitterId" <span>: </span> 9<br/>
                       <br/>"remitterName" <span>: </span> "dilsha"<br/>
                       <br/>"remitterMobileNumber" <span>: </span> "7902900XXX"<br/>
                       <br/>"beneficiaryMobileNumber" <span>: </span> "7902900XXX"<br/>
                       <br/>"accountNumber" <span>: </span> "8596321876XXX"<br/>
                       <br/>"ifscCode" <span>: </span> "UTIB0002916"<br/>
                       <br/>"accountHolderName" <span>: </span> "Vishnu"<br/>
                       <br/>"branchName" <span>: </span> "Mavoor Road"<br/>
                   </p> 
                   <p className="output-array-two text-white link-heading "></p>
                   </p>

                  
                </Row>
              </Col>



               {/* List Beneficiary ends... */}

               {/* Delete Beneficiary */}
               <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Delete Beneficiary</h2>
                  <p className="px-4  mb-5">
                  Use this API to remove an existing beneficiary from a list of added beneficiaries.
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
          <td>400</td>
          <td>0</td>
          <td>Beneficiary not found</td>
        </tr>
      
     
      </tbody>
    </Table>

             
                </Row>

        
              </Col>
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
                <Row className="link-heading">
                  <h3 className="text-white link-section ">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary
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
                  "7902626443"<br/>
                 
                  </p>


                 


                  <h3 className="text-white link-section ">Response:</h3>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "200"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Beneficiary Deleted"<br/>
                    <br/> "responseCode" <span>: </span> 1<br/>
                   </p>

                  
                </Row>
              </Col>



               {/* Delete Beneficiary ends... */}
              
              {/* Send Money  */}

              <Col className="col-12 col-sm-6">
                <Row>
                

            
                  <h1 className="heading mb-0">Send Money</h1>
                  <p className="px-4  mb-0">
                  Initiate a Money Transfer transaction to a bank account via NEFT/IMPS
                  </p>
                  
                </Row>
              </Col>
              <Col className="col-12 col-sm-6  zindex dark-box-color"></Col>


            

              <Col className="col-12 col-sm-6">
                <Row >
                  <span className=" ">
                  <h2 className="mb-0 mt-0">Send Money</h2>
                  <p className="px-4  mb-5">
                  When you are in an UAT Environment try this account numbers for success , processing and failure response
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

             
                </Row>
        
              </Col>
              
              <Col  id="style-1" className="col-12 col-sm-6 zindex link-heading scrollbar" style={{maxHeight:"500px"}}>
              <div class="force-overflow"></div>
                <Row className="link-heading">
                  <h3 className="text-white link-section ">URL:</h3>
              <code className="text-white pt-5 pb-5 link-heading">
              http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money                  </code>


                  <h3 className="text-white link-section p-3">Request:</h3>
                   <p className="output  text-white link-heading" >
                    <br/> "beneficiaryId" <span>:</span> 36,<br/>
                    <br/> "remitterId" <span>:</span> 26,<br/>
                    <br/> "Amount" <span>:</span> 200<br/>
                    
                  
                 
                  </p>


                  <h3 className="text-white link-section">Header:</h3>
                   <p className="output link-heading text-white " ><br/> "apiKey"
                  <span>
                    :
                  </span>
                  "abs1nxxxxx"<br/>
                  </p>


                  <h3 className="text-white link-section ">Response:</h3>
                  <h5 className="text-white link-heading">Success Response : </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "200"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Sendmoney Success"<br/>
                    <br/> "responseCode" <span>: </span> 1<br/>
                    <br/> "data" 
                    <p className="output-two link-heading text-white">
                       <br/>"statusCode" <span>: </span> 0<br/>
                       <br/>"transactionId" <span>: </span> "I22313011897"<br/>
                       <br/>"amount" <span>: </span> 200.0<br/>
                       <br/>"utrNumber" <span>: </span> "927019161118"<br/>
                       
                    </p>
                   
                   </p>
                  <h5 className="text-white link-heading">Send money failed response: </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "400"<br/>
                    <br/> "success" <span>: </span> "false"<br/>
                    <br/> "message" <span>: </span> "Sendmoney Failed"<br/>
                    <br/> "responseCode" <span>: </span> 0<br/>
                    <br/> "data" 
                    <p className="output-two link-heading text-white">
                       <br/>"statusCode" <span>: </span> 0<br/>
                       <br/>"transactionId" <span>: </span> "I22313011919"<br/>
                       <br/>"amount" <span>: </span> 200.0<br/>
                       <br/>"utrNumber" <span>: </span> "927019161118"<br/>
                       
                    </p>
                   
                   </p>
                  <h5 className="text-white link-heading">Send money processing response: </h5>
                   <p className="output link-heading text-white " >
                    <br/> "status" <span>: </span> "201"<br/>
                    <br/> "success" <span>: </span> "true"<br/>
                    <br/> "message" <span>: </span> "Sendmoney processing"<br/>
                    <br/> "responseCode" <span>: </span> 2<br/>
                    <br/> "data" 
                    <p className="output-two link-heading text-white">
                       <br/>"statusCode" <span>: </span> 0<br/>
                       <br/>"transactionId" <span>: </span> "I22313011920"<br/>
                       <br/>"amount" <span>: </span> 200.0<br/>
                       <br/>"utrNumber" <span>: </span> "927019161118"<br/>
                       
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
