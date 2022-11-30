import React from "react";
import { Row } from "react-bootstrap";

const CodeWrapper = ({children,heading}) => {
  return <Row className="link-heading response-margin  code-wrapper bg-white" id="style-1" style={{maxHeight:"350px",overflow:"scroll",overflowX:"hidden"}}>
  
  <span className="text-white p-1 request-text-heading">{heading}</span>
    {children}
  
</Row>

};

export default CodeWrapper;
