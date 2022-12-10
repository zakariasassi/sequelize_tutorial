import exprees from 'express';
import prodactmodel from '../model/Prodacts.js'

const router = exprees.Router()


router.post( '/addprodact' , async (req , res) => {
        const { prodactname , prodactdescription , prodactprice } = req.body

        const prodacts = await prodactmodel.create({
            prodacname : prodactname , 
            prodactdescription : prodactdescription , 
            prodactprice  : prodactprice , 
        })

        if(prodacts) {
            res.send( {
                statue: true , 
                msg :'success',
                
            })
        }else{
            res.send( {
                statue: false , 
                msg :'faild',
                
            }) 
        }
})















export default router