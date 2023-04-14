import CodeSnippet from "./CodeSnippet";
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

const CodeDisplay = () => {
  return (
    <div>
      <CodeSnippet codes={login} title="Login" />
      <CodeSnippet codes={loginResult} title="Login Result" />
      <CodeSnippet codes={accessToken} title="Access Token" />
      <CodeSnippet codes={accessTokenResult} title="Access Token Result" />
      <CodeSnippet codes={placesAutoComplete} title="Places Auto Complete" />
      <CodeSnippet codes={placesAutoCompleteResult} title="Places Auto Complete Result" />
      <CodeSnippet codes={placesDetailsSource} title="Places Details Source" />
      <CodeSnippet codes={placesDetailsSourceResult} title="Places Details Source Result" />
      <CodeSnippet codes={placesDetailsDestination} title="Places Details Destination" />
      <CodeSnippet codes={placesDetailsDestinationResult} title="Places Details Destination Result" />
      <CodeSnippet codes={placeTimezone} title="Places Time Zone" />
      <CodeSnippet codes={placeTimezoneResult} title="Places Time Zone Result" />
      <CodeSnippet codes={checkDistance} title="Check Distance Result" />
      <CodeSnippet codes={checkDistanceResult} title="Check Distance Result" />
      <CodeSnippet codes={showVehicleWithPrice} title="Show Vehicle With Price" />
      <CodeSnippet codes={showVehicleWithPriceResult} title="Show Vehicle With Price Result" />
      <CodeSnippet codes={showVehicleWithPriceHourly} title="Show Vehicle With Price Hourly Result" />
      <CodeSnippet codes={showVehicleWithPriceHourlyResult} title="Show Vehicle With Price Hourly Result"/>
      <CodeSnippet codes={bookingWithVechileBody} title="Booking With Vechile(Body)"/>
      <CodeSnippet codes={bookingWithVechile} title="Booking With Vechile"/>
      <CodeSnippet codes={bookingWithVechileResult} title="Booking With Vechile Result"/>
      <CodeSnippet codes={createPassengerBody} title="Create Passenger(Body)"/>
      <CodeSnippet codes={createPassenger} title="Create Passenger"/>
      <CodeSnippet codes={createPassengerResult} title="Create Passenger Result"/>
      <CodeSnippet codes={confirmBookindAndpaymentRequestBody} title="Conform Booking And Pay By Invoice(Body)"/>
      <CodeSnippet codes={confirmBookindAndpaymentRequest} title="Conform Booking And Pay By Invoice"/>
      <CodeSnippet codes={confirmBookindAndpaymentRequestResult} title="Conform Booking And Pay By Invoice Result"/>
      <CodeSnippet codes={cancelBookingBody} title="Cancel Booking(Body)"/>
      <CodeSnippet codes={cancelBooking} title="Cancel Booking"/>
      <CodeSnippet codes={cancelBookingResult} title="Cancel Booking Result"/> 
    </div>
  );
};

export default CodeDisplay;

