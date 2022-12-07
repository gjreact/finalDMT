import React from "react";

function RemitterSendOtpResponse({response}) {

  return (
    <>
      {response === 1 ? (
        <>
          <h5 className="text-white">SUCCESS </h5>
          <span className="output text-white">
            <br /> <code>"status" </code>
            <span>: </span> <code className="code-cyan">"201"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code>"OTP send successfully"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">"0"</code>
            <br /> <code>"data"</code>
            <br />
            <span className="output-two text-white">
              <br />
              <span />
              <code>"remitterId"</code> <span>: </span>
              <code className="code-cyan">15</code>
              <br />
              <code>"otpRefferenceId"</code> <span>: </span>
              <code className="code-yellow">"2NEBGNVgCJ92agZg"</code>
              <br />
              <code>"mobile"</code> <span>: </span>
              <code className="code-cyan">"7902666443"</code>
              <br />
              <code>"name"</code> <span>: </span>
              <code className="code-yellow">"Anju"</code>
              <br />
              <code>"userId"</code> <span>: </span>
              <code className="code-cyan">3</code>
              <br />
              <code>"remitterType"</code> <span>: </span>
              <code className="code-cyan">3</code>
              <br />
            </span>
            <br />
          </span>
        </>
      ) : response === 2 ? (
        <>
        <h5 className="text-white">UNKNOWN RESPONSE </h5>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"404"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">" "</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">" "</code>
            <br />
          </span>
        </>
      ) : (
        <>
          <h6>Please choose responce code</h6>
        </>
      )}
    </>
  );
}

export default RemitterSendOtpResponse;
