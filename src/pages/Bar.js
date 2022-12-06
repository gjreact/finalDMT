import React, { useState } from "react";
import logo from "../asset/images/logo_blue.png";
import "../asset/css/basiclayout.css";
import "../pages/SideBar/SideMenu";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import SideMenu from "../pages/SideBar/SideMenu";

function Bar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="hamberger">
      <div className="bars">
        <FaBars onClick={handleShow}></FaBars>
      </div>
      <Offcanvas
        style={{ backgroundColor: "var(--SideMenueBgColor)", width: "270px" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header
          style={{
            backgroundColor: "var(--SideMenueBgColor)",
            variant: "white",
          }}
          closeButton
          closeVariant="white"
        >
          <div
            style={{ width: "70%" }}
            className=" d-flex justify-content-center"
          >
            <img
              className="align-center"
              style={{ width: "100%", maxWidth: "150px" }}
              src={logo}
              alt="paymento"
            />
          </div>
        </Offcanvas.Header>
        <hr className="hrline" />
        <Offcanvas.Body style={{ backgroundColor: "10102C" }}>
          <SideMenu onClick={handleClose} />
        </Offcanvas.Body>
        <hr className="hrline" />
        <h6 className="docHead">Documentation Powered by Paymento</h6>
      </Offcanvas>
    </div>
  );
}

export default Bar;
