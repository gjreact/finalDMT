import React from "react";
import Accordion from "react-bootstrap/Accordion";

function SideMenu() {
  return (
    <div className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>DMT</Accordion.Header>
          <Accordion.Body>
            
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Remitter</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.google.com">ammacheee</a>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Remitter</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.google.com">ammacheee</a>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Remitter</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.google.com">ammacheee</a>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Remitter</Accordion.Header>
              <Accordion.Body>
                <a href="https://www.google.com">ammacheee</a>
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
