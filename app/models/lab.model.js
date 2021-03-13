const sql = require("./db.js");

const LabCount = function(labdetails){
    this.vid = labdetails.vid;
    this.labno = labdetails.labno;
    this.labcount = labdetails.labcount;
  }

  LabCount.updatecount = (labdetails, result) => {
    console.log(labdetails)
    sql.query(`SELECT * FROM tbl_audit_photos WHERE vid =  ${labdetails.vid} && labno= ${labdetails.labno}`,(err, res) => {
      // console.log(err)
      // console.log(res)
      if(res.length>0){
        sql.query(`UPDATE tbl_audit_photos SET labcount = ${labdetails.labcount} where labno = ${labdetails.labno} && vid =  ${labdetails.vid}`, (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }
              result(null, { id: res.insertId, ...labdetails });
            });
      }else{
        sql.query(`INSERT INTO tbl_audit_photos SET ?`, labdetails, (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }
              result(null, { id: res.insertId, ...labdetails });
            });
      }
      // console.log(check)
    });
    // console.log(check)
  //   if(check>0){
    
  //   sql.query("UPDATE INTO tbl_audit_photos SET labno = ? where vid = ?", [labdetails.labno, labdetails.vid], (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(err, null);
  //       return;
  //     }
  //     result(null, { id: res.insertId, ...labdetails });
  //   });
  // }else{
  //   sql.query("INSERT INTO tbl_audit_photos SET ?", labdetails, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(err, null);
  //       return;
  //     }
  //     result(null, { id: res.insertId, ...labdetails });
  //   });
  // }
  };

  module.exports = LabCount;