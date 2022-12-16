import multer from 'multer'
import path from 'path'


    const storage = multer.diskStorage({
        destination: path.join( toString(path.__dirname) , '../public/', 'uploads'),
        
        filename: function (req, file, cb) {   
            // null as first argument means no error
            cb(null, Date.now() + '-' + file.originalname )  
        }
    })
    let upload = multer({ storage: storage}).single('avatar');



export  default upload