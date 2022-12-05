import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

   var c = document.getElementById(id).innerText;
   copy(c);
};

export const JavaVerifyOtp = () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" >

         <JavaWrapper />
         <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow">"\r\n" <span className="output">\r\n        \"otp\":\"017111\",\r\n   <br/> \"otpRefferenceId\":\"URMDiiD2UQkIkkQy\",\r\n <br/>\"mobile\":\"7902626443\",\r\n    \"remitterType\":3\r\n</span><br/> \r\n\t      \r\n" <code className="text-white" >);</code> </code></code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/verify-otp"</code>)</code>
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

export const PythonVerifyOtp = () => {
   return <>
      <CodeWrapper heading="Request">

        <div className="request-wrapper">
          <div>
    
                <br /> <code>import</code> <code className="text-white">requests</code>
                <br /> <code>import</code> <code className="text-white">json</code>
                <br />
                <code className="text-white"> url =</code>{" "}
                <code className="code-yellow">
                "http://194.195.113.218:8090/paymento/remitter-reg/verify-otp"
                </code>
                <br />
                <code className="text-white">payload = json.dumps</code>({" "}
                <p className="output link-heading text-white">
                <br />
                <code>"otp" </code> <span>: </span>
                <code className="code-cyan"> "017111",</code>
                <br />
                <code> "otpRefferenceId" </code> <span>: </span>
                <code className="code-cyan"> "URMDiiD2UQkIkkQy",</code>
                <br />
                <code> "mobile"</code> <span>: </span>
                <code className="code-cyan"> "7902626443"</code>
                <br />
                <code> "remitterType"</code> <span>: </span>
                <code className="code-cyan">  3</code>
                <br />
                </p>
                ) <br />
                <code className="text-white">
                headers ={" "}
                <p className="output link-heading text-white">
                    <br />
                    <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code>{" "}
                    ,
                    <br />
                    <code>'Content-Type'</code>:
                    <code className="code-yellow"> 'application/json'</code>
                    <br />
                </p>
                </code>
                <code className="text-white">
                response = requests.request(
                <code className="code-yellow">"POST"</code>, url, headers=headers,
                data=payload)
                <br />
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

export const ShellVerifyOtp = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">

            <ShellWrapper />
            <div>
                <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>  
                <br/> <code className="text-white">--method POST \</code>
                <br/> <code className="text-white">  --timeout=0 \</code>
                <br/> <code className="text-white">  --header <code className="code-yellow"> 'apiKey':' \</code></code>
                <br/> <code className="text-white">--header  <code className="code-yellow"> 'Content-Type: application/json' \</code></code>
                <br/> <code className="text-white">--body-data '</code>  
                <p className="output link-heading text-white"><br/>       
                <code>"otp" </code> <span>: </span><code className="code-cyan"> "017111",</code><br />
                <code> "otpRefferenceId" </code> <span>: </span><code className="code-cyan"> "URMDiiD2UQkIkkQy"</code><br />
                <code> "mobile"</code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
                <code> "remitterType" </code> <span>: </span><code className="code-cyan"> 3</code><br />            
                </p>
                <br/> <code className="code-yellow">' \</code>
                <br/><code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/verify-otp'</code>  
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

export const PHPVerifyOtp = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
         <div>
 
          <br/> <code className="text-white">$curl = curl_init();</code>
          <br/><code className="text-white">curl_setopt_array($curl, <code>array</code>(</code>
          <br/><code>CURLOPT_URL =&#62;<code> 'http://194.195.113.218:8090/paymento/remitter-reg/verify-otp'</code>,</code>
          <br/><code className="text-white">CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,</code>
          <br/><code className="text-white"> CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,</code>
          <br/><code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
          <br/><code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
          <br/><code className="text-white">   CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,</code>
          <br/><code className="text-white">CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,</code>
          <br/><code className="text-white"> CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST'</code>,</code>
          <br/><code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code><code className="code-yellow"> '
          <br/>
          <code className="output code-yellow" ><br/>
          "otp":"017111",<br/>
          "otpRefferenceId":"URMDiiD2UQkIkkQy",<br/>
          "mobile":"7902626443",<br/>
          "remitterType":3,<br/>   
          </code>
           <br/>  
          ' ,<br/>
          <code className="text-white">CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br/>
          <code className="code-yellow">'apiKey: ', <br/>
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

export const NodeVerifyOtpCode= () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" >
      <span className="d-flex justify-content-between "><code>var <code className="text-white"> request =</code> <code>require</code><code>('request');</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} />  </span>
     <code>var </code> <code className="text-white">options = </code><span className="output text-white"><br />
        <code>'method' :</code><code className="code-yellow">'POST'</code><br />
        <code>'url' :<code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/verify-otp'</code></code><br />
        <code className="text-white">
               headers = <span className="output  text-white"><br />
                  <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br />
                  <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br />
                  <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br />
               </span>,
            </code><br />
            <code className="text-white"> body :</code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output"><br />
               <code>"otp" :</code><code>"017111" ,</code><br />
               <code>"otpRefferenceId" :</code><code>"URMDiiD2UQkIkkQy" ,</code><br />
               <code>"mobile" :</code><code>"7902626443" ,</code><br />
               <code>"remitterType" :</code><code>3</code><br />
               </span>)</code><br />
     </span><code className="text-white">;</code><br />
     <code className="text-white">
      request(options,<code>function</code><code className="text-white">(error,response)</code><br />
      <span className="output"><br />
         <code>if</code> <code className="text-white">(error)</code> <code>throw new Error<code className="text-white">(error);</code></code><br />
         <code>console.log(response.body)</code><br />
      </span><code className="text-white">);</code>
     </code>

      </div>

   </CodeWrapper>
   
    <CodeWrapper heading="Response">

    <div className="response-wrapper" >

    <span className="d-flex justify-content-between "><code className="text-white">OkHttpClient client =</code> <code>new</code> <code className="text-white">OkHttpClient().newBuilder()</code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} /></span>  <br />
       .build();
       <br /><code className="text-white">MediaType mediaType = MediaType.parse(</code><code className="code-yellow">"application/json"</code>);
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

export const JavascriptVerifyOtpCode = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
             <span className="d-flex justify-content-between "><code>var myHeaders = <code>new</code> <code className="text-white">Headers();</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} /></span>
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"apiKey", apiKey</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Authorization","Bearer token"</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Content-Type","application/json"</code><code className="text-white">);</code><br />

            <code className="text-white">var raw = </code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output text-white"><br />
            <code>"otp" :</code><code>"017111" ,</code><br />
               <code>"otpRefferenceId" :</code><code>"URMDiiD2UQkIkkQy" ,</code><br />
               <code>"mobile" :</code><code>"7902626443" ,</code><br />
               <code>"remitterType" :</code><code>3</code><br />
               </span>)</code><br />
            <code className="text-white">var requestOptions = </code><span className="output text-white"><br />
               <code>"method" :</code><code>"POST"</code><br />
               <code>"headers" :</code><code>"myHeaders"</code><br />
               <code>"body" :</code><code>"raw"</code><br />
               <code>"redirect" :</code><code>"follow"</code><br />
               </span><code className="text-white">;</code><br />

               <code>fetch</code><code className="text-white">(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/verify-otp", requestOptions </code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">response =&#62; response.text()</code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">result =&#62; console.log(result)</code><code className="text-white">)</code><br />
  <code>.catch</code><code className="text-white">(</code><code className="code-yellow">error =&#62; console.log('error',error)</code><code className="text-white">);</code>
 
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

export const SwiftVerifyOtpCode = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">


         <span className="d-flex justify-content-between "><code>import<code className="text-white">Foundation</code></code> <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} /></span>
<code>#if</code><code className="text-white"> canImport</code><code className="text-white">(</code><code className="code-yellow">FoundationNetworking</code><code className="text-white">)</code><br />
<code>import</code> <code className="code-yellow">FoundationNetworking</code><br />
<code>#endif</code><br />

<code>var</code> <code className="text-white">semaphore =</code><code className="code-yellow"> DispatchSemaphore</code> <code className="text-white">(</code><code className="text-white">value: 0</code><code className="text-white">)</code><br />

<code>let</code> <code className="text-white">parameters =</code> <code>"<span className="output text-white"><code className="code-yellow">\r\n     \"otp\":\"017111\",\r\n    \"otpRefferenceId\":\"URMDiiD2UQkIkkQy\",\r\n    \"mobile\":\"7902626443\",\r\n    \"remitterType\":3    \r\n</code></span></code><br />
<code>let</code> <code className="text-white">postData =</code> <code className="code-yellow">parameters.data</code><code className="text-white">(</code><code className="text-white">using: .utf8</code><code className="text-white">)</code><br />

<code>var <code className="text-white"> request = URLRequest</code><code className="text-white">(</code>url: <code>URL</code><code className="text-white">(</code><code className="text-white">string:</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/verify-otp"</code><code className="text-white">)</code><code className="code-yellow">!,timeoutInterval: Double.infinity</code><code className="text-white">)</code></code><br />

<code className="text-white">request.addValue(</code><code className="code-yellow">apiKey, forHTTPHeaderField: "apiKey"</code><code className="text-white">)</code><br />
<code className="text-white">request.addValue(</code><code className="code-yellow">"Bearer token", forHTTPHeaderField: "Authorization"</code><code className="text-white">)</code><br />
<code className="text-white">request.addValue(</code><code className="code-yellow">"application/json", forHTTPHeaderField: "Content-Type"</code><code className="text-white">)</code><br />

<code className="text-white">request.httpMethod =</code>  <code>"POST"</code><br />
<code className="text-white">request.httpBody =</code>  <code>postData</code><br />


<code>let</code> <code className="text-white">task =</code>  <code className="code-yellow">URLSession.shared.dataTask</code><code className="text-white">(with: request)</code> <span className="output text-white"> <code className="code-yellow">data, response, error in </code><br />
 <code>guard let</code> <code className="text-white"> =  data</code> else <span className="output text-white">
   <code> print</code><code className="text-white">(</code><code>String</code><code className="text-white">(describing: error)</code><code className="text-white">)</code><br />
   <code className="text-white">semaphore</code><code>.signal()</code><br />
    <code>return</code><br />
    </span><br />
  <code>print</code><code className="text-white">(</code><code>String</code><code className="text-white">(data: data, encoding: .utf8)!</code><code className="text-white">)</code><br />
  semaphore.signal()<br />
  </span><br />

<code className="text-white">task.</code><code>resume()</code><br />
<code className="text-white">semaphore.</code><code>wait()</code><br />
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







