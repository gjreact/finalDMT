import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";

function DeleteBeneficiaryResponse() {
  return (
    <>
      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <span className="output  text-white">
            <br />
            <code>"status" :</code>
            <code className="code-cyan">200 ,</code>
            <br />
            <code>"success" :</code> <code className="code-cyan">true,</code>
            <br />
            <code>"message" :</code>
            <code className="code-yellow">"Beneficiary Deleted",</code>
            <br />
            <code>"responseCode" :</code>
            <code className="code-cyan">1</code>
            <br />
          </span>
        </div>
          
      </CodeWrapper>
    </>
  );
}

export default DeleteBeneficiaryResponse;
