import React from "react";

function RemitterVerifyResponse({ response }) {
  return (
    <div>
      {" "}
      {response === 1 ? (
        <>
          <h6 className="text-secondary ">SUCCESS</h6>
          <p className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">200</code>,
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">true</code>,
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"OTP verified"</code>,
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">0</code>
            <br />
          </p>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">UNKNOWN RESPONSE </h6>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"208"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Invalid OTP "</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">81</code>
            <br />
          </span>
        </>
      ) : (
        <>
          <h6>Please choose responce code</h6>
        </>
      )}
    </div>
  );
}

export default RemitterVerifyResponse;
