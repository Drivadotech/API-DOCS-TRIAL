export const login = `let data = JSON.stringify({
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
  res.send(error);`;

export const loginBody = `{
  "email": "REGISTERED EMAIL ID",
  "password":"PASSWORD"
}
`;

export const loginResult = `{
  "success": true,
  "message": "Login Successful"
}`;

export const accessToken = `const config = {
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
`;

export const accessTokenResult = `
{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0NTIzNGYzY2NiOGRhZDQ1Mjg3ZmUiLCJpYXQiOjE2ODE0NTkzMjMsImV4cCI6MTY4MjMyMzMyM30.JcuZSOm2Km3_FD951jvaBXTuGH6KiQWoNr2f7c6GQ3U"
}`;

export const placesAutoComplete = `
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

export const placesAutoCompleteResult=`
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

export const placesDetailsSource=`
const config = {
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

export const placesDetailsSourceResult=`{
  "lat": 51.4700223,
  "lng": -0.4542955
}`

export const placesDetailsDestination=`const config = {
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

export const placesDetailsDestinationResult=`{
  "lat": 51.50455969999999,
  "lng": -0.0825847
}`

export const placeTimezone = `
  const config = {
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
  }
`;
export const placeTimezoneResult = `
{
  "timezone": "Europe/London",
  "timezone_offset": 0,
  "timezone_offset_with_dst": 1,
  "date": "2023-04-13",
  "date_time": "2023-04-13 11:42:26",
  "date_time_txt": "Thursday, April 13, 2023 11:42:26",
  "date_time_wti": "Thu, 13 Apr 2023 11:42:26 +0100",
  "date_time_ymd": "2023-04-13T11:42:26+0100",
  "date_time_unix": 1681382546.823,
  "time_24": "11:42:26",
  "time_12": "11:42:26 AM",
  "week": 15,
  "month": 4,
  "year": 2023,
  "year_abbr": "23",
  "is_dst": true,
  "dst_savings": 1
}
`;

// export const checkDistance

// export const checkDistanceResult

// export const showVehicleWithPrice

// export const showVehicleWithPriceResult

// export const showVehicleWithPriceHourly

// export const showVehicleWithPriceHourlyResult

// export const bookingWithVechile

// export const bookingWithVechileResult

// export const createPassenger

// export const createPassengerResult

// export const bookingStatus

// export const bookingStatusResult

// export const paymentRequest

// export const paymentRequestResult

// export const cancelBooking

// export const cancelBookingResult
