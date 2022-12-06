import React from "react";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {
  var c = document.getElementById(id).innerText;
  copy(c);
};
const JavaWrapper = () => {
  return (
    <>
      {" "}
      <span className="d-flex justify-content-between">
        <code className="text-white">
          OkHttpClient client = <code>new</code>{" "}
          <code className="text-white">OkHttpClient().newBuilder()</code>
        </code>
        <AiOutlineCopy
          className="copyicon"
          onClick={() => copyToClipboard("java")}
        />
      </span>
      <code className="text-white">.build();</code>
      <br />
      <code className="text-white">MediaType mediaType = MediaType.parse(</code>
      <code className="code-yellow">"application/json"</code>
      <code className="text-white">);</code>
      <br />
      <code className="text-white">
        RequestBody body = RequestBody.create(mediaType,
      </code>{" "}
      <code className="code-yellow">"\r\n </code>
    </>
  );
};

export default JavaWrapper;
