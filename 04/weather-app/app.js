const request = require("request");

request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=103%20E%20hypericum%20ln%20greenville%20sc",
    json: true
  },
  (error, response, body) => {
    console.log(body);
  }
);
