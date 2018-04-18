// const yargs = require("yargs");
// const geocode = require("./geocode/geocode");

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;

// // console.log(argv);

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// 16f35bb1db22d258292b7e6825d60213
//  https://api.darksky.net/forecast/16f35bb1db22d258292b7e6825d60213/34,-82

const request = require("request");

request(
  {
    url: `https://api.darksky.net/forecast/16f35bb1db22d258292b7e6825d60213/34.8742328,-82.33433749999999`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(`The temperature is ${body.currently.temperature}.`);
    } else {
      console.log("Unable to fetch weather.");
    }
  }
);
