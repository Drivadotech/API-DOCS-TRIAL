export const main = {
  generalInformation: `Drivado Partner API is a RESTful API organized around several resources, such as booking, vehicle, payment method, etc. Different actions for the same resource are available via different HTTP request methods.
  `,
  authentication: `All requests have to be made by an authenticated user only. 
  A Drivado Account will be Created By The Drivado team so if you want to create your account contact with Drivado team and The Credentials will be given which will be required for login.`,

  LOGIN_REQUEST: `You need to make this request prior to every other API request.
  It will Mainly consist of Two APIs
  `,
};

export const login = {
  heading: `LOGIN API`,
  description:`This Api is used to Login`,
  request_url: ` https://api.drivado.com/api/v1/api/apiLogin`,
  requestType: `POST`,
  bodyRequest: `The Credentials (USERNAME and PASSWORD ) that have been provided will be used for login`,
  statusCode: `200 `,
  response: `You successfully logged in and the response body will contain the following details`,
  success: `true`,
  message: `Login Successful`,

  code: `let data = JSON.stringify({
  email: req.body.email,
  password: req.body.password,
});

const config = {
  method: "post",

  url: "https://api.drivado.com/api/v1/api/apiLogin",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
  withCredentials: true,
};

try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);`,
};

export const loginBody = {
  heading: ``,
  description:``,
  request_url: ``,
  requestType: ``,
  bodyRequest: ``,
  statusCodde: ``,
  response: ``,
  success: ``,
  message: ``,
  code:
  `"email": "REGISTERED EMAIL ID",
"password":"PASSWORD"`,
};

export const loginResult = {
  heading: ``,
  description:``,
  request_url: ``,
  requestType: ``,
  bodyRequest: ``,
  statusCodde: ``,
  response: ``,
  success: ``,
  message: ``,
  code: `"success": true,
"message": "Login Successful"`,
};

export const accessToken = {
  heading: ``,
  description:``,
  request_url: ``,
  requestType: ``,
  bodyRequest: ``,
  statusCodde: ``,
  response: ``,
  success: ``,
  message: ``,
  code: `const config = {
    method: "post",
    url: "https://api.drivado.com/api/v1/api/apiGetAccessToken?email=email[ENTER EMAIL IN QUERY]",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "refreshToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZiOTFmMGZlMTgzODQ0MzllYmRhZCIsImlhdCI6MTY3NzUwMDE5MCwiZXhwIjoxNjc4MzY0MTkwfQ.Vrg-_ETek4djaFN6O3iPSc6xmcNm-G8ePOVERlt9phk",
    },
  };
  
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
  `,
};

export const accessTokenResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0NTIzNGYzY2NiOGRhZDQ1Mjg3ZmUiLCJpYXQiOjE2ODE0NTkzMjMsImV4cCI6MTY4MjMyMzMyM30.JcuZSOm2Km3_FD951jvaBXTuGH6KiQWoNr2f7c6GQ3U"
}`
};

export const placesAutoComplete = {
  heading: ``,
  description:``,
  request_url:``,
  requestType:``,
  bodyRequest:``,
  statusCodde:``,
  response:``,
  success:``,
  message:``,
  code:`
  const config = {
    method: "get",
    url: "https://api.drivado.com/api/v1/api/apiplacesAutoComplete?input=input[ENTER INPUT IN QUERY]&GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY [ENTER GOOGLE_MAPS_API_KEY IN QUERY]",
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }`
};

export const placesAutoCompleteResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`
[
  {
      "description": "Heathrow Airport London (LHR), Longford, UK",
      "matched_substrings": [
          {
              "length": 29,
              "offset": 0
          },
          {
              "length": 8,
              "offset": 31
          },
          {
              "length": 2,
              "offset": 41
          }
      ],
      "place_id": "ChIJ6W3FzTRydkgRZ0H2Q1VT548",
      "reference": "ChIJ6W3FzTRydkgRZ0H2Q1VT548",
      "structured_formatting": {
          "main_text": "Heathrow Airport London (LHR)",
          "main_text_matched_substrings": [
              {
                  "length": 29,
                  "offset": 0
              }
          ],
          "secondary_text": "Longford, UK",
          "secondary_text_matched_substrings": [
              {
                  "length": 8,
                  "offset": 0
              },
              {
                  "length": 2,
                  "offset": 10
              }
          ]
      },
      "terms": [
          {
              "offset": 0,
              "value": "Heathrow Airport London (LHR)"
          },
          {
              "offset": 31,
              "value": "Longford"
          },
          {
              "offset": 41,
              "value": "UK"
          }
      ],
      "types": [
          "airport",
          "point_of_interest",
          "establishment"
      ]
  },
  {
      "description": "Heathrow, Heathrow Airport (LHR), Longford, Hounslow, UK",
      "matched_substrings": [
          {
              "length": 8,
              "offset": 0
          },
          {
              "length": 12,
              "offset": 19
          },
          {
              "length": 8,
              "offset": 34
          },
          {
              "length": 2,
              "offset": 54
          }
      ],
      "place_id": "ChIJW4SMunVxdkgR--7UwBq8g-k",
      "reference": "ChIJW4SMunVxdkgR--7UwBq8g-k",
      "structured_formatting": {
          "main_text": "Heathrow",
          "main_text_matched_substrings": [
              {
                  "length": 8,
                  "offset": 0
              }
          ],
          "secondary_text": "Heathrow Airport (LHR), Longford, Hounslow, UK",
          "secondary_text_matched_substrings": [
              {
                  "length": 12,
                  "offset": 9
              },
              {
                  "length": 8,
                  "offset": 24
              },
              {
                  "length": 2,
                  "offset": 44
              }
          ]
      },
      "terms": [
          {
              "offset": 0,
              "value": "Heathrow"
          },
          {
              "offset": 10,
              "value": "Heathrow Airport (LHR)"
          },
          {
              "offset": 34,
              "value": "Longford"
          },
          {
              "offset": 44,
              "value": "Hounslow"
          },
          {
              "offset": 54,
              "value": "UK"
          }
      ],
      "types": [
          "transit_station",
          "point_of_interest",
          "establishment"
      ]
  }
]`
} ;

export const placesDetailsSource = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`const config = {
  method: "get",
  url: "https://api.drivado.com/api/v1/api/apiplacesDetailsSource?place_id=place_id[ENTER PLACE ID IN QUERY]&GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY [ENTER GOOGLE_MAPS_API_KEY IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  // console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`
};

export const placesDetailsSourceResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "lat": 51.4700223,
  "lng": -0.4542955
}`
};

export const placesDetailsDestination = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`const config = {
  method: "get",
  url: "https://api.drivado.com/api/v1/api/apiplacesDetailsDestination?place_id=place_id [ENTER PLACE ID IN QUERY]&GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY [ENTER GOOGLE_MAPS_API_KEY IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`
};

export const placesDetailsDestinationResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "lat": 51.50455969999999,
  "lng": -0.0825847
}`
};

export const placeTimezone ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code: `const config = {
  method: "get",
  url:"https://api.drivado.com/api/v1/api/apiplaceTimezone?lat=lat[ENTER LATITUDE IN QUERY]&lng=lng[ENTER LONGITUDE IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`
};
export const placeTimezoneResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "timezone": "Europe/London",
  "timezone_offset": 0,
  "timezone_offset_with_dst": 1,
  "date": "2023-04-17",
  "date_time": "2023-04-17 09:50:54",
  "date_time_txt": "Monday, April 17, 2023 09:50:54",
  "date_time_wti": "Mon, 17 Apr 2023 09:50:54 +0100",
  "date_time_ymd": "2023-04-17T09:50:54+0100",
  "date_time_unix": 1681721454.914,
  "time_24": "09:50:54",
  "time_12": "09:50:54 AM",
  "week": 16,
  "month": 4,
  "year": 2023,
  "year_abbr": "23",
  "is_dst": true,
  "dst_savings": 1
}`
};

export const checkDistance = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:` const config = {
  method: "get",
  url: "https://api.drivado.com/api/v1/places/checkDistance?origin=origin [ENTER ORIGIN IN QUERY]&destination=destination [ENTER DESTINATION IN QUERY]&GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY [ENTER GOOGLE_MAPS_API_KEY IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`
};

export const checkDistanceResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "km": 32.99147,
  "duration": "1 hour 1 min"
}`
};

export const showVehicleWithPrice = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`const config = {
  method: "get",
  url:"https://api.drivado.com/api/v1/api/apishowVehicleWithPrice?date=date [ENTER DATE IN QUERY]&km=km [ENTER KM IN QUERY]&userId=userId [ENTER USER ID  IN QUERY]&time=time [ENTER TIME IN QUERY]&sourceLatLng=sourceLatLng [ENTER SOURCE LATITUDE AND LONGITUDE IN QUERY]&destinationLatLng=destinationLatLng [ENTER DESTINATION LATITUDE AND LONGITUDE IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}
`
};

export const showVehicleWithPriceResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "km": "32.830535999999995",
  "vehicleWithPriceArray": [
      {
          "vehicleName": "Corolla",
          "vehicleType": "STANDARD SEDAN",
          "description": "Corolla, Toyota Prius, Camry, Ford Taurus or similar",
          "price": 123,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680266348/vehicleImages/wqeqnbq1botsobbpuqyu.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 3,
          "luggageCount": 2
      },
      {
          "vehicleName": "E class",
          "vehicleType": "PREMIUM SEDAN",
          "description": "Mercedes E Class, BMW 5 Series, Audi A6, VW Passat, Lexus or similar",
          "price": 128,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680266436/vehicleImages/q5qmj7zssf0znf77r7jy.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 3,
          "luggageCount": 2
      },
      {
          "vehicleName": "VW Caravelle",
          "vehicleType": "ECONOMY VAN",
          "description": "Opel Vivaro, Ford, Volkswagen Caravelle, Honda Odyssey or similar",
          "price": 136,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680266492/vehicleImages/tiyfdlzdgffmz4aglbgp.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 5,
          "luggageCount": 5
      },
      {
          "vehicleName": "Escalade",
          "vehicleType": "PREMIUM VAN",
          "description": "Mercedes Viano/V Class, Cadillac Escalade, Toyota Alphard, Chevrolet Suburban, GMC or similar",
          "price": 166,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680267172/vehicleImages/p180pdqrxvfjcr2vburt.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 5,
          "luggageCount": 5
      }
  ]
}`
};

export const showVehicleWithPriceHourly ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`const config = {
  method: "get",
  url: "https://api.drivado.com/api/v1/api/apishowVehicleWithPriceHourly?sourcePLaceId=sourcePLaceId [ENTER SOURCE PLACE ID IN QUERY]&distance=distance [ENTER distance IN QUERY]&hour=hour [ENTER HOUR IN QUERY]&date=date [ENTER DATE IN QUERY]&userId=userId [ENTER USER ID  IN QUERY]&time=time [ENTER TIME IN QUERY]&GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY [ENTER GOOGLE_MAPS_API_KEY IN QUERY]",
  headers: {},
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}
`
} ;

export const showVehicleWithPriceHourlyResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code: `{
  "km": "60",
  "vehicleWithPriceArray": [
      {
          "vehicleName": "Corolla",
          "vehicleType": "STANDARD SEDAN",
          "description": "Corolla, Toyota Prius, Camry, Ford Taurus or similar",
          "price": 180,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680266348/vehicleImages/wqeqnbq1botsobbpuqyu.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 3,
          "luggageCount": 2
      },
      {
          "vehicleName": "E class",
          "vehicleType": "PREMIUM SEDAN",
          "description": "Mercedes E Class, BMW 5 Series, Audi A6, VW Passat, Lexus or similar",
          "price": 225,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680266436/vehicleImages/q5qmj7zssf0znf77r7jy.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 3,
          "luggageCount": 2
      },
      {
          "vehicleName": "Escalade",
          "vehicleType": "PREMIUM VAN",
          "description": "Mercedes Viano/V Class, Cadillac Escalade, Toyota Alphard, Chevrolet Suburban, GMC or similar",
          "price": 270,
          "image": "https://res.cloudinary.com/dspmukglv/image/upload/v1680267172/vehicleImages/p180pdqrxvfjcr2vburt.png",
          "vehicleId": "3d8e08cd-6ffc-457b-a59b-e99206e3f7e5",
          "unit": "USD",
          "passengeCount": 5,
          "luggageCount": 5
      }
  ]
}`

};

export const bookingWithVechileBody ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "source": {
    "placename": "Heathrow Airport (LHR), Longford, UK",
    "placeid": "ChIJ6W3FzTRydkgRZ0H2Q1VT548",
    "lat": "51.4700223",
    "lng": "-0.4542955"
},
"destination": {
    "placename": "Hilton London Metropole, Edgware Road, London, UK",
    "placeid": "ChIJG8cTDrQadkgRQun6nrhjMfU",
    "lat": "51.5193229",
    "lng": "-0.1695228"
},
"userName": "techsupport@drivado.com",
"travelDate": "2023-02-25",
"travelTime": "10:16",
"timeZone": "Europe/London",
"passenger": "4",
"bookingType": "ONEWAY",
"duration":"43 mins",
"travelDistance":"26.875978",
"priceDetails":{
    "amount":109,
    "currency":"USD"
},

"vehicle":{
    "vehicleName":"COROLLA"
}
}`
} ;

export const bookingWithVechile ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`const data = JSON.stringify({
  source: {
    placename: req.body.placename,
    placeid: req.body.placeid,
    lat: req.body.lat,
    lng: req.body.lng,
  },
  destination: {
    placename: req.body.placename,
    placeid: req.body.placeid,
    lat: req.body.lat,
    lng: req.body.lng,
  },
  userName: req.body.userName,
  travelDate: req.body.travelDate,
  travelTime: req.body.travelTime,
  timeZone: req.body.timeZone,
  passenger: req.body.passenger,
  bookingType: req.body.bookingType,
  duration: req.body.duration,
  priceDetails: {
    amount: req.body.amount,
    currency: req.body.currency,
  },
  travelDistance: req.body.travelDistance,
  vehicle: {
    vehicleName: req.body.vehicleName,
  },
});

const config = {
  method: "post",
  url: " https://api.drivado.com/api/v1/api/apibookingWithVechile ",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`

} ;

export const bookingWithVechileResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "source": {
      "placename": "Heathrow Airport (LHR), Longford, UK",
      "placeid": "ChIJ6W3FzTRydkgRZ0H2Q1VT548",
      "lat": "51.4700223",
      "lng": "-0.4542955"
  },
  "destination": {
      "placename": "Hilton London Metropole, Edgware Road, London, UK",
      "placeid": "ChIJG8cTDrQadkgRQun6nrhjMfU",
      "lat": "51.5193229",
      "lng": "-0.1695228"
  },
  "travelDate": "2023-02-25T00:00:00.000Z",
  "travelTime": "10:16",
  "duration": "43 mins",
  "passenger": 4,
  "bookingType": "ONEWAY",
  "bookingId": "D0323-NNVGJ",
  "travelDistance": 26.875978,
  "priceDetails": {
      "amount": 109,
      "currency": "USD"
  },
  "timeZone": "Europe/London",
  "userName": "techsupport@drivado.com",
  "cancellationFee": "0",
  "vehicleDetails": "63bd7cbc3f1ea637598c8d60",
  "isSearch": true,
  "creditCards": [],
  "history": [],
  "_id": "6400859214bfd4378a52097a",
  "createdAt": "2023-03-02T11:16:34.491Z",
  "__v": 0
}
`

} ;

export const createPassengerBody ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code: `{
  "firstname": "Aakash",
  "lastname": "Banerjee",
  "email": "akashbanerjee@email.com",
  "phone": "6589455236",
  "country": "India",
  "dial_code": "+91",
  "bookingId": "D1122-MTHY6"
}
`};

export const createPassenger ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`let data = JSON.stringify({
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  email: req.body.email,
  phone: req.body.phone,
  country: req.body.country,
  dial_code: req.body.dial_code,
  bookingId: req.body.bookingId,
  flightNumber: req.body.flightOrTrain,
  referenceNumber: req.body.reference,
  specialRequest: req.body.specialRequest,
});

const config = {
  method: "post",
  url: " https://api.drivado.com/api/v1/api/apipassengerCreateAndBooking ",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`
} ;

export const createPassengerResult = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "passengerDetail": {
      "firstName": "Aakash",
      "lastName": "Banerjee",
      "email": "akashbanerjee@email.com",
      "phone": "6589455236",
      "country": "India",
      "code": "+91",
      "flightNumber": null,
      "trainNumber": null,
      "referenceNumber": null,
      "specialRequest": null,
      "bookings": [],
      "_id": "64008aa514bfd4378a52097c",
      "createdAt": "2023-03-02T11:38:13.130Z",
      "__v": 0
  },
  "updatedBooking": {
      "source": {
          "placename": "New York Marriott Marquis, Broadway, New York, NY, USA",
          "placeid": "ChIJiVXoAFVYwokREqPijh-d8xg",
          "lat": "40.7585862",
          "lng": "-73.98582019999999"
      },
      "destination": {
          "placename": "JFK Medical Center Emergency Room, James Street, Edison, NJ, USA",
          "placeid": "ChIJCQ_LXE62w4kRyNN_KI0-wL0",
          "lat": ""
      },
      "priceDetails": {
          "amount": 135,
          "currency": "USD"
      },
      "creditCards": [],
      "history": [],
      "_id": "63845255771baa6c9ba7a728",
      "travelDate": "2022-11-29T00:00:00.000Z",
      "travelTime": "12:02",
      "travelTimeStamp": "2022-11-28T20:02:00.000Z",
      "passenger": 2,
      "bookingType": "ONEWAY",
      "bookingId": "D1122-MTHY6",
      "travelDistance": null,
      "timeZone": "America/New_York",
      "userName": "techsupport1@drivado.com",
      "cancellationFee": "50",
      "vehicleDetails": "6361151180bb35013b680b30",
      "isSearch": true,
      "createdAt": "2022-11-28T06:16:53.940Z",
      "__v": 0,
      "invoice_code_num": "DIO-264",
      "bookingStatus": "CANCELLED",
      "passengerDetails": "63fc9b3301e4985ec7edf813",
      "paymentStatus": "UNPAID"
  }
}
`};

export const confirmBookindAndpaymentRequestBody ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "bookingId": "D0323-N3JAD",
  "bookingStatus": "CONFIRMED",
  "paymentStatus": "UNPAID"
}`
} ;

export const confirmBookindAndpaymentRequest ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`let data = JSON.stringify({
  bookingId: req.body.bookingId,
  bookingStatus: req.body.bookingStatus,
  paymentStatus: req.body.paymentStatus,
});

const config = {
  method: "patch",
  url: " https://api.drivado.com/api/v1/api/apipaymentRequest ",
  headers: {
    Authorization:req.header("Authorization"),
    "Content-Type": "application/json",
  },
  data: data,
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`} ;

export const confirmBookindAndpaymentRequestResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`"placeid": "ChIJiVXoAFVYwokREqPijh-d8xg",
"lat": "40.7585862",
"lng": "-73.98582019999999"
},
"destination": {
"placename": "JFK Medical Center Emergency Room, James Street, Edison, NJ, USA",
"placeid": "ChIJCQ_LXE62w4kRyNN_KI0-wL0",
"lat": ""
},
"priceDetails": {
"amount": 135,
"currency": "USD"
},
"creditCards": [],
"history": [],
"_id": "63845255771baa6c9ba7a728",
"travelDate": "2022-11-29T00:00:00.000Z",
"travelTime": "12:02",
"travelTimeStamp": "2022-11-28T20:02:00.000Z",
"passenger": 2,
"bookingType": "ONEWAY",
"bookingId": "D1122-MTHY6",
"travelDistance": null,
"timeZone": "America/New_York",
"userName": "techsupport1@drivado.com",
"cancellationFee": "50",
"vehicleDetails": "6361151180bb35013b680b30",
"isSearch": true,
"createdAt": "2022-11-28T06:16:53.940Z",
"__v": 0,
"invoice_code_num": "DIO-271",
"bookingStatus": "CONFIRMED",
"passengerDetails": "64008aa514bfd4378a52097c",
"paymentStatus": "UNPAID"
}
`

} ;

export const cancelBookingBody = {
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "bookingId": "D1122-MTHY6",
  "cancellationFee": "50",
  "bookingStatus": "CANCELLED"
}
`

};
export const cancelBooking ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code: `let data = JSON.stringify({
  bookingId: req.body.bookingId,
  bookingStatus: req.body.bookingStatus,
  cancellationFee: req.body.cancellationFee,
});

const config = {
  method: "patch",
  url: " https://api.drivado.com/api/v1/api/apicancelBooking ",
  headers: {
    Authorization: req.header("Authorization"),
    "Content-Type": "application/json",
  },
  data: data,
};
try {
  const response = await axios(config);
  console.log(JSON.stringify(response.data));
  res.send(response.data);
} catch (error) {
  console.log(error);
  res.send(error);
}`

};

export const cancelBookingResult ={
heading: ``,
description:``,
request_url:``,
requestType:``,
bodyRequest:``,
statusCodde:``,
response:``,
success:``,
message:``,
code:`{
  "source": {
      "placename": "New York Marriott Marquis, Broadway, New York, NY, USA",
      "placeid": "ChIJiVXoAFVYwokREqPijh-d8xg",
      "lat": "40.7585862",
      "lng": "-73.98582019999999"
  },
  "destination": {
      "placename": "JFK Medical Center Emergency Room, James Street, Edison, NJ, USA",
      "placeid": "ChIJCQ_LXE62w4kRyNN_KI0-wL0",
      "lat": ""
  },
  "priceDetails": {
      "amount": 135,
      "currency": "USD"
  },
  "creditCards": [],
  "history": [],
  "_id": "63845255771baa6c9ba7a728",
  "travelDate": "2022-11-29T00:00:00.000Z",
  "travelTime": "12:02",
  "travelTimeStamp": "2022-11-28T20:02:00.000Z",
  "passenger": 2,
  "bookingType": "ONEWAY",
  "bookingId": "D1122-MTHY6",
  "travelDistance": null,
  "timeZone": "America/New_York",
  "userName": "techsupport1@drivado.com",
  "cancellationFee": "50",
  "vehicleDetails": "6361151180bb35013b680b30",
  "isSearch": true,
  "createdAt": "2022-11-28T06:16:53.940Z",
  "__v": 0,
  "invoice_code_num": "DIO-271",
  "bookingStatus": "CANCELLED",
  "passengerDetails": "64008aa514bfd4378a52097c",
  "paymentStatus": "UNPAID"
}
`
} ;
