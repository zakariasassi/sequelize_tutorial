import express from 'express'
import cors from 'cors'
// import multer from 'multer'
import router from './router/router.js'
import path from 'path'
const port = 3001
const app = express();
// const form = multer();
// const formdata = multerform()


app.use(cors())
app.use(express.json())
// app.use(form.array())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

//define some directory  whare our view 
const publicDirictory = path.join( toString(path.__dirname) , '/public');
//excute diractry in our app 
app.use(express.static(publicDirictory));




app.use(router)









app.listen( port , () => { console.log ( `server listen on port ${port}` )})




