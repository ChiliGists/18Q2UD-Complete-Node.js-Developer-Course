console.log("Starting app.");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

// console.log(_.isString(true));
// console.log(_.isString("Steve"));

var filteredArray = _.uniq(["Steve", 1, "Steve Allen", 1, 2, 3, 4, 5]);
console.log(filteredArray);

// console.log("Result ", notes.add(9, -2));

// var user = os.userInfo();
// // console.log(user);
// var dataToAppend = `Hello ${user.username}! You are ${notes.age}.\n`;

// fs.appendFile("greetings.txt", dataToAppend, err => {
//     if (err) throw err;
//     console.log(`${dataToAppend} was appended to the file`);
// });
