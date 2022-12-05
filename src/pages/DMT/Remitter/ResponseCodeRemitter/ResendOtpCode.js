import React from "react";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

   var c = document.getElementById(id).innerText;
   copy(c);
};


export const JavaResendOtp = () => {
return <>
        <CodeWrapper heading="Request">

         <div className="request-wrapper">
         <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow"> <span className="output">\r\n        \"remitterphone\":\7902900295\r\n </span>  \r\n" <code className="text-white" >);</code> </code></code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"localhost:8084/paymento/remitter-reg/resend-otp"</code>)</code>
          <br/><code  className="text-white">.method(<code  className="code-yellow" >"POST"</code>, body)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"apiKey"</code>, <code  className="code-yellow" >"apiKey"</code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Authorization", "Bearer token"</code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Content-Type", "application/json"</code>)</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">Response response = client.newCall(request).execute();</code>
        
          </div>      
                    
                    
          </CodeWrapper>

          <CodeWrapper heading="Response">

            <div className="response-wrapper" >
                  <code>java responce</code>
               {/* <code>code area</code> */}
            </div>
            </CodeWrapper>

            </>;
};

export const PythonResendOtp = () =>{
return  <>
    
       <CodeWrapper heading="Request">

          <div className="request-wrapper">
          
    
    <br/> <code>import</code>  <code className="text-white">requests</code>
    <br/> <code>import</code> <code className="text-white">json</code><br/>
    <code className="text-white"> url =</code> <code className="code-yellow">"localhost:8084/paymento/remitter-reg/resend-otp"</code><br/>
    <code className="text-white">payload = json.dumps(</code><code className="outputtext-white"><br/>

    <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902900295",</code><br />
  
   )</code><br/>

   <code className="text-white">
   headers = <span className="output "><br/>
   <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
   <code>'Authorization'</code>: <code className="code-yellow">'Bearer token'</code> ,<br/>
   <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
   </span>
  </code><br/>
  <code className="text-white">
   response = requests.request(<code className="code-yellow">"POST"</code>, url, headers=headers, data=payload)<br/>

 <code>print</code><code className="text-white">(response.text)</code>
 </code>
          </div>           
          </CodeWrapper>


          <CodeWrapper heading="Response">

         <div className="response-wrapper" >
               <code>python responce</code>
            {/* <code>code area</code> */}
         </div>
      </CodeWrapper>
          </>
 
};



export const ShellResendOtp= () => {
   return  <>
   
   <CodeWrapper heading="Request">

   <div className="request-wrapper">
 
   
<ShellWrapper/>
   <span className="output  text-white"><br/>       
  <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> 7902900295</code><br />

 </span>     
 <br/> <code className="code-yellow">' \</code>
 <br/><code className="code-yellow">'localhost:8084/paymento/remitter-reg/resend-otp'</code>
      </div>      
    </CodeWrapper>   

    
    <CodeWrapper heading="Response">

      <div className="response-wrapper" >
      <code>shell responce</code>
         {/* <code>code area</code> */}
      </div>
   </CodeWrapper>

   </>        
   
 };

 export const PHPResendOtp= () => {
   return <>
   <CodeWrapper heading="Request">

   <div className="request-wrapper">
            <code>	&#60;&#63;php</code><br/>

            <code className="text-white">$curl = curl_init();</code><br/>

            <code className="text-white">curl_setopt_array(<code className="code-yelllow">$curl,<code className="text-white"> array(</code></code></code><br/>
            <code>CURLOPT_URL =&#62; <code className="code-yellow">'localhost:8084/paymento/remitter-reg/resend-otp',</code></code><br/>
            <code>CURLOPT_RETURNTRANSFER =&#62; <code className="code-yellow">true,</code></code><br/>
            <code>CURLOPT_ENCODING =&#62;  <code className="code-yellow">'',</code></code><br/>
            <code>CURLOPT_MAXREDIRS =&#62;  <code className="code-cyan">10,</code></code><br/>
            <code>CURLOPT_TIMEOUT =&#62;  <code className="code-cyan">0,</code></code><br/>
            <code>CURLOPT_FOLLOWLOCATION =&#62;  <code className="code-yellow">true,</code></code><br/>
            <code>CURLOPT_HTTP_VERSION =&#62;  <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code></code><br/>
            <code>CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST',</code></code><br/>
            <code>CURLOPT_POSTFIELDS =&#62; <code>'</code></code><br/>
            <span className="output text-white"><br />
               <code>"remitterPhone"</code>  <span>: </span> <code className="code-yellow">7902900295</code><br />
        
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
   
   <CodeWrapper heading="Response">

      <div className="response-wrapper" >
            <code>php responce</code>
         {/* <code>code area</code> */}
      </div>
   </CodeWrapper>

   </>
 };

 export const NodeResendOtpCode= () => {
   return <> <CodeWrapper heading="Request">

      <div className="request-wrapper" id="node">
      <span className="d-flex justify-content-between "><code>var <code className="text-white"> request =</code> <code>require</code><code>('request');</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("node")} />  </span>
     <code>var </code> <code className="text-white">options = </code><span className="output text-white"><br />
        <code>'method' :</code><code className="code-yellow">'POST'</code><br />
        <code>'url' :<code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/resend-otp'</code></code><br />
        <code className="text-white">
               headers = <span className="output  text-white"><br />
                  <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br />
                  <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br />
                  <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br />
               </span>,
            </code><br />
            <code className="text-white"> body :</code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output"><br />
               <code>"remitterPhone" :</code><code>"7902626443" ,</code><br />
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
        <div className="response-wrapper">
          <code>node responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
   
    </>
};

export const JavascriptResendOtpCode = () => {
   return <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper" id="javascript">
          <span className="d-flex justify-content-between "> <code>var myHeaders = <code>new</code> <code className="text-white">Headers();</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("javascript")} /></span>      
                 <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"apiKey", apiKey</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Authorization","Bearer token"</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Content-Type","application/json"</code><code className="text-white">);</code><br />

            <code className="text-white">var raw = </code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output text-white"><br />
               <code>"remitterPhone" :</code><code>"7902626443"</code><br />
               </span>)</code><br />
            <code className="text-white">var requestOptions = </code><span className="output text-white"><br />
               <code>"method" :</code><code>"POST"</code><br />
               <code>"headers" :</code><code>"myHeaders"</code><br />
               <code>"body" :</code><code>"raw"</code><br />
               <code>"redirect" :</code><code>"follow"</code><br />
               </span><code className="text-white">;</code><br />

               <code>fetch</code><code className="text-white">(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/resend-otp", requestOptions </code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">response =&#62; response.text()</code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">result =&#62; console.log(result)</code><code className="text-white">)</code><br />
  <code>.catch</code><code className="text-white">(</code><code className="code-yellow">error =&#62; console.log('error',error)</code><code className="text-white">);</code>
 
         </div>


      </CodeWrapper>

      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>js responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
   </>
}

export const SwiftResendOtpCode = () => {
   return <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">


         <span className="d-flex justify-content-between "> <code>import<code className="text-white">Foundation</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} /> </span>  
<code>#if</code><code className="text-white"> canImport</code><code className="text-white">(</code><code className="code-yellow">FoundationNetworking</code><code className="text-white">)</code><br />
<code>import</code> <code className="code-yellow">FoundationNetworking</code><br />
<code>#endif</code><br />

<code>var</code> <code className="text-white">semaphore =</code><code className="code-yellow"> DispatchSemaphore</code> <code className="text-white">(</code><code className="text-white">value: 0</code><code className="text-white">)</code><br />

<code>let</code> <code className="text-white">parameters =</code> <code>"<span className="output text-white"><code className="code-yellow">\r\n    \"remitterPhone\":\"7902626443\",\r\n</code></span></code><br />
<code>let</code> <code className="text-white">postData =</code> <code className="code-yellow">parameters.data</code><code className="text-white">(</code><code className="text-white">using: .utf8</code><code className="text-white">)</code><br />

<code>var <code className="text-white"> request = URLRequest</code><code className="text-white">(</code>url: <code>URL</code><code className="text-white">(</code><code className="text-white">string:</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/resend-otp"</code><code className="text-white">)</code><code className="code-yellow">!,timeoutInterval: Double.infinity</code><code className="text-white">)</code></code><br />

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
        <div className="response-wrapper">
          <code>swift responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
   </>
}

export function GonativeResendOtp(){
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
   <br/><code className="text-white"> url := </code><code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/resend-otp"</code>
   <br/><code className="text-white">method := </code><code  className="code-yellow">"POST"</code>
   <br/><code className="text-white" >payload := strings.NewReader(<code className="code-yellow">`<code className="output text-white ">`+<code className="code-yellow">"</code>
   <br/><code className="code-yellow">"+`</code>
    <br/><code className="text-white">"remitterPhone":<code className="code-yellow">"7902626443"</code>`+"</code>
 
 
   
   
 
 <br/><code className="code-yellow">"+`</code>
 
   <br/></code></code></code><code className="code-yellow">'+"</code>
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

   <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>GO responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
     </>
   )
 }

 export function CrestsharpResendOtp(){
   return(
     <>
      <CodeWrapper heading="Request">
 
 <div className="request-wrapper">
     
  <code>var<code  className="text-white">client =</code> new </code><code  className="text-white"> RestClient<code className="code-yellow">("http://194.195.113.218:8090/paymento/remitter-reg/resend-otp"</code>);</code>
  <br/><code className="text-white">client.Timeout = -1;</code>
  <br/><code  className="text-white"><code>var<code className="text-white"> request =</code> new</code> RestRequest(Method.POST);</code>
  <br/><code className="text-white">request.AddHeader(<code className="code-yellow">"apiKey"</code>, <code className="code-yellow">""</code>);</code>
  <br/><code className="text-white">request.AddHeader(<code className="code-yellow">"Content-Type"</code>, <code className="code-yellow">"application/json"</code>);</code>
  <br/><code>var</code> <code className="text-white"> body = </code><code className="code-yellow" > @"</code><code className="output code-yellow ">
   <br/><code className="code-yellow" >" <code className="text-white">+  <code className="c">"\n"</code> +</code></code>
 
   <br/><code className="code-yellow" >@"       ""remitterphone"":""7902626443"",</code>
 
   <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
  <br/><code className="code-yellow">@"</code></code>  <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code> + </code></code>
  
  <br/><code className="code-yellow">@"</code>
 
  <br/><code className="code-yellow" >" <code className="text-white">+ <code className="code-yellow">"\n"</code>+ </code></code>
 
 
  <br/> <code className="code-yellow">@"";</code>
 
  <br/><code className="text-white">request.AddParameter(<code className="code-yellow">"application/json"</code>, body,  ParameterType.RequestBody);</code>
  <br/><code className="text-white">IRestResponse response = client.Execute(request);</code>
  <br/><code className="text-white">Console.WriteLine(response.Content);</code> 
 
     </div>
     </CodeWrapper>

     <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>C# responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
     </>
   )
 }

 export function ClibcurlResendOtp(){
   return(
     <>
       <CodeWrapper heading="Request">
 
 <div className="request-wrapper">
   <br/><code className="text-white">CURL *curl;</code>
   <br/><code className="text-white">CURLcode res;</code>
   <br/><code className="text-white">curl = curl_easy_init();</code>
   <br/><code>if</code><code className="text-white" >(curl) <code className="output text-white "> 
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, <code className="code-yellow" >"POST"</code> );</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_URL, <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/resend-otp"</code>);</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);</code>
   <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL,<code className="code-yellow"> "https"</code>);</code>
   <br/><code >struct </code><code className="text-white">curl_slist *headers = NULL;</code>
   <br/> <code className="text-white">headers = curl_slist_append(headers, <code className="code-yellow">"apiKey: "</code>);</code>
   <br/><code className="text-white">headers = curl_slist_append(headers, <code className="code-yellow">"Content-Type: application/json"</code>);</code>
    <br/><code className="text-white"> curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);</code>
 
    <br/><code>const char</code> <code className="code-yellow"><code className="text-white">*data =</code>"<code className="output code-yellow"> \r\n    \"remitterPhone\":\"7902626443\",\r\n</code>\r\n\r\n\r\n	   ";</code>
    <br/><code className="text-white">curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);</code>
    <br/><code className="text-white">res = curl_easy_perform(curl);</code>
    
    <br/>
    </code></code>
    <br/><code className="text-white">curl_easy_cleanup(curl);</code>
   
 
    </div>
    </CodeWrapper>
    <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>C responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
     </>
   )
 }