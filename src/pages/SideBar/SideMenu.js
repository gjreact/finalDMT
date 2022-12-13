import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideMenu(props) {
  let location = useLocation();
  console.log("location log =", location.pathname);
  console.log(
    location.pathname == "/pan-introduction"
      ? "/pan-introduction"
      : location.pathname == "/pan-verification"
      ? "/pan-introduction"
      : location.pathname
  );
  return (
    <div className="mt-2 bg-dark">
      <Accordion
        defaultActiveKey={location.pathname == "/"
        ? "/"

          : location.pathname == "/remitter"
          ? "/moneytransfer"
            : location.pathname == "/remitter-sendotp"
          ? "/moneytransfer"
            : location.pathname == "/remitter-resendotp"
          ? "/moneytransfer"
            : location.pathname == "/remitter-verifyotp"
          ? "/moneytransfer"
            : location.pathname == "/remitter-getbalance"
          ? "/moneytransfer"
            : location.pathname == "/beneficiary-create"
          ? "/moneytransfer"
            : location.pathname == "/beneficiary-list"
          ? "/moneytransfer"
            : location.pathname == "/beneficiary-delete"
          ? "/moneytransfer"
            : location.pathname == "/send-money"
          ? "/moneytransfer"
            : location.pathname == "/transaction-requery"
          ? "/moneytransfer"

          : location.pathname == "/pan-introduction"
        ? "/pan-introduction"
        : location.pathname == "/pan-verification"
        ? "/pan-introduction"
          : console.log("main menue noo")
      }
        className="sideMenuColor"
        flush
      >
        {/* authentication  start */}

        <Accordion.Item eventKey="/">
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
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                    // border: isActive ? "1px solid yellow" : "",
                    // borderRadius: isActive ? "30px" : "",
                  })}
                >
                  Authentication
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        {/* authentication  end */}
        <Accordion.Item eventKey="/moneytransfer">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            <Accordion.Header className="menuItemHeader">
              Money transfer
            </Accordion.Header>
          </NavLink>
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "-3px" }}>
              <ListGroup.Item className="menuItem ">
                {/* subarea started */}
                <Accordion
                  defaultActiveKey={
                        location.pathname == "/remitter"
                      ? "/remitter"
                        : location.pathname == "/remitter-sendotp"
                      ? "/remitter"
                        : location.pathname == "/remitter-resendotp"
                      ? "/remitter"
                        : location.pathname == "/remitter-verifyotp"
                      ? "/remitter"
                        : location.pathname == "/remitter-getbalance"
                      ? "/remitter"
                        : location.pathname == "/beneficiary-create"
                      ? "/beneficiary-create"
                        : location.pathname == "/beneficiary-list"
                      ? "/beneficiary-create"
                        : location.pathname == "/beneficiary-delete"
                      ? "/beneficiary-create"
                        : location.pathname == "/send-money"
                      ? "/send-money"
                        : location.pathname == "/transaction-requery"
                      ? "/transaction-requery"
                        :console.log("second menue noo")
                  }
                  className="sideMenuColor"
                  flush
                >
                  {/* remitter started */}
                  <Accordion.Item eventKey="/remitter">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "blue",
                      })}
                    >
                      <Accordion.Header className="menuItemHeader">
                        Remitter
                      </Accordion.Header>
                    </NavLink>
                    <Accordion.Body>
                      <ListGroup style={{ overflow: "hidden", margin: "-5px" }}>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem "
                        >
                          <NavLink
                            to="/remitter"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                              // border: isActive ? "1px solid yellow" : "",
                              // borderRadius: isActive ? "30px" : "",
                            })}
                          >
                            Information
                          </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/remitter-sendotp"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Send-OTP
                          </NavLink>
                        </ListGroup.Item>

                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/remitter-resendotp"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",                          
                            })}
                          >
                            Resend- OTP
                          </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/remitter-verifyotp"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Verify OTP
                          </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/remitter-getbalance"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Balance
                          </NavLink>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    className="overflow"
                    eventKey="/beneficiary-create"
                  >
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "blue",
                      })}
                    >
                      <Accordion.Header className="menuItemHeader">
                        Beneficiary
                      </Accordion.Header>
                    </NavLink>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/beneficiary-create"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            {" "}
                            Beneficiary Create
                          </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/beneficiary-list"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Beneficiary List
                          </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/beneficiary-delete"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Delete Beneficiary
                          </NavLink>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="/send-money">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "blue",
                      })}
                    >
                      <Accordion.Header className="menuItemHeader">
                        Send Money
                      </Accordion.Header>
                    </NavLink>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/send-money"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Send Money
                          </NavLink>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="/transaction-requery">
                    <Accordion.Header className="menuItemHeader">
                      Transaction Requery
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          onClick={props.onClick}
                          className="menuItem"
                        >
                          <NavLink
                            to="/transaction-requery"
                            style={({ isActive }) => ({
                              color: isActive ? "white" : "black",
                              backgroundColor: isActive ? "#495274" : "",
                              padding: isActive ? "5px 2px 5px 20px" : "",
                            })}
                          >
                            Transaction Requery
                          </NavLink>
                    
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
         
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

 
        <Accordion.Item
          eventKey="/pan-introduction">
          <NavLink
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
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                  })}
                >
                  Introduction
                </NavLink>
              </ListGroup.Item>

              <ListGroup.Item onClick={props.onClick} className="menuItem">
                <NavLink
                  to="/pan-verification"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive ? "#495274" : "",
                    padding: isActive ? "5px 2px 5px 20px" : "",
                  })}
                >
                  Verification
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideMenu;
