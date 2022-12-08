import React from 'react'

function RemitterReSendResponse({response}) {
  return (
    <div> {response === 1 ? (
        <>
          <h6 className="text-secondary ">SUCCESS</h6>
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">200</code>,
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">true</code>,
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"OTP send successfully"</code>,
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">0</code>
          <br/>
          <br /> <code>"data":</code>
          <p className="output-two  text-white">
            <br />
            <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">16</code>,
            <br />
            <code>"otpRefferenceId"</code> <span>: </span>
            <code className="code-yellow">"FLfoYdvZqx61A9eg"</code>,
            <br />
            <code>"mobile" </code>
            <span>: </span> <code className="code-yellow">"9895924936</code>
            ,
            <br />
            <code>"name"</code> <span>: </span>
            <code className="code-cyan">"dil</code>,
            <br />
            <code>"userId"</code> <span>: </span>
            <code className="code-yellow">3</code>
            <br />
         
            <code>"remitterType"</code> <span>: </span>
            <code className="code-yellow">3</code>
            <br/>
           
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
            <code className="code-yellow">"Remitter already exist "</code>
            <br /> <code>"responseCode"</code> <span>: </span>
            <code className="code-yellow">0</code>
            <br />
          </span>
        </>
      ) : (
        <>
          <h6>Please choose responce code</h6>
        </>
      )}
    </div>

  )
}

export default RemitterReSendResponse