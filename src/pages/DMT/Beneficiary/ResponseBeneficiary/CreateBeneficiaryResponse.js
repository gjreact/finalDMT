import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";

const CreateBeneficiaryResponse = () => {
  return (
    <>
      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <span className="output  text-white">
            <br />
            <code>"status" :</code>
            <code className="code-cyan">201 ,</code>
            <br />
            <code>"success" :</code> <code className="code-cyan">true,</code>
            <br />
            <code>"message" :</code>
            <code className="code-yellow">
              "Beneficiary Saved successfully",
            </code>
            <br />
            <code>"responseCode" :</code>
            <code className="code-cyan">1</code>
            <br />
            <code>"data" : </code>[<br />
            <span className="output-two">
              <br />
              <code>"beneficiaryId"</code> <code className="code-cyan">6,</code>
              <br />
              <code>"beneficiaryName" </code>{" "}
              <code className="code-yellow"> "sample",</code>
              <br />
              <code>"beneficiaryBankName" </code>{" "}
              <code className="code-yellow"> "Axis Bank",</code>
              <br />
              <code>"remitterId"</code> <code className="code-cyan">9,</code>
              <br />
              <code>"remitterName"</code>{" "}
              <code className="code-yellow">"dilsha",</code>
              <br />
              <code>"remitterMobileNumber" </code>{" "}
              <code className="code-cyan">7902900XXX,</code>
              <br />
              <code>"beneficiaryMobileNumber" </code>{" "}
              <code className="code-cyan">7902900XXX,</code>
              <br />
              <code>"accountNumber" </code>{" "}
              <code className="code-cyan"> "123456XXXXXXX",</code>
              <br />
              <code>"ifscCode" </code>{" "}
              <code className="code-cyan"> "UTIB0002916",</code>
              <br />
              <code>"accountHolderName" </code>{" "}
              <code className="code-yellow"> "Vishnu",</code>
              <br />
              <code>"branchName" </code>{" "}
              <code className="code-yellow"> "Mavoor Road",</code>
              <br />]<br />
            </span>
            <br />
          </span>
        </div>
      </CodeWrapper>
    </>
  );
};

export default CreateBeneficiaryResponse;
