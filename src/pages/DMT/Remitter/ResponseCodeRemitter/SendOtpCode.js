import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";


export const JavaResendOtp = () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" >

         <JavaWrapper />
         <h1></h1>
         <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow"> <span className="output">\r\n        \"remitterphone\":\"7902626443\",\r\n    \"remitterName\":\"anu\"\r\n </span>  \r\n" <code className="text-white" >);</code> </code></code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/send-otp"</code>)</code>
          <br/><code  className="text-white">.method(<code  className="code-yellow" >"POST"</code>, body)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"apiKey"</code>, <code  className="code-yellow" >"apiKey"</code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Content-Type", "application/json"</code>)</code>
           <br/> <code className="text-white">.build();</code>
          <br/> <code className="text-white">Response response = client.newCall(request).execute();</code>

      </div>

   </CodeWrapper>

      <CodeWrapper heading="Response">

         <div className="response-wrapper" >
               <code> java responce</code>
            {/* <br /><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
            <br /><code className="text-white">.build();</code>
            <br /><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
            <br /><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code> <code className="code-yellow">"<span className="output">\r\n        \"remitterPhone\":\"7902900295\"\r\n </span>  <code className="text-white" >);</code> </code>
            <br /><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
            <br /><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify"</code>)</code>
            <br /><code className="text-white">.method(<code className="code-yellow" >"POST"</code>, body)</code>
            <br /><code className="text-white">.addHeader(<code className="code-yellow" >"apiKey"</code>, <code className="code-yellow" >"lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"</code>)</code>
            <br /><code className="text-white">.addHeader(<code className="code-yellow" >"Authorization", <span className="output"><span className="output">Auth</span></span></code>)</code>
            <br /><code className="text-white">.addHeader(<code className="code-yellow" >"Content-Type", "application/json"</code>)</code>
            <br /> <code className="text-white">.build();</code>
            <br /> <code className="text-white">Response response = client.newCall(request).execute();</code>
          */}
         </div>
      </CodeWrapper>

   </>
};

export const PythonResendOtp = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
         <div>
    
    <br/> <code>import</code>  <code className="text-white">requests</code>
    <br/> <code>import</code> <code className="text-white">json</code><br/>
    <code className="text-white"> url =</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/send-otp"</code><br/>
    <code className="text-white">payload = json.dumps(</code><code className="output link-heading text-white"><br/>

 
    <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
    <code>"remitterName" </code> <span>: </span><code className="code-cyan"> "anu"</code><br />
  
  
   )</code><br/>

   <code className="text-white">
   headers = <p className="output link-heading text-white"><br/>
   <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
   <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
   </p>
  </code>
  <code className="text-white">
   response = requests.request(<code className="code-yellow">"POST"</code>, url, headers=headers, data=payload)<br/>

 <code>print</code>(response.text )
 </code>
 </div>
         </div>


      </CodeWrapper>

      <CodeWrapper heading="Response">

         <div className="response-wrapper" >
               <code>python responce</code>
            {/* <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
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
          */}
         </div>
      </CodeWrapper>
   </>
}

export const ShellResendOtp = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">

            <ShellWrapper />
            <div>
               <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>  
               <br/> <code className="text-white">--method POST \</code>
               <br/> <code className="text-white">  --timeout=0 \</code>
               <br/> <code className="text-white">  --header <code className="code-yellow"> 'apiKey':'apiKey' \</code></code>
               <br/> <code className="text-white">--header  <code className="code-yellow"> 'Content-Type: application/json' \</code></code>
               <br/> <code className="text-white">--body-data '</code>
               <p className="output link-heading text-white"><br/>       
               <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
               <code> "remitterName" </code> <span>: </span><code className="code-cyan"> "anu"</code><br />
               </p>     
               <br/> <code className="code-yellow">' \</code>
               <br/><code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/send-otp'</code>
              </div>
         </div>

      </CodeWrapper>

      <CodeWrapper heading="Response">

         <div className="response-wrapper" >
               <code>shell responce</code>
            {/* <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
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
             */}
         </div>
      </CodeWrapper>
   </>
}

export const PHPResendOtp = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
         <div>
          <br/> <code className="text-white">$curl = curl_init();</code>
          <br/><code className="text-white">curl_setopt_array($curl, <code>array</code>(</code>
          <br/><code>CURLOPT_URL =&#62;<code> 'http://194.195.113.218:8090/paymento/remitter-reg/send-otp'</code>,</code>
          <br/><code className="text-white">CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,</code>
          <br/><code className="text-white"> CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,</code>
          <br/><code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
          <br/><code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
          <br/><code className="text-white">   CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,</code>
          <br/><code className="text-white">CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,</code>
          <br/><code className="text-white"> CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST'</code>,</code>
          <br/><code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code><code className="code-yellow"> '
          <code className="output code-yellow" ><br/>
          "remitterPhone":"7902626443",<br/>
          "remitterName":"anu",<br/>
        </code>
        <br/>  
          '          ,<br/>
          <code className="text-white">CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br/>
          <code className="code-yellow">'apiKey': 'apiKey', <br/>
              'Content-Type: application/json'</code><br/>
            </code>
 
  ),<br/>
          ));
          </code>
          <br/>
          <code className="text-white">$response = curl_exec($curl);</code>
          <br></br><code className="text-white">curl_close($curl);</code>
          <br/><code className="text-white"><code>echo </code>$response;</code>
          </div>

         </div>
      </CodeWrapper>

      <CodeWrapper heading="Response">

         <div className="response-wrapper" >
               <code>Php responce</code>
            {/* <code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code>  <br />
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
             */}
         </div>
      </CodeWrapper>


   </>
}









