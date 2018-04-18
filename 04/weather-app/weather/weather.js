const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/16f35bb1db22d258292b7e6825d60213/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
        // console.log(`The temperature is ${body.currently.temperature}.`);
      } else {
        console.log("Unable to fetch weather.");
      }
    }
  );
};

module.exports.getWeather = getWeather;
