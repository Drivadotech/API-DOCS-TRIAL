import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./snippet.css";
// import { codeOne } from "./codes";
// import { } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippetIntro = ({
  heading,
  description,
  request_url,
  requestType,
  codes,
  title,
}) => {
  return (
    <div className="main">
      <nav className="w-1/5 bg-blue-300"></nav>
      {/* --------------------------------------------------------- */}
      <div className="w-4/5">
        <div className="submain bg-green-300">
          <div className="description bg-amber-200 w-1/2 px-5">
            <h2 className="text-l font-semibold text-slate-800 border-b-[1px] pb-2 border-slate-300 pt-5">
              {heading}
            </h2>
            <p>{description}</p>
            <h4>Request URL : {request_url}</h4>
            <h4>Request TYPE : {requestType}</h4>
          </div>
          {/* -----------------------------------------------------*/}
          <div className="code w-1/2">
            <div className="px-5 py-1">
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
      </div>
    </div>
  );
};

export const CodeSnippetBody = ({
  heading,
  description,
  request_url,
  requestType,
  bodyRequest,
  bodyTable,
  codes,
  title,
}) => {
  return (
    <div className="main">
      <nav className="w-1/5 bg-blue-300"></nav>
      {/* --------------------------------------------------------- */}
      <div className="w-4/5">
        <div className="submain bg-green-300">
          <div className="description bg-amber-200 w-1/2 px-5">
            Request Body:{bodyRequest}
            <br/>
            <br/>
            Body Parameter : 
            <br/>
            <br/>
            {bodyTable}
            <br/>
          </div>
          {/* -----------------------------------------------------*/}
          <div className="code w-1/2">
            <div className="px-5 py-1">
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
      </div>
    </div>
  );
};

export const CodeSnippetResponse = ({
  heading,
  description,
  request_url,
  requestType,
  bodyRequest,
  statusCode,
  response,
  success,
  message,
  codes,
  title,
}) => {
  return (
    <div className="main">
      <nav className="w-1/5 bg-blue-300"></nav>
      {/* --------------------------------------------------------- */}
      <div className="w-4/5">
        <div className="submain bg-green-300">
          <div className="description bg-amber-200 w-1/2 px-5">
            <div>
              {" "}
              Response:
              <p>Successful Request Status code : {statusCode}</p>
              <p>{response}</p>
              <p>Success : {success}</p>
              <p>Message :{message}</p>
            </div>
          </div>
          {/* -----------------------------------------------------*/}
          <div className="code w-1/2">
            <div className="px-5 py-1">
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
      </div>
    </div>
  );
};
