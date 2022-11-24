import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/basiclayout.css";
import ListGroup from 'react-bootstrap/ListGroup';
// import icon from "../../asset/images/list.svg"

function SideMenu(props) {
  return (
    <div className="mt-5 bg-dark" >  
          <Accordion defaultActiveKey="0" className="sideMenuColor" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="menuItemHeader">Remitter</Accordion.Header>
                <Accordion.Body>
                  <ListGroup style={{overflow:"hidden",margin:"0px"}}>
                    <ListGroup.Item onClick={props.onClick} className="activeMenu"><a href="#mkmSolutions">Remitter Information</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick} className="menuItem" ><a href="#noooo ">Remitter Send-OTP</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick} className="menuItem"><a href="# ">Remitter Resend- OTP</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Verify Remitter OTP</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Remitter Balance</a></ListGroup.Item>
                  </ListGroup>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item  className="overflow" eventKey="1">
                <Accordion.Header className="menuItemHeader" >Beneficiary</Accordion.Header>
                <Accordion.Body >
                <ListGroup >
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Beneficiary Create</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Beneficiary List</a></ListGroup.Item>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Delete Beneficiary</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="menuItemHeader" >Send Money</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Send Money</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="menuItemHeader" >Transaction Money</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item onClick={props.onClick}  className="menuItem"><a href="# ">Transaction Money</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    </div>
  );
}

export default SideMenu;
