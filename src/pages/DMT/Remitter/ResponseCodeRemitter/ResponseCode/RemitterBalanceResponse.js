import React from 'react'

function RemitterBalanceResponse({response}) {
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
          <code className="code-yellow">"Remitter Balance"</code>,
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">0</code>,
          <br /> <code>"data":</code>
          <p className="output-two  text-white">
            <br />
            <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">29</code>,
            <br />
            <code>"remitterName"</code> <span>: </span>
            <code className="code-yellow">"dil"</code>,
            <br />
            <code>"mobileNumber" </code>
            <span>: </span> <code className="code-yellow">7902626443</code>
            ,
            <br />
            <code>"availableBalance"</code> <span>: </span>
            <code className="code-cyan">25000.0</code>,
            <br />
            <code>"totalBalance"</code> <span>: </span>
            <code className="code-yellow">25000.0</code>
            <br />
           
          </p>
        </p>
        </>
      ) : response === 2 ? (
        <>
          <h6 className="text-secondary ">UNKNOWN RESPONSE</h6>
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
    </div>
  )
}

export default RemitterBalanceResponse