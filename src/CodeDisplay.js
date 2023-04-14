import CodeSnippet from "./CodeSnippet";
import React from "react";
import {
  accessToken,
  accessTokenResult,
  login,
  loginBody,
  loginResult,
  placeTimezone,
} from "./codes";

const CodeDisplay = () => {
  return (
    <div>
      <CodeSnippet codes={loginBody} title="Login Body" />
      <CodeSnippet codes={login} title="Login" />
      <CodeSnippet codes={loginResult} title="Login Result" />
      <CodeSnippet codes={accessToken} title="Access Token" />
      <CodeSnippet codes={accessTokenResult} title="Access Token Result" />

      
    </div>
  );
};

export default CodeDisplay;

// [ENTER LATITUDE IN QUERY]
{/* <CodeSnippet codes={placeTimezone} title="Places Time Zone" /> */}