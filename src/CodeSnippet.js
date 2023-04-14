import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { codeOne } from "./codes";
// import { } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ codes, title }) => {
  return (
    <div>
      <div></div>
      {/* -----------------------------------------------------*/}
      <div>
        <div className="">
          <p>Example Code for {title}</p>
        </div>

        <SyntaxHighlighter
          language="jsx"
          style={nightOwl}
          customStyle={{ padding: "20px" }}
          wrapLongLines={true}
        >
          {codes}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
