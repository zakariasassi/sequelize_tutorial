import multer from 'multer'
import path from 'path'


    const storage = multer.diskStorage({
        destination: path.join( toString(path.__dirname) , '../public/', 'uploads'),        
        filename: function (req, file, cb) {   
            cb(null , Date.now() + '-' + file.originalname )  
        }
    })


    let upload = multer({ storage: storage}).single('blogimage');



export  default upload