import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink} from "react-router-dom";

function SideMenu(props) {
  return (
    <div className="mt-5 bg-dark">
      <Accordion defaultActiveKey="Authentication" className="sideMenuColor" flush>

        {/* authentication  start */}

      
        <Accordion.Item eventKey="authentication">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            <Accordion.Header className="menuItemHeader">
              Authentication
            </Accordion.Header>
          </NavLink>
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "0px" }}>
              <ListGroup.Item onClick={props.onClick} className="menuItem ">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "blue",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                    border: isActive ? "1px solid yellow" : "",
                    borderRadius: isActive ? "30px" : "",
                  })}
                >
                  Authentication
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

         {/* authentication  end */}
      <Accordion.Item eventKey="moneytransfer">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          <Accordion.Header className="menuItemHeader">
            Money transfer
          </Accordion.Header>
        </NavLink>
        <Accordion.Body>
          <ListGroup style={{ overflow:"hidden", margin: "-3px" }}>
            
                                        <ListGroup.Item className="menuItem ">
                                        {/* subarea started */}
                                      <Accordion defaultActiveKey="0" className="sideMenuColor" flush>
                                        {/* remitter started */}
                                        <Accordion.Item eventKey="Remitter">
                                        <NavLink
                                          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                                        >
                                          <Accordion.Header className="menuItemHeader">
                                            Remitter
                                          </Accordion.Header>
                                        </NavLink>
                                        <Accordion.Body>

                                          <ListGroup style={{ overflow: "hidden", margin: "-5px" }}>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem ">
                                              <NavLink
                                                to="/remitter"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Information
                                              </NavLink>
                                            </ListGroup.Item>

                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/remitter-sendotp"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Send-OTP
                                              </NavLink>
                                            </ListGroup.Item>

                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/remitter-resendotp"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Resend- OTP
                                              </NavLink>
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/remitter-verifyotp"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Verify OTP
                                              </NavLink>
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/remitter-getbalance"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                               Balance
                                              </NavLink>
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Accordion.Body>
                                      </Accordion.Item>

                                      {/* rimitter  END */}

                                                {/* Beneficiary  start */}
                                      <Accordion.Item className="overflow" eventKey="2">
                                        <NavLink
                                          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                                        >
                                          <Accordion.Header className="menuItemHeader">
                                            Beneficiary
                                          </Accordion.Header>
                                        </NavLink>
                                        <Accordion.Body>
                                          <ListGroup>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/beneficiary-create"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                {" "}
                                                Beneficiary Create
                                              </NavLink>
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/beneficiary-list"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Beneficiary List
                                              </NavLink>
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/beneficiary-delete"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Delete Beneficiary
                                              </NavLink>
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                      {/* Beneficiary  END */}

                                      {/* Send Money  start */}
                                      <Accordion.Item eventKey="3">
                                        <NavLink
                                          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                                        >
                                          <Accordion.Header className="menuItemHeader">
                                            Send Money
                                          </Accordion.Header>
                                        </NavLink>
                                        <Accordion.Body>
                                          <ListGroup>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/send-money"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Send Money
                                              </NavLink>
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Accordion.Body>
                                      </Accordion.Item>

                                      {/* Send Money  start */}

                                      {/* Send Money  start */}
                                      <Accordion.Item eventKey="4">
                                        <Accordion.Header className="menuItemHeader">
                                          Transaction Requery
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <ListGroup>
                                            <ListGroup.Item onClick={props.onClick} className="menuItem">
                                              <NavLink
                                                to="/transaction-requery"
                                                style={({ isActive }) => ({
                                                  color: isActive ? "white" : "blue",
                                                  backgroundColor: isActive ? "#495274" : "",
                                                  padding: isActive ? "5px 2px 5px 20px" : "",
                                                  border: isActive ? "1px solid yellow" : "",
                                                  borderRadius: isActive ? "30px" : "",
                                                })}
                                              >
                                                Transaction Requery
                                              </NavLink>
                                              {/* <a href="# ">Transaction Requery</a> */}
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                                  

                                      </Accordion>             
                                  {/* sub area ended */}
                                
                              </ListGroup.Item>
                              
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>


         {/* rimitter  start */}
         <Accordion.Item eventKey="panverification">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            <Accordion.Header className="menuItemHeader">
              PAN Verification
            </Accordion.Header>
          </NavLink>
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "0px" }}>

              <ListGroup.Item onClick={props.onClick} className="menuItem ">
                <NavLink
                  to="/pan-introduction"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "blue",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                    border: isActive ? "1px solid yellow" : "",
                    borderRadius: isActive ? "30px" : "",
                  })}
                >
                  Introduction 
                </NavLink>
              </ListGroup.Item>
              
              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink
                  to="/pan-verification"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "blue",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                    border: isActive ? "1px solid yellow" : "",
                    borderRadius: isActive ? "30px" : "",
                  })}
                >
                  Verification
                </NavLink>
              </ListGroup.Item>

            </ListGroup>
            </Accordion.Body>
        </Accordion.Item>  

                                                                               
                                      

        {/* Send Money  start */}
      </Accordion>
    </div>
  );
}

export default SideMenu;
