import express from 'express'
import cors from 'cors'
import multer from 'multer'
import router from './router/router.js'

const port = 3001
const app = express();
const form = multer();



app.use(cors())
app.use(express.json())
app.use(form.array())



app.use(router)









app.listen( port , () => { console.log ( `server listen on port ${port}` )})




