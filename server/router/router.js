import exprees from 'express';
import prodactmodel from '../model/Blogs.js'
import upload from '../helper/multerConfig.js'
import multer from 'multer';
import path from 'path'
import usersmodel from '../model/Users.js';
import blogsmodel from '../model/Blogs.js';

const router = exprees.Router()











router.post('/addnewblog', async (req , res) => {
        const {blogbody , blogtitle , userid} = req.body 
        const addblog = await blogsmodel.create({
            blogbody: blogbody,
            blogtitle: blogtitle,
            userid: userid
        })
        if(addblog) {
            res.send(
                {
                    success: true,
                    message: 'Blog Added Successfully'
                }
            )
        }else{
            res.send(
                {
                    success: false,
                     message: 'Something Went Wrong'
                }
            )
        }

        
})

router.post ('/addnewuser'   ,  async (req , res) => {
        const { name, email, password } = req.body

        const check = await usersmodel.findOne({
            where : {
                username : name
            }
        })
        if(check ) {
            res.send({
                success: false,
                msg: 'Username already exists'
        })}else{
            const createuser = await usersmodel.create({
                username : name,
                password    : password,
                 email: email
            })
            if(createuser) {
            const getid = await usersmodel.findOne(
                {
                    where : {
                        username : name
                    }
                }
            )
            if(getid) {
                res.send({
                    success: true,
                    userid : getid.id,
                    username : getid.username,
                    email : getid.email,

            })
            }
              
        }else{
            res.send({
                success: false,
                
            })
        }









        }
    }   
)
    


export default router