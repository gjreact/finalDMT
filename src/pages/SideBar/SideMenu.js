import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink, Link } from "react-router-dom";
// import icon from "../../asset/images/list.svg"

function SideMenu(props) {
  return (
    <div className="mt-5 bg-dark">
      <Accordion defaultActiveKey="0" className="sideMenuColor" flush>
        <Accordion.Item eventKey="0">
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

        <Accordion.Item eventKey="1">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            <Accordion.Header className="menuItemHeader">
              Remitter
            </Accordion.Header>
          </NavLink>
          <Accordion.Body>
            <ListGroup style={{ overflow: "hidden", margin: "0px" }}>
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
                  Remitter Information
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
                  Remitter Send-OTP
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
                  Remitter Resend- OTP
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
                  Verify Remitter OTP
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
                  Remitter Balance
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

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
        <Accordion.Item eventKey="4">
          <Accordion.Header className="menuItemHeader">
            Transaction Money
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
                  Transaction Money
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
