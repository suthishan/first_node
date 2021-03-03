module.exports = app => {
  const audit = require("../controllers/customer.controller.js");

  // const auditlab = require("../controllers/lab.controller.js");

  app.post("/auditdetails", audit.create);
  app.get("/getallStates", audit.findAllStates);
  app.put("/auditlabcount/:vid", audit.update);
  app.get("/labcount/:vid", audit.findOne);
  // app.get("/labcountupdate/:vid", audit.findOne);
  app.post("/updateLabcount",audit.updatecount);


};
