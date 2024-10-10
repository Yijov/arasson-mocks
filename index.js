const express = require("express");
const cors = require("cors");
const app = express();
const { routes } = require("./routes/routes.js");
const { handleResponse, readJSON } = require("./helpers");
const port = 3000;

app.use(cors());

for (const route in routes.get) {
  app.get(route, (req, res) => {
    console.log("GET Request.... " + req.route.path);
    readJSON(routes.get[req.route.path].response, handleResponse(req, res));
  });
}

for (const route in routes.post) {
  app.post(route, (req, res) => {
    console.log("POST Request.... " + req.route.path);
    readJSON(routes.get[req.route.path].response, handleResponse(req, res));
  });
}

for (const route in routes.put) {
  app.put(route, (req, res) => {
    console.log("PUT Request.... " + req.route.path);
    readJSON(routes.get[req.route.path].response, handleResponse(req, res));
  });
}

for (const route in routes.put) {
  app.patch(route, (req, res) => {
    console.log("PATCH Request.... " + req.route.path);
    readJSON(routes.get[req.route.path].response, handleResponse(req, res));
  });
}

for (const route in routes.put) {
  app.delete(route, (req, res) => {
    console.log("DELETE Request.... " + req.route.path);
    readJSON(routes.get[req.route.path].response, handleResponse(req, res));
  });
}

app.use("*", (req, res, next) => {
  res.statusCode = 404;
  res.json({
    error: "Not Found",
    message: "connot find " + req.baseUrl,
  });
});

app.listen(port, () => {
  console.log("Mock server runing on port " + port);
});
