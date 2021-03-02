module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  app.post("/auditdetails", customers.create);
  app.get("/getallStates", customers.findAllStates);
  app.put("/auditlabcount/:vid", customers.update);

};
