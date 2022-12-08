import React ,{useState} from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";
import DeleteBeneficiaryResponse from "../ResponseBeneficiary/DeleteBeneficiaryResponse";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};
export const DeleteBeneficiaryCode = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <JavaWrapper />
          <br /> <code className="code-yellow">\"beneficiaryId\":10\r\n"</code>
          );
          <br />
          <code className="text-white">
            Request request = <code>new</code> Request.Builder()
          </code>{" "}
          <br />
          <code className="text-white">.url(</code>
          <code className="code-yellow">
            "localhost:8084/paymento/beneficiary-reg/delete-beneficiary"
          </code>
          <code className="text-white">)</code> <br />
          <code className="text-white">.method(</code>
          <code className="code-yellow">"POST"</code>
          <code className="text-white">,body)</code>
          <br />
          <code className="text-white">.addHeader(</code>
          <code className="code-yellow">"apiKey"</code>
          <code className="code-yellow">, apiKey</code>
          <code className="text-white">)</code> <br />
          <code className="text-white">.addHeader(</code>
          <code className="code-yellow">"Authorization"</code>
          <code className="code-yellow">, "Bearer token"</code>
          <code className="text-white">)</code> <br />
          <code className="text-white">.addHeader(</code>
          <code className="code-yellow">"Content-Type"</code>
          <code className="code-yellow">, "application/json"</code>
          <code className="text-white">)</code> <br />
          <code className="text-white">.build();</code>
          <br />
          <code className="text-white">
            Response response = client.newCall(request).execute();
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const PythonDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <br />{" "}
          <span className="d-flex justify-content-between">
            <code>
              import <code className="text-white">requests</code>
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("python")}
            />
          </span>
          <br /> <code>import</code> <code className="text-white">json</code>
          <br />
          <code className="text-white"> url =</code>{" "}
          <code className="code-yellow">
            "localhost:8084/paymento/beneficiary-reg/delete-beneficiary"
          </code>
          <br />
          <br />
          <code className="text-white">payload = json.dumps</code>({" "}
          <span className="output text-white">
            <br />
            <code>"beneficiaryId"</code> <span>: </span>{" "}
            <code className="code-yellow">10</code>
            <br />
          </span>
          ) <br />
          <br />
          <code className="text-white">
            headers ={" "}
            <span className="output  text-white">
              <br />
              <code>'apiKey'</code>:{" "}
              <code className="code-yellow">'apiKey'</code> ,<br />
              <code>'Authorization'</code>:{" "}
              <code className="code-yellow">'Bearer token'</code>,<br />
              <code>'Content-Type'</code>:
              <code className="code-yellow"> 'application/json'</code>
              <br />
            </span>
          </code>
          <br />
          <code className="text-white"> response = requests.request(</code>
          <code className="code-yellow">"POST"</code>
          <code className="text-white">
            , url, headers=headers, data=payload)
          </code>
          <br />
          <code>print</code>
          <code className="text-white">(response.text)</code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const ShellDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">

      <ShellWrapper/>
      <br/> <code className="text-white"> --body-data </code>
      <span>'</span><span className="output  text-white"><br />
      <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />
         
            </span><span>'   \</span> <br />     
            <code className="code-yellow">'localhost:8084/paymento/beneficiary-reg/delete-beneficiary'</code>
            </div>
 
            </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const PHPDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <code> &#60;&#63;php</code>
          <br />
          <code className="text-white">$curl = curl_init();</code>
          <br />
          <code className="text-white">
            curl_setopt_array(
            <code className="code-yelllow">
              $curl,<code className="text-white"> array(</code>
            </code>
          </code>
          <br />
          <code>
            CURLOPT_URL =&#62;{" "}
            <code className="code-yellow">
              'localhost:8084/paymento/beneficiary-reg/delete-beneficiary',
            </code>
          </code>
          <br />
          <code>
            CURLOPT_RETURNTRANSFER =&#62;{" "}
            <code className="code-yellow">true,</code>
          </code>{" "}
          <br />
          <code>
            CURLOPT_ENCODING =&#62; <code className="code-yellow">'',</code>
          </code>
          <br />
          <code>
            CURLOPT_MAXREDIRS =&#62; <code className="code-cyan">10,</code>
          </code>
          <br />
          <code>
            CURLOPT_TIMEOUT =&#62; <code className="code-cyan">0,</code>
          </code>
          <br />
          <code>
            CURLOPT_FOLLOWLOCATION =&#62;{" "}
            <code className="code-yellow">true,</code>
          </code>
          <br />
          <code>
            CURLOPT_HTTP_VERSION =&#62;{" "}
            <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code>
          </code>
          <br />
          <code>
            CURLOPT_CUSTOMREQUEST =&#62;{" "}
            <code className="code-yellow">'POST',</code>
          </code>
          <br />
          <code>
            CURLOPT_POSTFIELDS =&#62; <code>'</code>
          </code>
          <br />
          <span className="output text-white">
            <br />
            <code>"beneficiaryId"</code> <span>: </span>{" "}
            <code className="code-yellow">10</code>
            <br />
          </span>
          <code>',</code>
          <br />
          <code>
            CURLOPT_HTTPHEADER =&#62; <code>array(</code>
          </code>
          <br />
          <code>
            'apiKey <span>: </span>{" "}
            <code className="code-yellow">apiKey',</code>
          </code>{" "}
          <br />
          <code>
            "Authorization <span>: </span>
            <code className="code-cyan">Bearer token', </code>
          </code>
          <br />
          <code>
            'Content-Type <span>: </span>
            <code className="code-cyan"> application/json'</code>
          </code>
          <br />
          <code>),</code>
          <br />
          <code className="code-yellow">$response = curl_exec($curl);</code>
          <br />
          <code className="code-yellow">curl_close($curl);</code>
          <br />
          <code>
            echo <code className="code-yellow">$response</code>
          </code>
          ;
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const NodeDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      {" "}
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <code>
            var <code className="text-white"> request =</code>{" "}
            <code>require</code>
            <code>('request');</code>{" "}
          </code>
          <br />
          <code>var </code> <code className="text-white">options = </code>
          <span className="output text-white">
            <br />
            <code>'method' :</code>
            <code className="code-yellow">'POST'</code>
            <br />
            <code>
              'url' :
              <code className="code-yellow">
                'http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary\n',
              </code>
            </code>
            <br />
            <code className="text-white">
              headers ={" "}
              <span className="output  text-white">
                <br />
                <code>'apiKey'</code>:{" "}
                <code className="code-yellow">'apiKey'</code> ,<br />
                <code>'Authorization'</code>:{" "}
                <code className="code-yellow">'Bearer token'</code>,<br />
                <code>'Content-Type'</code>:
                <code className="code-yellow"> 'application/json'</code>
                <br />
              </span>
            </code>
            <br />
            <code className="text-white"> body :</code>
            <code className="text-white">JSON.stringify</code>
            <code className="code-yellow">
              (
              <span className="output">
                <br />
                <code>"remitterPhone"</code> <span>: </span>{" "}
                <code className="code-yellow">"7902626443",</code>
                <br />
              </span>
              )
            </code>
            <br />
          </span>
          <code className="text-white">;</code>
          <br />
          <code className="text-white">
            request(options,<code>function</code>
            <code className="text-white">(error,response)</code>
            <br />
            <span className="output">
              <br />
              <code>if</code> <code className="text-white">(error)</code>{" "}
              <code>
                throw new Error<code className="text-white">(error);</code>
              </code>
              <br />
              <code>console.log(response.body)</code>
              <br />
            </span>
            <code className="text-white">);</code>
          </code>
        </div>
      </CodeWrapper>
      
      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>)
};

export const JavascriptDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">

         <div className="request-wrapper">
            <br /> <span  className="d-flex justify-content-between"><code>var myHeaders = <code>new</code> <code className="text-white">Headers();</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} /></span>
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"apiKey", apiKey</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Authorization","Bearer token"</code><code className="text-white">);</code><br />
            <code className="text-white">myHeaders.</code><code>append</code><code className="text-white">(</code><code className="code-yellow">"Content-Type","application/json"</code><code className="text-white">);</code><br />

            <code className="text-white">var raw = </code><code className="text-white">JSON.stringify</code><code className="code-yellow">(<span className="output text-white"><br />
            <code>"remitterPhone"</code>  <span>: </span> <code className="code-yellow">"7902626443",</code><br />

               </span>)</code><br />
            <code className="text-white">var requestOptions = </code><span className="output text-white"><br />
               <code>"method" :</code><code>"POST"</code><br />
               <code>"headers" :</code><code>"myHeaders"</code><br />
               <code>"body" :</code><code>"raw"</code><br />
               <code>"redirect" :</code><code>"follow"</code><br />
               </span><code className="text-white">;</code><br />

               <code>fetch</code><code className="text-white">(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary\n", requestOptions </code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">response =&#62; response.text()</code><code className="text-white">)</code><br />
  <code>.then</code><code className="text-white">(</code><code className="code-yellow">result =&#62; console.log(result)</code><code className="text-white">)</code><br />
  <code>.catch</code><code className="text-white">(</code><code className="code-yellow">error =&#62; console.log('error',error)</code><code className="text-white">);</code>
 
         </div>


      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const SwiftDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
         <div className="request-wrapper">


         <span  className="d-flex justify-content-between"><code>import <code className="text-white">Foundation</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} /></span>
<code>#if</code><code className="text-white"> canImport</code><code className="text-white">(</code><code className="code-yellow">FoundationNetworking</code><code className="text-white">)</code><br />
<code>import</code> <code className="code-yellow">FoundationNetworking</code><br />
<code>#endif</code><br />

<code>var</code> <code className="text-white">semaphore =</code><code className="code-yellow"> DispatchSemaphore</code> <code className="text-white">(</code><code className="text-white">value: 0</code><code className="text-white">)</code><br />

<code>let</code> <code className="text-white">parameters =</code> <code>"<span className="output text-white"><code className="code-yellow">\r\n         \"remitterPhone\":\"7902626443\"\r\n</code></span></code><br />
<code>let</code> <code className="text-white">postData =</code> <code className="code-yellow">parameters.data</code><code className="text-white">(</code><code className="text-white">using: .utf8</code><code className="text-white">)</code><br />

<code>var <code className="text-white"> request = URLRequest</code><code className="text-white">(</code>url: <code>URL</code><code className="text-white">(</code><code className="text-white">string:</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary\n"</code><code className="text-white">)</code><code className="code-yellow">!,timeoutInterval: Double.infinity</code><code className="text-white">)</code></code><br />

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

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export function ClibcurlBeneficiaryDelete() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <br />
          <code className="text-white">CURL *curl;</code>
          <br />
          <code className="text-white">CURLcode res;</code>
          <br />
          <code className="text-white">curl = curl_easy_init();</code>
          <br />
          <code>if</code>
          <code className="text-white">
            (curl){" "}
            <code className="output text-white ">
              <br />
              <code className="text-white">
                curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST,{" "}
                <code className="code-yellow">"POST"</code> );
              </code>
              <br />
              <code className="text-white">
                curl_easy_setopt(curl, CURLOPT_URL,{" "}
                <code className="code-yellow">
                  "http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary"
                </code>
                );
              </code>
              <br />
              <code className="text-white">
                curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
              </code>
              <br />
              <code className="text-white">
                curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL,
                <code className="code-yellow"> "https"</code>);
              </code>
              <br />
              <code>struct </code>
              <code className="text-white">curl_slist *headers = NULL;</code>
              <br />{" "}
              <code className="text-white">
                headers = curl_slist_append(headers,{" "}
                <code className="code-yellow">"apiKey: "</code>);
              </code>
              <br />
              <code className="text-white">
                headers = curl_slist_append(headers,{" "}
                <code className="code-yellow">
                  "Content-Type: application/json"
                </code>
                );
              </code>
              <br />
              <code className="text-white">
                {" "}
                curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
              </code>
              <br />
              <code>const char</code>{" "}
              <code className="code-yellow">
                <code className="text-white">*data = </code>"
                <code className="output code-yellow">
                  {" "}
                  \r\n \"remitterPhone\":\"7902626443\",\r\n
                </code>
                \r\n\r\n\r\n\r\n ";
              </code>
              <br />
              <code className="text-white">
                curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
              </code>
              <br />
              <code className="text-white">res = curl_easy_perform(curl);</code>
              <br />
            </code>
          </code>
          <br />
          <code className="text-white">curl_easy_cleanup(curl);</code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
}

export function GonativeBeneficiaryDelete() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <br />
          <code>package</code>
          <code className="text-white">main</code>
          <br />
          <code> import </code>
          <code className="text-white">
            (
            <br />
            <code className="code-yellow">
              "fmt"
              <br /> "strings"
              <br /> "net/http"
              <br />
              "io/ioutil"
            </code>
            <br />)
          </code>
          <br />
          <code>func</code> <code className="text-white">main()</code>{" "}
          <code className="output text-white ">
            <br />
            <code className="text-white"> url := </code>
            <code className="code-yellow">
              "http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary"
            </code>
            <br />
            <code className="text-white">method := </code>
            <code className="code-yellow">"POST"</code>
            <br />
            <code className="text-white">
              payload := strings.NewReader(
              <code className="code-yellow">
                `
                <code className="output text-white ">
                  `+<code className="code-yellow">"</code>
                  <br />
                  <code className="code-yellow">"+`</code>
                  <br />
                  <code className="text-white">
                    "remitterPhone":
                    <code className="code-yellow">"7902626443"</code>`+"
                  </code>
                  <br />
                  <code className="code-yellow">"+`</code>
                  <br />
                </code>
              </code>
            </code>
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+`</code>
            <br />
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+`</code>
            <br />
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+`</code>
            <br />
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+`</code>
            <br />
            <code className="code-yellow">`</code>
            <code className="code-yellow">)</code>
            <br />
            <code className="code-yellow">client := &http.Client </code>
            <code className="output code-yellow">
              <br />
            </code>
            <br />
            <code className="code-yellow">
              {" "}
              req, err := http.NewRequest(method, url, payload)
            </code>
            <br />
            <code className="code-yellow">if err != nil </code>{" "}
            <code className="output code-yellow">
              <br />
              <code className="code-yellow">fmt.Println(err)</code>
              <br />
              <code className="code-yellow"> return</code>
              <br />
            </code>
            <br />
            <code className="code-yellow"> req.Header.Add("apiKey", "")</code>
            <br />
            <code className="code-yellow">
              {" "}
              req.Header.Add("Content-Type", "application/json")
            </code>
            <br />
            <code className="code-yellow">res, err := client.Do(req)</code>
            <br />
            <code className="code-yellow">if err != nil</code>{" "}
            <code className="output code-yellow">
              <br />
              <code className="code-yellow">fmt.Println(err)</code>
              <br />
              <code className="code-yellow"> return</code>
              <br />
            </code>
            <br />
            <code className="code-yellow">defer res.Body.Close()</code>
            <br />
            <code className="code-yellow">
              {" "}
              body, err := ioutil.ReadAll(res.Body)
            </code>
            <br />
            <code className="code-yellow">if err != nil </code>
            <code className="output code-yellow ">
              <br />
              <code className="code-yellow">fmt.Println(err)</code>
              <br />
              <code className="code-yellow">return</code>
              <br />
            </code>
            <br />
            <code className="code-yellow">fmt.Println(string(body))</code>
            <br />
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
}

export function CrestsharpBeneficiaryDelete() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <code>
            var<code className="text-white">client =</code> new{" "}
          </code>
          <code className="text-white">
            {" "}
            RestClient
            <code className="code-yellow">
              ("http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary"
            </code>
            );
          </code>
          <br />
          <code className="text-white">client.Timeout = -1;</code>
          <br />
          <code className="text-white">
            <code>
              var<code className="text-white"> request =</code> new
            </code>{" "}
            RestRequest(Method.POST);
          </code>
          <br />
          <code className="text-white">
            request.AddHeader(<code className="code-yellow">"apiKey"</code>,{" "}
            <code className="code-yellow">""</code>);
          </code>
          <br />
          <code className="text-white">
            request.AddHeader(
            <code className="code-yellow">"Content-Type"</code>,{" "}
            <code className="code-yellow">"application/json"</code>);
          </code>
          <br />
          <code>var</code> <code className="text-white"> body = </code>
          <code className="code-yellow"> @"</code>
          <code className="output code-yellow ">
            <br />
            <code className="code-yellow">
              "{" "}
              <code className="text-white">
                + <code className="c">"\n"</code> +
              </code>
            </code>

            <br />
            <code className="code-yellow">
              @" ""remitterphone"":""7902626443"",
            </code>

            <br />
            <code className="code-yellow">
              "{" "}
              <code className="text-white">
                + <code className="code-yellow">"\n"</code>+{" "}
              </code>
            </code>

            <br />
            <code className="code-yellow">@"</code>
          </code>{" "}
          <br />
          <code className="code-yellow">
            "{" "}
            <code className="text-white">
              + <code className="code-yellow">"\n"</code> +{" "}
            </code>
          </code>
          <br /> <code className="code-yellow">@"";</code>
          <br />
          <code className="text-white">
            request.AddParameter(
            <code className="code-yellow">"application/json"</code>, body,
            ParameterType.RequestBody);
          </code>
          <br />
          <code className="text-white">
            IRestResponse response = client.Execute(request);
          </code>
          <br />
          <code className="text-white">
            Console.WriteLine(response.Content);
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
}

export const RubyDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="Ruby">
          <div>
            <span  className="d-flex justify-content-between"><code className="text-white">require <code className="code-yellow">"uri"</code></code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} /></span>
           
          
            <code className="text-white">require</code>
            <code className="code-yellow">"json"</code>
            <br />
            <code className="text-white">require</code>
            <code className="code-yellow">"net/http"</code>
            <br />
            <code className="text-white">url = URI</code>
            <code className="code-yellow">
              ("http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary")
            </code>
            <br />
            <code className="text-white">
              http = Net<code>::</code>HTTP.new(url.host, url.port);
            </code>
            <br />
            <code className="text-white">
              request = Net<code>::</code>HTTP<code>::</code>Post.new(url)
            </code>
            <br />

            <code className="text-white">
              {" "}
              request
              <span className="code-yellow">
                {" "}
                ["apikey"]<span className="text-white"> = </span>
                "lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"
                <br />
              </span>
            </code>
            <code className="text-white">
              {" "}
              request
              <span className="code-yellow">
                {" "}
                ["Authorization"]<span className="text-white"> = </span>"Bearer"
                <span className="output">
                  <span className="output">token</span>
                </span>
                <br />
              </span>
            </code>
            <br />
            <code className="text-white">
              {" "}
              request
              <span className="code-yellow">
                {" "}
                ["Content-Type"]<span className="text-white"> = </span>
                "application/json"
                <br />
              </span>
            </code>
            <br />
            <code className="text-white">
              request.body = JSON.dump(
              <span className="output">
                <br />
                <code className="code-yellow">
                  "remitterPhone": "7902626443"
                  <br />
                </code>
              </span>
              )
            </code>
            <br />
            <code className="text-white">response = http.request(request)</code>
            <br />
            <code className="text-white">puts response.read_body</code>
          </div>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};

export const PowershellDeleteBeneficiary = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="Powershell">
          <div>
            <span  className="d-flex justify-content-between"><code className="text-white">$headers = New-Object</code><AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} /></span>
            <code className="code-yellow">
              "System.collections.Generic.Dictionary[String],[String]"
            </code>
            <br />
            <code className="text-white">$headers.Add</code>
            <code className="code-yellow">
              ("apikey", "lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No")
            </code>
            <br />
            <code className="text-white">$headers.Add</code>
            <code className="code-yellow">
              ("Authorization", "Bearer
              <span className="output">
                <span className="output">tokken</span>
              </span>
              )
            </code>
            <code className="text-white">$headers.Add</code>
            <code className="code-yellow">
              ("Content-Type", "application/json")
            </code>
            <br />
            <code className="text-white">
              $body ={" "}
              <span className="output code-yellow">
                {" "}
                <span className="text-white">'n</span>{" "}
                `"remitterPhone`":`"7902626443`"
                <br />
                <code className="text-white">'n"</code>
              </span>
            </code>
            <code className="text-white">$response = Invoke-RestMethod</code>
            <code className="code-yellow">
              'http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary'
              <span className="text-white">-Method </span>'POST'
              <span className="text-white">-Headers $headers -Body $body</span>
            </code>
            <br />
            <code className="text-white">$response | ConvertTo-Json</code>
          </div>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={1} setResponse={setResponse}>
        <div className="response-wrapper">
          <DeleteBeneficiaryResponse response={response}/>
        </div>
      </CodeWrapper>
    </>
  );
};