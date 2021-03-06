const Customer = require("../models/customer.model.js");

const LabCount = require("../models/lab.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const customer = new Customer({
    username: req.body.username,
    venuename: req.body.venuename,
    state: req.body.state,
    city:req.body.city,
    masterlabcount:req.body.masterlabcount
  });

  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).json({status:'0',message:'Some error occurred'});
    else res.json({status:'1',message:'data Inserted',data:data});
  });
};

exports.updatecount = (req,res)=>{
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
const labDetials = new LabCount({
  vid: req.body.vid,
  labno: req.body.labno,
  labcount: req.body.labcount,
});

LabCount.updatecount(labDetials, (err, data)=>{
  if(err)
    res.status(500).send({
      message:err.message || "Some error occured while inserting."
    });
    else res.json({status:'1',message:'data Inserted',data:data});
});
};

exports.findAllStates = (req, res) => {
  Customer.getAllStates((err, data) => {
    if (err)
      res.status(500).json({
        status:"0",
        message:"Some error occurred while retrieving data."
      });
    else res.json({status:"1",
    message:"success",
    result:data});
  });
};

exports.findOne = (req, res) => {
  Customer.findById(req.body.vid,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          status:'0',
          message: `No Venue code with id ${req.body.vid}.`
        });
      } else {
        res.status(500).send({
          message: "No Venue code with id " + req.body.vid
        });
      }
    } else res.json({"result":data});
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.vid,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.vid}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.vid
          });
        }
      } else res.json({status:'1',message:'Lab Count Inserted'});
    }
  );
};

