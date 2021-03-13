const sql = require("./db.js");

const Uploadimage = function(imageupload) {
    this.vid = imageupload.vid;
    this.labno = imageupload.labno;
      this.photos	 = imageupload.photos;
  };

  Uploadimage.create = (imageupload, result) => {
    // console.log(result)
    sql.query(`SELECT * FROM tbl_audit_photos WHERE vid =  ${imageupload.vid} && labno= ${imageupload.labno}`,(err, res) => {
        if(res.length>0){
            sql.query(`UPDATE tbl_audit_photos SET photos = ('${imageupload.photos}') where labno = ${imageupload.labno} & vid =  ${imageupload.vid}`, (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                }
                result(null, { id: res.insertId, ...imageupload });
              });
        }else{
            sql.query(`INSERT INTO tbl_audit_photos SET ?`, imageupload, (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                  return;
                }
                result(null, { id: res.insertId, ...imageupload });
              });
              
        }
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    });
  };

  module.exports = Uploadimage;