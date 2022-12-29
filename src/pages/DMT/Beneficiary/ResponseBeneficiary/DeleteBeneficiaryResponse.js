import React from "react";

function DeleteBeneficiaryResponse({response}) {
  return (
    <>
      <div> {response === 1 ? (
        <>
          <h6 className="text-secondary ">SUCCESS</h6>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"200"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"true"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Beneficiary Deleted"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">1</code>
            <br />
          </span>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">UNKNOWN RESPONSE :</h6>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"400"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Beneficiary not found"</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">"0"</code>
            <br />
          </span>
        </>
      ) : (
        <>
          <h6>Please choose responce code</h6>
        </>
      )}
    </div>
    </>
  );
}

export default DeleteBeneficiaryResponse;
