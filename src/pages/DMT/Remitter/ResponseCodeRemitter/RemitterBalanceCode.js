import React from "react";

import CodeWrapper from "../../CodeWrapper/CodeWrapper";
import ShellWrapper from "../../CodeWrapper/ShellWrapper";

export const JavaRemitterBalance = () => {
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <br />
          <code className="text-white">
            OkHttpClient client = <code>new</code>{" "}
            OkHttpClient().newnewBuilder()
          </code>
          <br />
          <code className="text-white">.build();</code>
          <br />
          <code className="text-white">
            MediaType mediaType = MediaType.parse({" "}
            <code className="code-yellow">"application/json"</code>);
          </code>
          <br />
          <code className="text-white">
            RequestBody body = RequestBody.create(mediaType,{" "}
            <code className="code-yellow">
              {" "}
              <span className="output">
                \r\n \"remitterphone\":\"7902900295\"{" "}
              </span>{" "}
              \r\n" <code className="text-white">);</code>{" "}
            </code>
          </code>
          <br />
          <code className="text-white">
            Request request = <code>new</code> Request.Builder()
          </code>
          <br />
          <code className="text-white">
            .url({" "}
            <code className="code-yellow">
              "localhost:8084/paymento/remitter-reg/check-balance"
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
            <code className="code-yellow">"apiKey"</code>)
          </code>
          <br />
          <code className="text-white">
            .addHeader(
            <code className="code-yellow">"Authorization", "Bearer token"</code>
            )
          </code>
          <br />
          <code className="text-white">
            .addHeader(
            <code className="code-yellow">
              "Content-Type", "application/json"
            </code>
            )
          </code>
          <br />
          <code className="text-white">.build();</code>
          <br />
          <code className="text-white">
            Response response = client.newCall(request).execute();
          </code>
        </div>
      </CodeWrapper>

      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>java responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
    </>
  );
};

export const PythonRemitterBalance = () => {
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <br /> <code>import</code>{" "}
          <code className="text-white">requests</code>
          <br /> <code>import</code> <code className="text-white">json</code>
          <br />
          <code className="text-white"> url =</code>{" "}
          <code className="code-yellow">
            "http://194.195.113.218:8090/paymento/remitter-reg/send-otp"
          </code>
          <br />
          <code className="text-white">payload = json.dumps(</code>
          <code className="outputtext-white">
            <br />
            <code>"remitterPhone" </code> <span>: </span>
            <code className="code-cyan"> "7902900295",</code>
            <br />)
          </code>
          <br />
          <code className="text-white">
            headers ={" "}
            <span className="output ">
              <br />
              <code>'apiKey'</code>:{" "}
              <code className="code-yellow">'apiKey'</code> ,<br />
              <code>'Authorization'</code>:{" "}
              <code className="code-yellow">'Bearer token'</code> ,<br />
              <code>'Content-Type'</code>:
              <code className="code-yellow"> 'application/json'</code>
              <br />
            </span>
          </code>
          <br />
          <code className="text-white">
            response = requests.request(
            <code className="code-yellow">"POST"</code>, url, headers=headers,
            data=payload)
            <br />
            <code>print</code>
            <code className="text-white">(response.text)</code>
          </code>
        </div>
      </CodeWrapper>
      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>python responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
    </>
  );
};

export const ShellRemitterBalance = () => {
  return (
    <>
      <CodeWrapper heading="Request">
        <div className="request-wrapper">
          <ShellWrapper />
          <span className="output  text-white">
            <br />
            <code>"remitterPhone" </code> <span>: </span>
            <code className="code-cyan"> "7902900295"</code>
            <br />
          </span>
          <br /> <code className="code-yellow">' \</code>
          <br />
          <code className="code-yellow">
            'localhost:8084/paymento/remitter-reg/check-balance'
          </code>
        </div>
      </CodeWrapper>
      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>shell responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
    </>
  );
};

export const PHPRemitterBalance = () => {
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
              'localhost:8084/paymento/remitter-reg/check-balance',
            </code>
          </code>
          <br />
          <code>
            CURLOPT_RETURNTRANSFER =&#62;{" "}
            <code className="code-yellow">true,</code>
          </code>
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
            <code>"remitterPhone"</code> <span>: </span>{" "}
            <code className="code-yellow">7902900295</code>
            <br />
          </span>
          <code>',</code>
          <br />
          <code>
            CURLOPT_HTTPHEADER =&#62; <code>array(</code>
          </code>
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
          <code className="text-white">$response = curl_exec($curl);</code>
          <br />
          <code className="text-white">curl_close($curl);</code>
          <br />
          <code>
            echo <code className="text-white">$response</code>
          </code>
          ;
        </div>
      </CodeWrapper>
      <CodeWrapper heading="Response">
        <div className="response-wrapper">
          <code>php responce</code>
          {/* <code>code area</code> */}
        </div>
      </CodeWrapper>
    </>
  );
};
