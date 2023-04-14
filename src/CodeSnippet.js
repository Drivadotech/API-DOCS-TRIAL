import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeOne } from "./codes";
// import { } from 'react-syntax-highlighter/dist/esm/styles/prism';
 const CodeSnippet = ({codes}) => {    
  // const codeString =codeOne;
  return (
    <div>
        <div className="">
            <p>Example Code</p>
        </div>

        
      <SyntaxHighlighter
        language="jsx"
        style={irBlack}
        customStyle={{ padding: "20px" }}
        wrapLongLines={true}
      >
        {codes}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;