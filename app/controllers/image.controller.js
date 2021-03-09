function upload(req, res){
    req.params.vid,
    req.params.labno
    try {
        // await upload(req, res);
        // console.log(req.files);
    
        if (req.files.length <= 0) {
            return res.status(500).json({
                status:"0",
                message: "You must select at least 1 file."
            });
        }
        return res.status(201).json({
            status:"1",
            message: "File upload Success",
            url: req.files.fieldname
        });
    
        // return res.send(`Files has been uploaded.`);
      } catch (error) {
        console.log(error);
    
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.json({status:"0",
          message:"Too many files to upload."});
        }
        return res.json({status:"0",
        message:`Error when trying upload many files: ${error}`});
      }
}

module.exports = {
    upload:upload
}