const sql = require("./db.js");

const LabCount = function(labdetails){
    this.vid = labdetails.vid;
    this.labno = labdetails.labno;
    this.labcount = labdetails.labcount;
  }

  LabCount.updatecount = (labdetails, result) => {
    sql.query("INSERT INTO tbl_audit_photos SET ?", labdetails, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...labdetails });
    });
  };

  module.exports = LabCount;