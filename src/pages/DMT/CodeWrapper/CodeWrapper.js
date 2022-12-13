import React from "react";
import { Button, Row } from "react-bootstrap";

const CodeWrapper = ({ children, heading, setResponse, btnview }) => {
  return (
    <Row
      className="link-heading response-margin  code-wrapper bg-dark"
      id="style-1"
      style={{ maxHeight: "350px", overflow: "scroll", overflowX: "hidden" }}
    >
      <div className="text-white p-2 request-text-heading d-flex justify-content-between">
        <div>{heading}</div>
        {btnview === 1 ? (
          <>
            <span className="margin-right-0">
              <Button
                variant="outlined"
                onClick={() => {
                  setResponse(1);
                }}
                className="text-success"
              >
                200
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setResponse(2);
                }}
                className="text-danger"
              >
                404
              </Button>
            </span>
          </>
        ) : btnview == 2 ? (
          <>
            <span className="margin-right-0">
              <Button
                variant="outlined"
                onClick={() => {
                  setResponse(1);
                }}
                className="text-success"
              >
                200
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setResponse(3);
                }}
                className="text-warning"
              >
                201
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setResponse(2);
                }}
                className="text-danger"
              >
                404
              </Button>
            </span>
          </>
        ) : (
          ""
        )}
      </div>
      {children}
    </Row>
  );
};

export default CodeWrapper;
