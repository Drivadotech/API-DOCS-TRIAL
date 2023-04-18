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
  CodeSnippetIntro,
  CodeSnippetResponse,
} from "./CodeSnippet";

import { bodyTableLogin } from "./body";

const CodeDisplay = () => {
  return (
    <div>
      <div className="login">
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

      {/*    


      <CodeSnippet codes={accessToken.code} title="Access Token" 
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={}/>

      <CodeSnippet codes={accessTokenResult.code} title="Access Token Result"
      heading={}
      request_url={}
      requestType={}
      bodyRequest={}
      statusCodde={}
      response={}
      success={}
      message={} />

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
  );
};

export default CodeDisplay;
