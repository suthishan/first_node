const util = require("util");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        // console.log(req.params)
        var vid = req.params.vid
        var labno = req.params.labno                            
        var destination = '../venueportal/assets/auditphotos/'+vid;
        // E:\xampp\htdocs\venueportal\assets\auditphotos
        console.log(destination)
        var stat = null;
        try {
            stat = fs.statSync(destination);
            cb(null, destination);
        } catch (err) {
            if (!fs.existsSync(destination)) {
                // if not create directory
                    fs.mkdirSync(destination);
                    cb(null, destination);
                }
            
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created because an inode of a different type exists at "' + dest + '"');
        }
    },
    filename: function(req, file, cb){
        var vid = req.params.vid
        var labno = req.params.labno
        var valuett = vid+'-lab'+labno+'-'+new Date().getTime();
        
        

        // var str= valuett.join("|")
        // console.log(file)
        cb(null, vid+'-lab'+labno+'-'+new Date().getTime() + path.extname(file.originalname));
        

    }
});


const filefilter = (req, file, cb)=>{
    if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)){
        req.fileValidationError = 'Only image files are allowed!';
        cb(new Error('Only image files are allowed!'), false);
        
    }else {
        cb(null, true);
    }
}

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024*1024*10
    },

    filefilter:filefilter
});


// var uploadFilesMiddleware = util.promisify(upload);

module.exports = {
    
    upload:upload
}