const express = require("express");
const bodyParser = require("body-parser");
const venue = require("./app/routes/customer.routes.js");
const venuephotos = require("./app/routes/image.routes.js");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Application Test." });
});
app.use("/venue",venue);
app.use("/venuephotos",venuephotos);  


// require("./app/routes/lab.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
