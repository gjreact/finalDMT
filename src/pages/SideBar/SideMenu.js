import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../asset/css/slite.css";
import ListGroup from 'react-bootstrap/ListGroup';

function SideMenu() {
  return (
    <div className="mt-5 bg-dark">
      <Accordion className="" defaultActiveKey="0">
        <Accordion.Item className="sideMenuColor" eventKey="0">
          <Accordion.Header>DMT</Accordion.Header>
          <Accordion.Body className="zeropadding">
          
          <Accordion defaultActiveKey="0" className="sideMenuTransparent" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Remitter</Accordion.Header>
                <Accordion.Body className="sideMenuTransparent">
                  <ListGroup style={{overflow:"hidden",margin:"0px"}}>
                    <ListGroup.Item className="activeMenu"><a href="#">Remitter Information</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Remitter Send-OTP</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Remitter Resend- OTP</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Verify Remitter OTP</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Remitter Balance</a></ListGroup.Item>
                  </ListGroup>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item  className="overflow" eventKey="1">
                <Accordion.Header>Beneficiary</Accordion.Header>
                <Accordion.Body className="sideMenuTransparent" >
                <ListGroup >
                    <ListGroup.Item ><a href="#">Beneficiary Create</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Beneficiary List</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Delete Beneficiary</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Send Money</Accordion.Header>
                <Accordion.Body className="sideMenuTransparent">
                <ListGroup>
                    <ListGroup.Item><a href="#">Send Money</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Transaction Money</Accordion.Header>
                <Accordion.Body className="sideMenuTransparent">
                <ListGroup>
                    <ListGroup.Item><a href="#">Transaction Money</a></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideMenu;
