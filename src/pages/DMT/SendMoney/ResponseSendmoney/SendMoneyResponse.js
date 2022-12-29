import React from "react";

function SendMoneyResponse({ response }) {
  return (
    <>
      {response === 1 ? (
        <>
          <h6 className="text-secondary ">Success Response :</h6>
          <p className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"200"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney Success"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">1</code>
            <br /> <code>"data"</code>
            <p className="output-two  text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-yellow">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-yellow">"I22313011897"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-yellow">200.0</code>
              <br />
              <code>"utrNumber"</code> <span>: </span>
              <code className="code-yellow">"927019161118"</code>
              <br />
            </p>
          </p>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">Send money failed response:</h6>
          <p className="output text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"400"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan"> "false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney Failed"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan"> 0</code>
            <br /> <code>"data"</code>
            <p className="output-two text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-yellow">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-yellow">"I22313011919"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-yellow">200.0</code>
              <br />
              <code>"utrNumber" </code>
              <span>: </span>
              <code className="code-yellow">"927019161118"</code>
            </p>
          </p>
        </>
      ) : response === 3 ? (
        <>
          <h6 className="text-secondary ">Send money processing response:</h6>
          <p className="output text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"201"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Sendmoney processing"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">2</code>
            <br /> <code>"data"</code>
            <p className="output-two text-white">
              <br />
              <code>"statusCode"</code> <span>: </span>
              <code className="code-cyan">0</code>
              <br />
              <code>"transactionId"</code> <span>: </span>
              <code className="code-cyan">"I22313011920"</code>
              <br />
              <code>"amount"</code> <span>: </span>
              <code className="code-cyan">200.0</code>
              <br />
              <code>"utrNumber"</code> <span>: </span>
              <code className="code-cyan">"927019161118"</code>
              <br />
            </p>
          </p>
        </>
      ) : (
        <>
          <h6>Please choose responce code</h6>
        </>
      )}
    </>
  );
}

export default SendMoneyResponse;
