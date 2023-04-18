import React from "react";
import {
  accessToken,
  accessTokenResult,
  bookingWithVechile,
  bookingWithVechileBody,
  bookingWithVechileResult,
  cancelBooking,
  cancelBookingBody,
  cancelBookingResult,
  checkDistance,
  checkDistanceResult,
  confirmBookindAndpaymentRequest,
  confirmBookindAndpaymentRequestBody,
  confirmBookindAndpaymentRequestResult,
  createPassenger,
  createPassengerBody,
  createPassengerResult,
  login,
  loginBody,
  loginResult,
  main,
  placeTimezone,
  placeTimezoneResult,
  placesAutoComplete,
  placesAutoCompleteResult,
  placesDetailsDestination,
  placesDetailsDestinationResult,
  placesDetailsSource,
  placesDetailsSourceResult,
  showVehicleWithPrice,
  showVehicleWithPriceHourly,
  showVehicleWithPriceHourlyResult,
  showVehicleWithPriceResult,
} from "./codes";
import {
  CodeSnippetBody,
  CodeSnippetGeneral,
  CodeSnippetIntro,
  CodeSnippetIntroWithQuery,
  CodeSnippetResponse,
} from "./CodeSnippet";

import { bodyTableAccessToken, bodyTableLogin } from "./body";

const CodeDisplay = () => {
  return (
    <div className="main">
      <nav className="w-1/5 bg-blue-300">
        <h2 className="text-xl text-slate-800 px-2 pt-5">API Docs</h2>
      </nav>
      {/* --------------------------------------------------- */}
      <div className="w-4/5">
        <div className="general information" id="general_information">
          <CodeSnippetGeneral
            mainHeading={main.generalInformation.mainHeading}
            body={main.generalInformation.body}
          />
        </div>

        <div className="authentication" id="authentication">
          <CodeSnippetGeneral
            mainHeading={main.authentication.mainHeading}
            body={main.authentication.body}
          />
        </div>

        <div className="loginRequest" id="loginRequest">
          <CodeSnippetGeneral
            mainHeading={main.LOGIN_REQUEST.mainHeading}
            body={main.LOGIN_REQUEST.body}
          />
        </div>

        <div className="login" id="login_main">
          <CodeSnippetIntro
            codes={login.code}
            title="Login"
            heading={login.heading}
            description={login.description}
            request_url={login.request_url}
            requestType={login.requestType}
          />

          <CodeSnippetBody
            codes={loginBody.code}
            title="Login(Body)"
            bodyRequest={login.bodyRequest}
            bodyTable={bodyTableLogin}
          />

          <CodeSnippetResponse
            codes={loginResult.code}
            title="Login Result"
            statusCode={login.statusCode}
            response={login.response}
            success={login.success}
            message={login.message}
          />
        </div>

        <div className="access_token" id="access_token">
          <CodeSnippetIntroWithQuery
            codes={accessToken.code}
            title="Access Token"
            heading={accessToken.heading}
            request_url={accessToken.request_url}
            requestType={accessToken.requestType}
            query={bodyTableAccessToken}
          />

          <CodeSnippetResponse
            codes={accessTokenResult.code}
            title="Access Token Result"
            response={accessToken.response}
            statusCode={accessToken.statusCode}
          />

          <CodeSnippetGeneral body={accessToken.generalMessage}/>
        </div>

        {/*    


      

     

      <CodeSnippet codes={placesAutoComplete.code} title="Places Auto Complete" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}/>

      <CodeSnippet 
      codes={placesAutoCompleteResult.code} 
      title="Places Auto Complete Result"
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={} />

      <CodeSnippet
       codes={placesDetailsSource.code} 
       title="Places Details Source" 
       heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}
      />
      <CodeSnippet
       codes={placesDetailsSourceResult.code} 
       title="Places Details Source Result"
       heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={} />

      <CodeSnippet 
      codes={placesDetailsDestination.code} 
      title="Places Details Destination" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}
      />

      <CodeSnippet
      codes={placesDetailsDestinationResult.code}
      title="Places Details Destination Result" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}/>

      <CodeSnippet
      codes={placeTimezone.code} 
      title="Places Time Zone" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}
      />
      
      <CodeSnippet 
      codes={placeTimezoneResult.code} 
      title="Places Time Zone Result" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}
      />
      <CodeSnippet 
      codes={checkDistance.code} 
      title="Check Distance Result"
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}
       />
      <CodeSnippet 
      codes={checkDistanceResult.code} 
      title="Check Distance Result"
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={} />

      <CodeSnippet
       codes={showVehicleWithPrice.code}
        title="Show Vehicle With Price" 
        heading={}
        request_url={}
        requestType={}
        bodyRequest={}
        statusCodde={}
        response={}
        success={}
        message={}/>
      <CodeSnippet 
      codes={showVehicleWithPriceResult.code} 
      title="Show Vehicle With Price Result" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}/>
      <CodeSnippet codes={showVehicleWithPriceHourly.code} title="Show Vehicle With Price Hourly"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={} />
      <CodeSnippet codes={showVehicleWithPriceHourlyResult.code} title="Show Vehicle With Price Hourly Result"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />

      <CodeSnippet codes={bookingWithVechileBody.code} title="Booking With Vechile(Body)"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />

      <CodeSnippet codes={bookingWithVechile.code} title="Booking With Vechile"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />

      <CodeSnippet codes={bookingWithVechileResult.code} title="Booking With Vechile Result"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={createPassengerBody.code} title="Create Passenger(Body)"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={createPassenger.code} title="Create Passenger"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={createPassengerResult.code} title="Create Passenger Result"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={confirmBookindAndpaymentRequestBody.code} title="Conform Booking And Pay By Invoice(Body)"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={confirmBookindAndpaymentRequest.code} title="Conform Booking And Pay By Invoice"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={confirmBookindAndpaymentRequestResult.code} title="Conform Booking And Pay By Invoice Result"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={cancelBookingBody.code} title="Cancel Booking(Body)"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={cancelBooking.code} title="Cancel Booking"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />
      <CodeSnippet codes={cancelBookingResult.code} title="Cancel Booking Result"
       heading={}
       request_url={}
       requestType={}
       bodyRequest={}
       statusCodde={}
       response={}
       success={}
       message={}
       />  */}
      </div>
    </div>
  );
};

export default CodeDisplay;
