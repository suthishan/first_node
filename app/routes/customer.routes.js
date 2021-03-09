// module.exports = app => {

  const express = require('express');
  const audit = require("../controllers/customer.controller.js");

  // const auditlab = require("../controllers/lab.controller.js");

  const router = express.Router();

  router.post("/auditdetails", audit.create);
  router.get("/getallStates", audit.findAllStates);
  router.put("/auditlabcount/:vid", audit.update);
  router.post("/auditCount", audit.findOne);
  // router.get("/labcountupdate/:vid", audit.findOne);
  router.post("/updateLabcount",audit.updatecount);

  module.exports = router; 
// };
