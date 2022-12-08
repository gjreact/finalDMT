import React from "react";

function ListBeneficiaryResponse({response}) {
  return (
    <>
      
      
        <div> {response === 1 ? (
        <>
    
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">200</code>,
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">true</code>,
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Loaded Successfully"</code>,
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
            <p className="output-two  text-white">
            <br />
            <code>"beneficiaryId"</code> <span>: </span>
            <code className="code-cyan">11</code>,
            <br />
            <code>"beneficiaryName"</code> <span>: </span>
            <code className="code-yellow">"aaa"</code>,
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
            <code className="code-yellow">"8596321876XXX"</code>,
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
            <code className="code-cyan">]</code>
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
            <code className="code-yellow">"Not found "</code>
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

export default ListBeneficiaryResponse;
