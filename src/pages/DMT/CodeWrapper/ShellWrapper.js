import React from "react";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {
  var c = document.getElementById(id).innerText;
  copy(c);
};
const ShellWrapper = () => {
  return (
    <>
      <br />{" "}
      <span className="d-flex justify-content-between">
        <code className="text-white">
          wget --no-check-certificate --quiet \
        </code>
        <AiOutlineCopy
          className="copyicon"
          onClick={() => copyToClipboard("shell")}
        />
      </span>
      <br /> <code className="text-white"> --method POST \</code>
      <br /> <code className="text-white"> --timeout=0 \</code>
      <br />{" "}
      <code className="text-white">
        {" "}
        --header <code className="code-yellow">'apiKey: apiKey' </code>
      </code>{" "}
      <code className="text-white">\</code>
      <br />{" "}
      <code className="text-white">
        {" "}
        --header{" "}
        <code className="code-yellow">'Authorization: Bearer token' </code>
      </code>{" "}
      <code className="text-white">\</code>
      <br />{" "}
      <code className="text-white">
        {" "}
        --header{" "}
        <code className="code-yellow"> 'Content-Type: application/json' </code>
      </code>{" "}
      <code className="text-white">\</code>
    </>
  );
};

export default ShellWrapper;
