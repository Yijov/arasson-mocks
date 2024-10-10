const fs = require("fs");
const path = require("path");

const timeout = 0;
const handleResponse = (req, res) => {
  return function (err, json) {
    console.log("timeout... " + timeout);
    setTimeout(function () {
      res.send(json);
      res.end();
    }, timeout);
  };
};

const readJSON = (filename, callback) => {
  filename = path.join(__dirname.padEnd(), filename);

  fs.readFile(filename, (err, data) => {
    console.log(filename);
    if (err) {
      callback(err);
      return;
    }

    try {
      callback(null, JSON.parse(data));
    } catch (ex) {
      callback(ex);
    }
  });
};
module.exports = { readJSON, handleResponse };
