import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";

const CreateBeneficiaryResponse = ({response}) => {
  return (
    <>
      <div>
        <div> {response === 1 ? (
        <>
          <h6 className="text-secondary ">If Remitter Exist :</h6>
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">201</code>,
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">true</code>,
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Beneficiary Saved successfully"</code>,
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">1</code>,
          <br /> <code>"data":</code><code className="code-cyan">[</code>
          <p className="output-two  text-white">
            <br />
            <code>"beneficiaryId"</code> <span>: </span>
            <code className="code-cyan">6</code>,
            <br />
            <code>"beneficiaryName"</code> <span>: </span>
            <code className="code-yellow">"sample"</code>,
            <br />
            <code>"beneficiaryBankName" </code>
            <span>: </span> <code className="code-yellow"> "Axis Bank"</code>
            ,
            <br />
            <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan"> 9</code>,
            <br />
            <code>"remitterName"</code> <span>: </span>
            <code className="code-yellow">"dilsha"</code>,
            <br />
           <code>"remitterMobileNumber"</code> <span>: </span>
            <code className="code-yellow">"7902900XXX"</code>,
            <br />
            <code>"beneficiaryMobileNumber"</code> <span>: </span>
            <code className="code-yellow">"7902900XXX"</code>,
            <br />
            <code>"accountNumber"</code> <span>: </span>
            <code className="code-yellow">"123456XXXXXXX"</code>,
            <br />
            <code>"ifscCode"</code> <span>: </span>
            <code className="code-yellow"> "UTIB0002916"</code>,
            <br />
            <code>"accountHolderName"</code> <span>: </span>
            <code className="code-yellow">"Vishnu"</code>,
             <br />
            <code>"branchName"</code> <span>: </span>
            <code className="code-yellow">"Mavoor Road"</code>
            <br />
            </p>
            <br/>
           </p>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">UNKNOWN RESPONSE :</h6>
          <span className="output  text-white ">
            <br /> <code>"status"</code> <span>: </span>
            <code className="code-cyan">"404"</code>
            <br /> <code>"success"</code> <span>: </span>
            <code className="code-cyan">"false"</code>
            <br /> <code>"message"</code> <span>: </span>
            <code className="code-yellow">"Beneficiary already exist "</code>
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
    </div>
    </div>
       
    </>
  );
};

export default CreateBeneficiaryResponse;
