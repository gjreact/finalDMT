import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import SendMoneyResponse from "../ResponseSendmoney/SendMoneyResponse";
import JavaWrapper from "../../CodeWrapper/JavaWrapper";

const copyToClipboard = (id) => {
  var c = document.getElementById(id).innerText;
  copy(c);
};

export const JavaSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="java">
          <JavaWrapper />
          <br />
          <code className="code-yellow">
            "\r\n{" "}
            <span className="output">
              \r\n \"beneficiaryId\":36, \r\n \"remitterId\":26,\r\n
              \"Amount\":200\r\n{" "}
            </span>{" "}
            \r\n\r\n\t \r\n" <code className="text-white">);</code>{" "}
          </code>
          <br />
          <code className="text-white">
            Request request = <code>new</code> Request.Builder()
          </code>
          <br />
          <code className="text-white">
            .url({" "}
            <code className="code-yellow">
              "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
            </code>
            )
          </code>
          <br />
          <code className="text-white">
            .method(<code className="code-yellow">"POST"</code>, body)
          </code>
          <br />
          <code className="text-white">
            .addHeader(<code className="code-yellow">"apiKey"</code>,{" "}
            <code className="code-yellow">"apikey"</code>)
          </code>
          <br />
          <code className="text-white">
            .addHeader(
            <code className="code-yellow">
              "Content-Type", "application/json"
            </code>
            )
          </code>
          <br /> <code className="text-white">.build();</code>
          <br />{" "}
          <code className="text-white">
            Response response = client.newCall(request).execute();
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const PythonSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="python">
          <br />
          <span className="d-flex justify-content-between">
            <code>
              {" "}
              <code>import</code> <span className="text-white">requests</span>
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("python")}
            />
          </span>
          <code>import</code> <code className="text-white">json</code>
          <br />
          <code className="text-white"> url =</code>{" "}
          <code className="code-yellow">
            "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
          </code>
          <br />
          <code className="text-white">payload = json.dumps</code>({" "}
          <p className="output link-heading text-white">
            <br />
            <code>"beneficiaryBankId" </code> <span>: </span>
            <code className="code-cyan"> 36,</code>
            <br />
            <code>"remitterId" </code> <span>: </span>
            <code className="code-cyan"> 26,</code>
            <br />
            <code> "Amount"</code> <span>: </span>
            <code className="code-cyan"> 200</code>
            <br />
          </p>
          ) <br />
          <code className="text-white">
            headers ={" "}
            <p className="output link-heading text-white">
              <br />
              <code>'apiKey'</code>:{" "}
              <code className="code-yellow">'apiKey'</code> ,
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
            <code>print</code>(response.text)
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const ShellSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="shell">
          <code className="d-flex justify-content-between">
            <code className="text-white">
              wget --no-check-certificate --quiet \
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("shell")}
            />
          </code>
          <code className="text-white">--method POST \</code>
          <br /> <code className="text-white"> --timeout=0 \</code>
          <br />{" "}
          <code className="text-white">
            {" "}
            --header <code className="code-yellow"> 'apiKey': "apiKey" \</code>
          </code>
          <br />{" "}
          <code className="text-white">
            --header{" "}
            <code className="code-yellow">
              {" "}
              'Content-Type: application/json' \
            </code>
          </code>
          <br /> <code className="text-white">--body-data '</code>
          <p className="output link-heading text-white">
            <br />
            <code>"beneficiaryBankId" </code> <span>: </span>
            <code className="code-cyan"> 36,</code>
            <br />
            <code>"remitterId" </code> <span>: </span>
            <code className="code-cyan"> 26,</code>
            <br />
            <code> "Amount"</code> <span>: </span>
            <code className="code-cyan"> 200</code>
            <br />
          </p>
          <br /> <code className="code-yellow">' \</code>
          <br />
          <code className="code-yellow">
            'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money'
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const PHPSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="php">
          <code> &#60;&#63;php</code>
          <br />
          <span className="d-flex justify-content-between">
            {" "}
            <code className="text-white">$curl = curl_init();</code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("php")}
            />
          </span>
          <code className="text-white">
            curl_setopt_array($curl, <code>array</code>(
          </code>
          <br />
          <code>
            CURLOPT_URL =&#62;
            <code>
              {" "}
              'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money'
            </code>
            ,
          </code>
          <br />
          <code className="text-white">
            CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,
          </code>
          <br />
          <code className="text-white">
            {" "}
            CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,
          </code>
          <br />
          <code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
          <br />
          <code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
          <br />
          <code className="text-white">
            {" "}
            CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,
          </code>
          <br />
          <code className="text-white">
            CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,
          </code>
          <br />
          <code className="text-white">
            {" "}
            CURLOPT_CUSTOMREQUEST =&#62;{" "}
            <code className="code-yellow">'POST'</code>,
          </code>
          <br />
          <code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code>
          <code className="code-yellow">
            {" "}
            '<br />
            <code className="output code-yellow">
              <br />
              "beneficiaryId":36,
              <br />
              "remitterId":26,
              <br />
              "Amount":200
              <br />
            </code>
            <br />
            ' ,<br />
            <code className="text-white">
              CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br />
              <code className="code-yellow">
                'apiKey': "apiKey", <br />
                'Content-Type: application/json'
              </code>
              <br />
            </code>
            ),
            <br />
            ));
          </code>
          <br />
          <code className="text-white">$response = curl_exec($curl);</code>
          <br />
          <code className="text-white">
            <code>echo </code>$response;
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const NodeSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      {" "}
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="node">
          <span className="d-flex justify-content-between">
            {" "}
            <code>
              var <code className="text-white"> request =</code>{" "}
              <code>require</code>
              <code>('request');</code>{" "}
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("node")}
            />
          </span>
          <code>var </code> <code className="text-white">options = </code>
          <span className="output text-white">
            <br />
            <code>'method' :</code>
            <code className="code-yellow">'POST'</code>
            <br />
            <code>
              'url' :
              <code className="code-yellow">
                'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money\n',
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
                <code>"beneficiaryId"</code> <span>: </span>{" "}
                <code className="code-yellow">36,</code>
                <br />
                <code>"remitterId"</code> <span>: </span>{" "}
                <code className="code-yellow">26,</code>
                <br />
                <code>"Amount"</code> <span>: </span>{" "}
                <code className="code-yellow">200</code>
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
      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const JavascriptSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="javascript">
          <span className="d-flex justify-content-between">
            {" "}
            <code>
              var myHeaders = <code>new</code>{" "}
              <code className="text-white">Headers();</code>
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("javascript")}
            />
          </span>
          <code className="text-white">myHeaders.</code>
          <code>append</code>
          <code className="text-white">(</code>
          <code className="code-yellow">"apiKey", apiKey</code>
          <code className="text-white">);</code>
          <br />
          <code className="text-white">myHeaders.</code>
          <code>append</code>
          <code className="text-white">(</code>
          <code className="code-yellow">"Authorization","Bearer token"</code>
          <code className="text-white">);</code>
          <br />
          <code className="text-white">myHeaders.</code>
          <code>append</code>
          <code className="text-white">(</code>
          <code className="code-yellow">"Content-Type","application/json"</code>
          <code className="text-white">);</code>
          <br />

          <code className="text-white">var raw = </code>
          <code className="text-white">JSON.stringify</code>
          <code className="code-yellow">
            (
            <span className="output text-white">
              <br />
              <code>"beneficiaryId"</code> <span>: </span>{" "}
              <code className="code-yellow">36,</code>
              <br />
              <code>"remitterId"</code> <span>: </span>{" "}
              <code className="code-yellow">26,</code>
              <br />
              <code>"Amount"</code> <span>: </span>{" "}
              <code className="code-yellow">200</code>
              <br />
            </span>
            )
          </code>
          <br />
          <code className="text-white">var requestOptions = </code>
          <span className="output text-white">
            <br />
            <code>"method" :</code>
            <code>"POST"</code>
            <br />
            <code>"headers" :</code>
            <code>"myHeaders"</code>
            <br />
            <code>"body" :</code>
            <code>"raw"</code>
            <br />
            <code>"redirect" :</code>
            <code>"follow"</code>
            <br />
          </span>
          <code className="text-white">;</code>
          <br />
          <code className="code-yellow">
            "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money\n",
            requestOptions{" "}
          </code>
          <code className="text-white">)</code>
          <br />
          <code>.then</code>
          <code className="text-white">(</code>
          <code className="code-yellow">response =&#62; response.text()</code>
          <code className="text-white">)</code>
          <br />
          <code>.then</code>
          <code className="text-white">(</code>
          <code className="code-yellow">result =&#62; console.log(result)</code>
          <code className="text-white">)</code>
          <br />
          <code>.catch</code>
          <code className="text-white">(</code>
          <code className="code-yellow">
            error =&#62; console.log('error',error)
          </code>
          <code className="text-white">);</code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const SwiftSendMoney = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="swift">
          <span className="d-flex justify-content-between">
            <code>
              import <code className="text-white">Foundation</code>
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("swift")}
            />
          </span>
          <code>#if</code>
          <code className="text-white"> canImport</code>
          <code className="text-white">(</code>
          <code className="code-yellow">FoundationNetworking</code>
          <code className="text-white">)</code>
          <br />
          <code>import</code>{" "}
          <code className="code-yellow">FoundationNetworking</code>
          <br />
          <code>#endif</code>
          <br />
          <code>var</code> <code className="text-white">semaphore =</code>
          <code className="code-yellow"> DispatchSemaphore</code>{" "}
          <code className="text-white">(</code>
          <code className="text-white">value: 0</code>
          <code className="text-white">)</code>
          <br />
          <code>let</code> <code className="text-white">parameters =</code>{" "}
          <code>
            "
            <span className="output text-white">
              <code className="code-yellow">
                \r\n \"beneficiaryId\":36,\r\n \"remitterId\":26,\r\n
                \"Amount\":200\r\n
              </code>
            </span>
          </code>
          <br />
          <code>let</code> <code className="text-white">postData =</code>{" "}
          <code className="code-yellow">parameters.data</code>
          <code className="text-white">(</code>
          <code className="text-white">using: .utf8</code>
          <code className="text-white">)</code>
          <br />
          <code>
            var <code className="text-white"> request = URLRequest</code>
            <code className="text-white">(</code>url: <code>URL</code>
            <code className="text-white">(</code>
            <code className="text-white">string:</code>{" "}
            <code className="code-yellow">
              "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money\n"
            </code>
            <code className="text-white">)</code>
            <code className="code-yellow">
              !,timeoutInterval: Double.infinity
            </code>
            <code className="text-white">)</code>
          </code>
          <br />
          <code className="text-white">request.addValue(</code>
          <code className="code-yellow">
            apiKey, forHTTPHeaderField: "apiKey"
          </code>
          <code className="text-white">)</code>
          <br />
          <code className="text-white">request.addValue(</code>
          <code className="code-yellow">
            "Bearer token", forHTTPHeaderField: "Authorization"
          </code>
          <code className="text-white">)</code>
          <br />
          <code className="text-white">request.addValue(</code>
          <code className="code-yellow">
            "application/json", forHTTPHeaderField: "Content-Type"
          </code>
          <code className="text-white">)</code>
          <br />
          <code className="text-white">request.httpMethod =</code>{" "}
          <code>"POST"</code>
          <br />
          <code className="text-white">request.httpBody =</code>{" "}
          <code>postData</code>
          <br />
          <code>let</code> <code className="text-white">task =</code>{" "}
          <code className="code-yellow">URLSession.shared.dataTask</code>
          <code className="text-white">(with: request)</code>{" "}
          <span className="output text-white">
            {" "}
            <code className="code-yellow">data, response, error in </code>
            <br />
            <code>guard let</code> <code className="text-white"> = data</code>{" "}
            else{" "}
            <span className="output text-white">
              <code> print</code>
              <code className="text-white">(</code>
              <code>String</code>
              <code className="text-white">(describing: error)</code>
              <code className="text-white">)</code>
              <br />
              <code className="text-white">semaphore</code>
              <code>.signal()</code>
              <br />
              <code>return</code>
              <br />
            </span>
            <br />
            <code>print</code>
            <code className="text-white">(</code>
            <code>String</code>
            <code className="text-white">(data: data, encoding: .utf8)!</code>
            <code className="text-white">)</code>
            <br />
            semaphore.signal()
            <br />
          </span>
          <br />
          <code className="text-white">task.</code>
          <code>resume()</code>
          <br />
          <code className="text-white">semaphore.</code>
          <code>wait()</code>
          <br />
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export function ClibcurlSendMoney() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="c">
          <br />
          <span className="d-flex justify-content-between">
            <code className="text-white">CURL *curl;</code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("c")}
            />
          </span>
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
                  "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
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
                <code className="text-white">*data = </code> "
                <code className="output code-yellow">
                  \r\n \"beneficiaryId\":36,\r\n \"remitterId\":26,\r\n
                  \"Amount\":200\r\n{" "}
                </code>
                \r\n\r\n\r\n\r\n\r\n\r\n "{" "}
              </code>
              ;
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

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
}

export function GonativeSendMoney() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="go">
          <br />
          <span className="d-flex justify-content-between">
            <span>
              <code>package </code>
              <code className="text-white"> main</code>
            </span>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("go")}
            />
          </span>
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
              "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
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
                    "beneficiaryId"<code className="code-yellow">:36,</code>`+"
                  </code>
                  <br />
                  <code className="code-yellow">"+`</code>
                  <br />
                  <code className="text-white">
                    "remitterId"<code className="code-yellow">:26,</code>`+"
                  </code>
                  <br />
                  <code className="code-yellow">"+`</code>
                  <br />
                  <code className="text-white">
                    "Amount"<code className="code-yellow">:200,</code>`+"
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
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+`</code>
            <br />
            <code className="code-yellow">'+"</code>
            <br />
            <code className="code-yellow">"+'</code>
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
            <code className="code-yellow">
              {" "}
              req.Header.Add("apiKey", "apiKey")
            </code>
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

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
}

export function CrestsharpSendMoney() {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="csharp">
          <span className="d-flex justify-content-between">
            <code>
              var <code className="text-white"> client =</code> new{" "}
            </code>
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("csharp")}
            />
          </span>
          <code className="text-white">
            {" "}
            RestClient
            <code className="code-yellow">
              ("http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
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
                + <code className="code-yellow">"\n"</code>+{" "}
              </code>
            </code>
            <br />
            <code className="code-yellow">@" ""beneficiaryId"":36,</code>
            <br />
            <code className="code-yellow">
              "{" "}
              <code className="text-white">
                + <code className="code-yellow">"\n"</code>+{" "}
              </code>
            </code>
            <br />
            <code className="code-yellow">@" ""remitterId"":26,</code>
            <br />
            <code className="code-yellow">
              "{" "}
              <code className="text-white">
                + <code className="code-yellow">"\n"</code> +
              </code>
            </code>
            <br />
            <code className="code-yellow">@" ""Amount"":200</code>
            <br />
            <code className="code-yellow">
              "{" "}
              <code className="text-white">
                + <code className="code-yellow">"\n"</code> +{" "}
              </code>
            </code>
            <br />
            <code className="code-yellow">@"</code>
          </code>
          <br />
          <code className="code-yellow">
            "{" "}
            <code className="text-white">
              + <code className="code-yellow">"\n"</code> +{" "}
            </code>
          </code>
          <br /> <code className="code-yellow">@"</code>
          <br />
          <code className="code-yellow">
            "{" "}
            <code className="text-white">
              + <code className="code-yellow">"\n"</code> +{" "}
            </code>
          </code>
          <br /> <code className="code-yellow">@"</code>
          <br />
          <code className="code-yellow">
            "{" "}
            <code className="text-white">
              + <code className="code-yellow">"\n"</code> +{" "}
            </code>
          </code>
          <br /> <code className="code-yellow">@"</code>
          <br />
          <code className="code-yellow">
            "{" "}
            <code className="text-white">
              + <code className="code-yellow">"\n"</code> +{" "}
            </code>
          </code>
          <br /> <code className="code-yellow">@"</code>
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

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
}

export const RubySendMoneyCode = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="Ruby">
          <div>
            <span className="d-flex justify-content-between">
              <span>
                <code className="text-white">require</code>
                <code className="code-yellow">"uri"</code>
              </span>
              <AiOutlineCopy
                className="copyicon"
                onClick={() => copyToClipboard("Ruby")}
              />
            </span>

            <code className="text-white">require</code>
            <code className="code-yellow">"json"</code>
            <br />
            <code className="text-white">require</code>
            <code className="code-yellow">"net/http"</code>
            <br />
            <code className="text-white">url = URI</code>
            <code className="code-yellow">
              ("http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money")
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
                  "beneficiaryId":36,
                  <br />
                  "remitterId": 26
                  <br />
                  "Amount": 200
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

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};

export const PowershellSendMoneyCode = () => {
  const [response, setResponse] = useState(0);
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper" id="Powershell">
          <span className="d-flex justify-content-end">
            <AiOutlineCopy
              className="copyicon"
              onClick={() => copyToClipboard("Powershell")}
            />
          </span>
          <div>
            <code className="text-white">$headers = New-Object</code>
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
            <br />
            <code className="text-white">$headers.Add</code>
            <code className="code-yellow">
              ("Content-Type", "application/json")
            </code>
            <br />
            <code className="text-white">
              $body ={" "}
              <span className="output code-yellow">
                <br /> <span className="text-white">'n</span>
                `"beneficiaryId`":36,
                <br />
                <span className="text-white">'n</span>`"remitterId`":26,
                <br />
                <span className="text-white">'n</span>`"Amount`":200
                <br />
                <code className="text-white">
                  'n"
                  <br />
                </code>
              </span>
            </code>
            <code className="text-white">$response = Invoke-RestMethod</code>
            <code className="code-yellow">
              'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money'
              <span className="text-white">-Method </span>'POST'
              <span className="text-white">-Headers $headers -Body $body</span>
            </code>
            <br />
            <code className="text-white">$response | ConvertTo-Json</code>
          </div>
        </div>
      </CodeWrapper>

      <CodeWrapper heading={"Response"} btnview={2} setResponse={setResponse}>
        <div className="response-wrapper">
          <SendMoneyResponse response={response} />
        </div>
      </CodeWrapper>
    </>
  );
};
