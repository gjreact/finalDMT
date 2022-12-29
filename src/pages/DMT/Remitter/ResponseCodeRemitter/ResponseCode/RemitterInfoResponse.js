import React from "react";

function RemitterInfoResponse({ response }) {
  return (
    <>
      {response === 1 ? (
        <>
          <h6 className="text-secondary ">If Remitter Exist : </h6>
          <p className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"200"</code>,
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>,
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Remitter Exists"</code>,
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-cyan">"0"</code>,
            <br /> <code>"data"</code>
            <p className="output-two  text-white">
              <br />
              <code>"remitterPhone"</code> <span>: </span>
              <code className="code-cyan">"7902900295"</code>,
              <br />
              <code>"remitterName"</code> <span>: </span>
              <code className="code-yellow">"dilsha"</code>,
              <br />
              <code>"remitterAddress" </code>
              <span>: </span> <code className="code-yellow">"veluthedath"</code>
              ,
              <br />
              <code>"remitterPinCode"</code> <span>: </span>
              <code className="code-cyan">"528963"</code>,
              <br />
              <code>"remitterCity"</code> <span>: </span>
              <code className="code-yellow">"calicut"</code>,
              <br />
              <code>"remitterState"</code> <span>: </span>
              <code className="code-yellow">"kerala"</code>,
              <br />
              <code>"remitterStatus"</code> <span>: </span>
              <code className="code-yellow">"Active"</code>,
              <br />
              <code>"userId"</code> <span>: </span>
              <code className="code-cyan">"3"</code>,
              <br />
              <code>"userName"</code> <span>: </span>
              <code className="code-yellow">"qwert G"</code>,
              <br />
              <code>"totalBalance"</code> <span>: </span>
              <code className="code-cyan">"9"</code>,
              <br />
              <code>"id"</code> <span>: </span>
              <code className="code-cyan">"25000.0"</code>
              <br />
            </p>
          </p>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">UNKNOWN RESPONSE </h6>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"404"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Remitter Doesn't exist "</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">"501"</code>
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

export default RemitterInfoResponse;
