import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};
export const ListBeneficiaryCode = () => {
  return <><CodeWrapper heading="Request">
    <div className="request-wrapper" id="java">
      <JavaWrapper />
        <br /> <code className="code-yellow">\"beneficiaryId\":10\r\n"</code><code className="text-white">);</code>


        <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
        <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/getbeneficiary"</code><code className="text-white">)</code> <br />
        <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
        <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, "lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"</code><code className="text-white">)</code> <br />
        <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code><code className="text-white">)</code> <br />
        <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code><code className="text-white">)</code>  <br />
        <code className="text-white">.build();</code><br />
        <code className="text-white">Response response = client.newCall(request).execute();</code>




    </div>
  </CodeWrapper>

<CodeWrapper heading="Response">

        <p className="output  " >
          <br /> <code>"status" </code><span>: </span> <code className="code-cyan">"200"</code>
          <br /> <code>"success" </code><span>: </span> <code className="code-cyan">"true"</code>
          <br /> <code>"message" </code><span>: </span> <code className="code-yellow">"Loaded Successfully"</code>
          <br /> <code>"responseCode"</code> <span>: </span> <code className="code-cyan">1</code>
          <br /> <code>"data "</code><span>:</span> <p className="output-array link-heading">

            <p className="output-two ">
              <br /><code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">6</code>
              <br /><code>"beneficiaryName"</code> <span>: </span><code className="code-yellow"> "sample"</code>
              <br /><code>"beneficiaryBankName"</code> <span>: </span><code className="code-yellow"> "Axis Bank"</code>
              <br /><code>"remitterId"</code> <span>: </span> <code className="code-cyan">9</code>
              <br /><code>"remitterName"</code> <span>: </span><code className="code-yellow"> "dilsha"</code>
              <br /><code>"remitterMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
              <br /><code>"beneficiaryMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
              <br /><code>"accountNumber"</code> <span>: </span> <code className="code-cyan">"123456XXXXXXX"</code>
              <br /><code>"ifscCode"</code> <span>: </span><code className="code-yellow"> "UTIB0002916"</code>
              <br /><code>"accountHolderName"</code> <span>: </span><code className="code-yellow"> "Vishnu"</code>
              <br /><code>"branchName"</code> <span>: </span><code className="code-yellow"> "Mavoor Road"</code><br />
            </p>
          </p>
          <p className="output ">
            <br /><code>"beneficiaryId"</code> <span>: </span> <code className="code-cyan">11</code>
            <br /><code>"beneficiaryName"</code><span>:</span><code className="code-yellow">"aaa"</code>
            <br /><code>"beneficiaryBankName"</code> <span>: </span> <code className="code-yellow">"Axis Bank"</code>
            <br /><code>"remitterId"</code> <span>: </span> <code className="code-cyan">9</code>
            <br /><code>"remitterName"</code> <span>: </span> <code className="code-yellow">"dilsha"</code>
            <br /><code>"remitterMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
            <br /><code>"beneficiaryMobileNumber"</code> <span>: </span> <code className="code-cyan">"7902900XXX"</code>
            <br /><code>"accountNumber"</code> <span>: </span> <code className="code-cyan">"8596321876XXX"</code>
            <br /><code>"ifscCode"</code> <span>: </span> <code className="code-yellow">"UTIB0002916"</code>
            <br /><code>"accountHolderName"</code> <span>: </span> <code className="code-yellow">"Vishnu"</code>
            <br /><code>"branchName"</code> <span>: </span> <code className="code-yellow">"Mavoor Road"</code><br />
          </p>
          <p className="output-array-two "></p>
        </p>
</CodeWrapper>
</>

};


export const PythonListBeneficiary = () => {
  return <> <CodeWrapper heading="Request">
    <div className="request-wrapper" id="python" >
      <br /> <span className="d-flex justify-content-between"><code>import<code className="text-white">  requests</code></code><AiOutlineCopy className="copyicon" onClick={() => copyToClipboard("python")} /></span>
      <code>import</code> <code className="text-white"> json</code><br />
      <code className="text-white"> url =</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/getbeneficiary"</code><br /><br />
      <code className="text-white">payload = json.dumps</code>( <span className="output  text-white"><br />
        <code>"remitterPhone"</code>  <span>: </span> <code className="code-yellow">7902900295</code><br />



      </span>) <br /><br />

      <code className="text-white">
        headers = <span className="output  text-white"><br />
          <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br />
          <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br />
          <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br />
        </span>
      </code><br />

      <code className="text-white">response = requests.request(</code><code className="code-yellow">"POST"</code><code className="text-white">, url, headers=headers, data=payload)</code><br />
      <code>print</code><code className="text-white">(response.text)</code>
    </div>


  </CodeWrapper>
  <CodeWrapper heading="Response">

  <div className="response-wrapper" >

     <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
     .build();
     <br />MediaType mediaType = MediaType.parse(<code className="code-yellow">"application/json"</code>);
     <br /><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
     <br /> <code className="code-yellow">\"beneficiaryName\": \"anu\",\r\n  \"beneficiaryBankId\": \"36\"</code>,
     <br /> <code className="code-yellow">\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n </code>
     <br /> <code className="code-yellow">\"beneficiaryMobileNumber\":\"8596321478\",\r\n        \"accountNumber\":  </code>
     <br /> <code className="code-yellow">\"88654888892\",\r\n        \"address\": \"Calicut \",\r\n </code>
     <br /> <code className="code-yellow">\"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\", </code>
     <br /> <code className="code-yellow">\r\n        \"branchName\": \"Mavoor Road\"\r\n");</code>
     <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
     <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>) <br />
     <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, apiKey</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code>)  <br />
     <code className="text-white">.build();</code><br />
     <code className="text-white">Response response = client.newCall(request).execute();</code>
  </div>
  </CodeWrapper>
  </>
}


export const ShellListBeneficiary = () => {
  return <> <CodeWrapper heading="Request">
    <div className="response-wrapper" id="shell">

      <ShellWrapper/>
        <br /> <code className="text-white"> --body-data </code>
        <span>'</span><span className="output  text-white" ><br />
          <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />

        </span><span>'\</span> <br />
        <code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/getbeneficiary'</code>
      
    </div>

  </CodeWrapper>

  <CodeWrapper heading="Response">

  <div className="response-wrapper" >

     <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
     .build();
     <br />MediaType mediaType = MediaType.parse(<code className="code-yellow">"application/json"</code>);
     <br /><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
     <br /> <code className="code-yellow">\"beneficiaryName\": \"anu\",\r\n  \"beneficiaryBankId\": \"36\"</code>,
     <br /> <code className="code-yellow">\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n </code>
     <br /> <code className="code-yellow">\"beneficiaryMobileNumber\":\"8596321478\",\r\n        \"accountNumber\":  </code>
     <br /> <code className="code-yellow">\"88654888892\",\r\n        \"address\": \"Calicut \",\r\n </code>
     <br /> <code className="code-yellow">\"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\", </code>
     <br /> <code className="code-yellow">\r\n        \"branchName\": \"Mavoor Road\"\r\n");</code>
     <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
     <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>) <br />
     <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, apiKey</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code>)  <br />
     <code className="text-white">.build();</code><br />
     <code className="text-white">Response response = client.newCall(request).execute();</code>
  </div>
  </CodeWrapper>
  
  </>
}


export const PHPListBeneficiary = () => {
  return <> <CodeWrapper heading="Request">

    <div className="request-wrapper" id="php">
      <span className="d-flex justify-content-between"><code>	&#60;&#63;php</code><AiOutlineCopy className="copyicon" onClick={() => copyToClipboard("php")} /></span><br />

      <code className="text-white">$curl = curl_init();</code><br />

      <code className="text-white">curl_setopt_array(<code className="code-yelllow">$curl,<code className="text-white"> array(</code></code></code><br />
      <code>CURLOPT_URL =&#62; <code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/getbeneficiary',</code></code><br />
      <code>CURLOPT_RETURNTRANSFER =&#62; <code className="code-yellow">true,</code></code> <br />
      <code>CURLOPT_ENCODING =&#62;  <code className="code-yellow">'',</code></code><br />
      <code>CURLOPT_MAXREDIRS =&#62;  <code className="code-cyan">10,</code></code><br />
      <code>CURLOPT_TIMEOUT =&#62;  <code className="code-cyan">0,</code></code><br />
      <code>CURLOPT_FOLLOWLOCATION =&#62;  <code className="code-yelllow">true,</code></code><br />
      <code>CURLOPT_HTTP_VERSION =&#62;  <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code></code><br />
      <code>CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST',</code></code><br />
      <code>CURLOPT_POSTFIELDS =&#62; <code>'</code></code><br />
      <span className="output text-white"><br />
        <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />

      </span><code>',</code><br />


      <code>CURLOPT_HTTPHEADER =&#62; <code>array(</code></code><br />
      <code>'apiKey <span>: </span> <code className="code-yellow">apiKey',</code></code> <br />
      <code>"Authorization <span>: </span><code className="code-cyan">Bearer  token', </code></code><br />
      <code>'Content-Type  <span>: </span><code className="code-cyan"> application/json'</code></code><br />
      <code>)</code><br />
      <code>));</code><br />
      <code className="code-yellow">$response = curl_exec($curl);</code><br />
      <code className="code-yellow">curl_close($curl);</code><br />
      <code>echo <code className="code-yellow">$response;</code></code><br />

    </div>
  </CodeWrapper>
  <CodeWrapper heading="Response">

  <div className="response-wrapper" >

     <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
     .build();
     <br />MediaType mediaType = MediaType.parse(<code className="code-yellow">"application/json"</code>);
     <br /><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
     <br /> <code className="code-yellow">\"beneficiaryName\": \"anu\",\r\n  \"beneficiaryBankId\": \"36\"</code>,
     <br /> <code className="code-yellow">\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n </code>
     <br /> <code className="code-yellow">\"beneficiaryMobileNumber\":\"8596321478\",\r\n        \"accountNumber\":  </code>
     <br /> <code className="code-yellow">\"88654888892\",\r\n        \"address\": \"Calicut \",\r\n </code>
     <br /> <code className="code-yellow">\"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\", </code>
     <br /> <code className="code-yellow">\r\n        \"branchName\": \"Mavoor Road\"\r\n");</code>
     <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
     <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>) <br />
     <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, apiKey</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code>) <br />
     <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code>)  <br />
     <code className="text-white">.build();</code><br />
     <code className="text-white">Response response = client.newCall(request).execute();</code>
  </div>
  </CodeWrapper>
  </>
}