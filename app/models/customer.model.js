const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.username = customer.username;
    this.venuename = customer.venuename;
    this.state = customer.state;
    this.city = customer.city;
    this.masterlabcount	 = customer.masterlabcount;
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO tbl_venue_audit SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.getAllStates = result => {
  sql.query("SELECT * FROM tbl_states", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("getAllStates: ", res);
    result(null, res);
  });
};

Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE tbl_venue_audit SET masterlabcount = ? WHERE vid = ?",
    [customer.masterlabcount, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

module.exports = Customer;
