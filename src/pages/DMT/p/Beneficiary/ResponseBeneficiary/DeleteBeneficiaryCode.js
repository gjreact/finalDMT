import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};
export const DeleteBeneficiaryCode = () => {
  return <><CodeWrapper heading="Request">
  <div className="request-wrapper">
 
   <JavaWrapper/>
    <br/> <code className="code-yellow">\"beneficiaryId\":10\r\n"</code>);
 
     <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
    <code className="text-white">.url(</code><code className="code-yellow">"localhost:8084/paymento/beneficiary-reg/delete-beneficiary"</code><code className="text-white">)</code> <br />
    <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
    <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, apiKey</code><code className="text-white">)</code> <br />
    <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code><code className="text-white">)</code> <br/>
    <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code><code className="text-white">)</code>  <br />
    <code className="text-white">.build();</code><br/>
    <code className="text-white">Response response = client.newCall(request).execute();</code>
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
   };

export const PythonDeleteBeneficiary = () =>{
    return <><CodeWrapper heading="Request">
  
          
      
   <div className="request-wrapper">
    <br/> <span  className="d-flex justify-content-between"><code>import  <code className="text-white">requests</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} /></span>
    <br/> <code>import</code> <code className="text-white">json</code><br/>
    <code className="text-white"> url =</code> <code className="code-yellow">"localhost:8084/paymento/beneficiary-reg/delete-beneficiary"</code><br/><br/>
   <code className="text-white">payload = json.dumps</code>( <span className="output text-white"><br/>
  
          <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />
    
        
    
    </span>) <br/><br/>

    <code className="text-white">
        headers = <span className="output  text-white"><br/>
        <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
  <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br/>
  <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
        </span>
    </code><br/>

   <code className="text-white"> response = requests.request(</code><code className="code-yellow">"POST"</code><code className="text-white">, url, headers=headers, data=payload)</code><br/>
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

export const ShellDeleteBeneficiary = () =>{
    return <><CodeWrapper heading="Request">
        <div className="request-wrapper">

      <ShellWrapper/>
      <br/> <code className="text-white"> --body-data </code>
      <span>'</span><span className="output  text-white"><br />
      <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />
         
            </span><span>'   \</span> <br />     
            <code className="code-yellow">'localhost:8084/paymento/beneficiary-reg/delete-beneficiary'</code>
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


export const PHPDeleteBeneficiary = () =>{
    return <><CodeWrapper heading="Request">
  
    <div className="request-wrapper">
    <code>	&#60;&#63;php</code><br/>

<code className="text-white">$curl = curl_init();</code><br />

<code className="text-white">curl_setopt_array(<code className="code-yelllow">$curl,<code className="text-white"> array(</code></code></code><br/>
     <code>CURLOPT_URL =&#62; <code className="code-yellow">'localhost:8084/paymento/beneficiary-reg/delete-beneficiary',</code></code><br/>
  <code>CURLOPT_RETURNTRANSFER =&#62; <code className="code-yellow">true,</code></code> <br/>
  <code>CURLOPT_ENCODING =&#62;  <code className="code-yellow">'',</code></code><br/>
  <code>CURLOPT_MAXREDIRS =&#62;  <code className="code-cyan">10,</code></code><br/>
  <code>CURLOPT_TIMEOUT =&#62;  <code className="code-cyan">0,</code></code><br/>
  <code>CURLOPT_FOLLOWLOCATION =&#62;  <code className="code-yellow">true,</code></code><br/>
  <code>CURLOPT_HTTP_VERSION =&#62;  <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code></code><br/>
  <code>CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST',</code></code><br/>
  <code>CURLOPT_POSTFIELDS =&#62; <code>'</code></code><br/>
  <span className="output text-white"><br />
  <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />
      
          </span><code>',</code><br />


          <code>CURLOPT_HTTPHEADER =&#62; <code>array(</code></code><br />
          <code>'apiKey <span>: </span> <code className="code-yellow">apiKey',</code></code> <br />
          <code>"Authorization <span>: </span><code className="code-cyan">Bearer  token', </code></code><br />
          <code>'Content-Type  <span>: </span><code className="code-cyan"> application/json'</code></code><br />
          <code>),</code><br />
          <code  className="code-yellow">$response = curl_exec($curl);</code><br />
          <code className="code-yellow">curl_close($curl);</code><br />
          <code>echo <code className="code-yellow">$response</code></code>;
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