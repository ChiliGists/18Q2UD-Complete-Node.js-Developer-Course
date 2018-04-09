console.log("Starting app.");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var user = os.userInfo();
// console.log(user);
var dataToAppend = `Hello ${user.username}! You are ${notes.age}.\n`;

fs.appendFile("greetings.txt", dataToAppend, err => {
    if (err) throw err;
    console.log(`${dataToAppend} was appended to the file`);
});
