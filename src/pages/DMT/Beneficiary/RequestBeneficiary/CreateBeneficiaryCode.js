import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";
import CreateBeneficiaryResponse from "../ResponseBeneficiary/CreateBeneficiaryResponse";

const copyToClipboard = (id) => {

   var c = document.getElementById(id).innerText;
   copy(c);
};


export const CreateBeneficiaryCode = () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" >

         <JavaWrapper />
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
   
   <CreateBeneficiaryResponse />
   
    </>
};

export const PythonBeneficiary = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
            <br /> <code>import</code>  <code className="text-white">requests</code>
            <br /> <code>import</code> <code className="text-white">json</code><br />
            <code className="text-white"> url =</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code><br />
            <code className="text-white">payload = json.dumps</code>( <span className="output  text-white"><br />

               <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
               <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
               <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> 7902900295,</code><br />
               <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">8596321478,</code><br />
               <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888892,</code><br />
               <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
               <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
               <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
               <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />

            </span>) <br />

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

      <CreateBeneficiaryResponse />
   </>
}

export const ShellBeneficiary = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">

            <ShellWrapper />
            <br /> <code className="text-white"> --body-data </code>
            <span>'</span><span className="output  text-white"><br />
               <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
               <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
               <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> "7902900295,</code><br />
               <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">8596321478,</code><br />
               <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888892,</code><br />
               <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
               <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
               <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
               <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />
            </span><span>'   \</span> <br />
            <code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary'</code>
         </div>

      </CodeWrapper>

      <CreateBeneficiaryResponse />
   </>
}

export const PHPBeneficiary = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
            <code>	&#60;&#63;php</code><br/>

            <code className="text-white">$curl = curl_init();</code>

            <code className="text-white">curl_setopt_array(<code className="code-yelllow">$curl,<code className="text-white"> array(</code></code></code><br/>
            <code>CURLOPT_URL =&#62; <code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary',</code></code><br/>
            <code>CURLOPT_RETURNTRANSFER =&#62; <code className="code-yellow">true,</code></code><br/>
            <code>CURLOPT_ENCODING =&#62;  <code className="code-yellow">'',</code></code><br/>
            <code>CURLOPT_MAXREDIRS =&#62;  <code className="code-cyan">10,</code></code><br/>
            <code>CURLOPT_TIMEOUT =&#62;  <code className="code-cyan">0,</code></code><br/>
            <code>CURLOPT_FOLLOWLOCATION =&#62;  <code className="code-yellow">true,</code></code><br/>
            <code>CURLOPT_HTTP_VERSION =&#62;  <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code></code><br/>
            <code>CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST',</code></code><br/>
            <code>CURLOPT_POSTFIELDS =&#62; <code>'</code></code><br/>
            <span className="output text-white"><br />
               <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
               <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
               <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> "7902900295,</code><br />
               <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">8596321478,</code><br />
               <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888892,</code><br />
               <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
               <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
               <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
               <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />
            </span><code>',</code><br/>


            <code>CURLOPT_HTTPHEADER =&#62; <code>array(</code></code>
            <code>'apiKey <span>: </span> <code className="code-yellow">apiKey',</code></code> <br />
            <code>"Authorization <span>: </span><code className="code-cyan">Bearer  token', </code></code><br />
            <code>'Content-Type  <span>: </span><code className="code-cyan"> application/json'</code></code><br />
            <code>),</code><br/>
            <code className="text-white">$response = curl_exec($curl);</code><br />
            <code className="text-white">curl_close($curl);</code><br/>
            <code>echo <code className="text-white">$response</code></code>;
         </div>
         </CodeWrapper>

         <CreateBeneficiaryResponse />

      
            </>
}

export const NodeRegisterBeneficiary= () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" >
     <code>var <code className="text-white"> request =</code> <code>require</code><code>('request');</code>  </code><br />
     <code>var </code> <code className="text-white">options = </code><span className="output text-white"><br />
        <code>'method' :</code><code className="code-yellow">'POST'</code><br />
        <code>'url' :<code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary',</code></code><br />
        <code className="text-white">
               headers = <span className="output  text-white"><br />
                  <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br />
                  <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br />
                  <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br />
               </span>
            </code><br />
            <code className="text-white"> body :</code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output"><br />
            <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
               <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
               <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> 7902900295,</code><br />
               <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">7902900295,</code><br />
               <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888882,</code><br />
               <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
               <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
               <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
               <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />               </span>)</code><br />
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
   
   <CreateBeneficiaryResponse />
   
    </>
};

export const JavascriptRegisterBeneficiary = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
            <br /> <code>var myHeaders =</code> <code>new</code> <code className="text-white">Headers();</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"apiKey", apiKey</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Authorization","Bearer token"</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Content-Type","application/json"</code><code className="text-white">);</code><br />

            <code className="text-white">var raw = </code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output text-white"><br />
            <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
               <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
               <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> 7902900295,</code><br />
               <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">7902900295,</code><br />
               <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888882,</code><br />
               <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
               <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
               <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
               <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />  
               </span>)</code><br />
            <code className="text-white">var requestOptions = </code><span className="output text-white"><br />
               <code>"method" :</code><code>"POST"</code><br />
               <code>"headers" :</code><code>"myHeaders"</code><br />
               <code>"body" :</code><code>"raw"</code><br />
               <code>"redirect" :</code><code>"follow"</code><br />
               </span><code className="text-white">;</code><br />

               <code>fetch</code><code className="text-white">(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary", requestOptions </code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">response =&#62; response.text()</code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">result =&#62; console.log(result)</code><code className="text-white">)</code><br />
  <code>.catch</code><code className="text-white">(</code><code className="code-yellow">error =&#62; console.log('error',error)</code><code className="text-white">);</code>
 
         </div>


      </CodeWrapper>

      <CreateBeneficiaryResponse />
   </>
}

export const SwiftRegisterBeneficiary = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">


         <code>import</code> <code className="text-white">Foundation</code><br />
<code>#if</code><code className="text-white"> canImport</code><code className="text-white">(</code><code className="code-yellow">FoundationNetworking</code><code className="text-white">)</code><br />
<code>import</code> <code className="code-yellow">FoundationNetworking</code><br />
<code>#endif</code><br />

<code>var</code> <code className="text-white">semaphore =</code><code className="code-yellow"> DispatchSemaphore</code> <code className="text-white">(</code><code className="text-white">value: 0</code><code className="text-white">)</code><br />

<code>let</code> <code className="text-white">parameters =</code> <code>"<span className="output text-white"><code className="code-yellow">\r\n       \"beneficiaryName\": \"anu\",\r\n        \"beneficiaryBankId\": \"36\",\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n        \"beneficiaryMobileNumber\":\"7902900295\",\r\n        \"accountNumber\": \"88654888882\",\r\n        \"address\": \"Calicut \",\r\n        \"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\",\r\n        \"branchName\": \"Mavoor Road\"\r\n</code></span></code><br />
<code>let</code> <code className="text-white">postData =</code> <code className="code-yellow">parameters.data</code><code className="text-white">(</code><code className="text-white">using: .utf8</code><code className="text-white">)</code><br />

<code>var <code className="text-white"> request = URLRequest</code><code className="text-white">(</code>url: <code>URL</code><code className="text-white">(</code><code className="text-white">string:</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code><code className="text-white">)</code><code className="code-yellow">!,timeoutInterval: Double.infinity</code><code className="text-white">)</code></code><br />

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

      <CreateBeneficiaryResponse />
   </>
}

export function GonativeBeneficiaryRegister(){
   return(
     <>
 
 <CodeWrapper heading="Request">
 
 <div className="request-wrapper">
    <br/><code>package</code><code className="text-white">main</code> 
   <br/><code> import </code><code className="text-white" >(
   <br/><code className="code-yellow">"fmt"
   <br/> "strings"
   <br/> "net/http"
   <br/>"io/ioutil"</code>
   <br/>
   )</code>
   <br/><code>func</code> <code className="text-white">main()</code> <code className="output text-white ">
   <br/><code className="text-white"> url := </code><code className="code-yellow">"ttp://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>
   <br/><code className="text-white">method := </code><code  className="code-yellow">"POST"</code>
   <br/><code className="text-white" >payload := strings.NewReader(<code className="code-yellow">`<code className="output text-white ">`+<code className="code-yellow">"</code>
   <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"beneficiaryName"<code className="code-yellow">"anu"</code>`+"</code>
   <br/><code className="code-yellow">"+`</code>
   <br/><code className="text-white">"beneficiaryBankId"<code className="code-yellow">"36"</code>`+"</code>
   <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"remitterMobileNumber"<code className="code-yellow">"7902900295"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"beneficiaryMobileNumber"<code className="code-yellow">"7902900295"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"accountNumber"<code className="code-yellow">"88654888882"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"address"<code className="code-yellow">"Calicut"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"ifscCode"<code className="code-yellow">"UTIB0002916"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"accountHolderName"<code className="code-yellow">"Venu"</code>`+"</code>
    <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"branchName"<code className="code-yellow">"Mavoor Road"</code>`+"</code>
 
 
 
   <br/><code className="code-yellow">"+`</code>
   <br/></code></code></code><code className="code-yellow">'+"</code>
 
 
 
   <br/><code className="code-yellow">"+`</code>
   <br/><code className="code-yellow">'+"</code>
   <br/><code className="code-yellow">"+`</code>
   <br/><code className="code-yellow">'+"</code>
   <br/><code className="code-yellow">"+`</code>
   <br/><code className="code-yellow">'+"</code>
   <br/><code className="code-yellow">"+`</code>
   <br/><code className="code-yellow">'+"</code>
   <br/><code className="code-yellow">"+`</code>
 
 
   <br/><code className="code-yellow">`</code><code className="code-yellow">)</code>
   <br/><code className="code-yellow">client := &http.Client </code ><code className="output code-yellow">
 
   <br/></code>
   <br/><code className="code-yellow">  req, err := http.NewRequest(method, url, payload)</code>
   <br/><code className="code-yellow">if err != nil  </code>   <code className="output code-yellow">
   <br/><code className="code-yellow">fmt.Println(err)</code>  
   <br/><code className="code-yellow"> return</code>  
   <br/>
   </code>
   <br/><code className="code-yellow"> req.Header.Add("apiKey", "")</code>
   <br/><code className="code-yellow">  req.Header.Add("Content-Type", "application/json")</code>
   <br/><code className="code-yellow">res, err := client.Do(req)</code>
   <br/><code className="code-yellow">if err != nil</code> <code className="output code-yellow">
     <br/><code className="code-yellow">fmt.Println(err)</code>
     <br/><code className="code-yellow"> return</code>
     <br/></code>
     <br/><code className="code-yellow">defer res.Body.Close()</code>
     <br/><code className="code-yellow"> body, err := ioutil.ReadAll(res.Body)</code>
     <br/><code className="code-yellow">if err != nil </code><code className="output code-yellow ">
     <br/><code className="code-yellow">fmt.Println(err)</code>
     <br/><code className="code-yellow">return</code>
     <br/></code >
     <br/><code className="code-yellow">fmt.Println(string(body))</code>
 
  <br/>
 
   </code>
   </div>
  </CodeWrapper>
  <CreateBeneficiaryResponse />
     </>
   )
 }

 export function ClibcurlBeneficiaryRegister(){
   return(
     <>
        <CodeWrapper heading="Request">
 
 <div className="request-wrapper">
   <br/><code className="text-white">CURL *curl;</code>
   <br/><code className="text-white">CURLcode res;</code>
   <br/><code className="text-white">curl = curl_easy_init();</code>
   <br/><code>if</code><code className="text-white" >(curl) <code className="output text-white "> 
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, <code className="code-yellow" >"POST"</code> );</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_URL, <code className="code-yellow" >"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>);</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL,<code className="code-yellow"> "https"</code>);</code>
   <br/><code >struct </code><code className="text-white">curl_slist *headers = NULL;</code>
   <br/> <code className="text-white">headers = curl_slist_append(headers, <code className="code-yellow">"apiKey: "</code>);</code>
   <br/><code className="text-white">headers = curl_slist_append(headers, <code className="code-yellow">"Content-Type: application/json"</code>);</code>
    <br/><code className="text-white"> curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);</code>
 
    <br/><code>const char</code> <code className="code-yellow"><code className="text-white">*data = </code>"<code className="output code-yellow"> \r\n        \"beneficiaryName\": \"anu\",\r\n        \"beneficiaryBankId\": \"36\",\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n        \"beneficiaryMobileNumber\":\"7902900295\",\r\n        \"accountNumber\": \"88654888882\",\r\n        \"address\": \"Calicut \",\r\n        \"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\",\r\n        \"branchName\": \"Mavoor Road\",\r\n</code> \r\n\r\n\r\n\r\n "</code>;
    <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);</code>
    <br/><code className="text-white">res = curl_easy_perform(curl);</code>
    
 
    <br/>
    </code></code>
    <br/><code className="text-white">curl_easy_cleanup(curl);</code>
    </div>
  </CodeWrapper>

  <CreateBeneficiaryResponse />
     </>
   )
 }


 export function CrestsharpBeneficiaryRegister(){
   return(
     <>
      <CodeWrapper heading="Request">
 
 <div className="request-wrapper">
  <code>var<code  className="text-white">client =</code> new </code><code  className="text-white"> RestClient<code className="code-yellow">(""http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary""</code>);</code>
  <br/><code className="text-white">client.Timeout = -1;</code>
  <br/><code  className="text-white"><code>var<code className="text-white"> request =</code> new</code> RestRequest(Method.POST);</code>
  <br/><code className="text-white">request.AddHeader(<code className="code-yellow">"apiKey"</code>, <code className="code-yellow">""</code>);</code>
  <br/><code className="text-white">request.AddHeader(<code className="code-yellow">"Content-Type"</code>, <code className="code-yellow">"application/json"</code>);</code>
  <br/><code>var</code> <code className="text-white"> body = </code><code className="code-yellow" > @"</code><code className="output code-yellow ">
   <br/><code className="code-yellow" >" <code className="text-white">+  <code className="c">"\n"</code> +</code></code>
 
   <br/><code className="code-yellow" >@"       ""beneficiaryName"": ""anu"",</code>
 
   <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
   <br/><code className="code-yellow" >@"        ""beneficiaryBankId"": ""36"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"        ""remitterMobileNumber"": ""7902900295"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"       "beneficiaryMobileNumber"":""7902900295"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"       ""accountNumber"": ""88654888882"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"      ""address"": ""Calicut "",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"       ""ifscCode"": ""UTIB0002916"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 <br/><code className="code-yellow" >@"      ""accountHolderName"": ""Venu"",</code>
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
 <br/><code className="code-yellow" >@"       ""branchName"": ""Mavoor Road"",</code>
 
 
 
 <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
  <br/><code className="code-yellow">@"</code></code> 
   <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code> + </code></code>
   
  <br/><code className="code-yellow">@"</code>
  <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
  <br/><code className="code-yellow">@"</code>
  <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
  <br/> <code className="code-yellow">@"";</code>
 
 
 
 
  <br/><code className="text-white">request.AddParameter(<code className="code-yellow">"application/json"</code>, body,  ParameterType.RequestBody);</code>
  <br/><code className="text-white">IRestResponse response = client.Execute(request);</code>
  <br/><code className="text-white">Console.WriteLine(response.Content);</code> 
  </div>
  </CodeWrapper>

  
  <CreateBeneficiaryResponse />
  </>
 
   )
 }





