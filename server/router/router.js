import exprees from 'express';
import multer from 'multer';
import path from 'path';
import upload from '../helper/multerConfig.js'
import usersmodel from '../model/Users.js';
import blogsmodel from '../model/Blogs.js';
import { where } from 'sequelize';

const router = exprees.Router()








router.get('/getblogs' , async(req , res ) => {

        const allblogs = await blogsmodel.findAll();
        if(allblogs){
            res.send(
                {
                    success : true,
                    blogs : allblogs
                }
            )
        }else{
            res.send(
                {
                    success : false,
                    masg : 'Something Went Wrong'
                    
                }
            )
        }

})



router.post('/update' , async(req , res) => {
            const { id ,  blogbody, blogtitle} = req.body

            const updateblog = await blogsmodel.update(
                {
                    blogbody :blogbody,
                    blogtitle :blogtitle,
                 }, {
                where: {
                  id: id
                }
              });
            

            if(updateblog) {
                res.send(
                    {
                        masg:"ok",
                        status:true
                    }
                )
            }
})


 


router.post('/deeletblog' , async(req , res) => {
    const {id} = req.body

    const deleteblog = await blogsmodel.destroy(
        {
            where:{
                id:id
            }
        }
    )
    if(deleteblog){
        res.send(
            {
                status: true,
                msg : "blog was deleted successfully"
            }
        )
    }else{
        res.send(
            {
                status: false,
                msg : "the blog was not deleted"
            }
        )
    }

})



router.post('/addnewblog', async (req , res) => {

    try {
        // 'avatar' is the name of our file input field in the HTML form


        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields

            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            const classifiedsadd = {
				image: req.file.filename
			};
          
            // console.log( "/store/server/public/uploads/ " + classifiedsadd.image)

            const {blogbody , blogtitle , userid} = req.body 
            const addblog =  blogsmodel.create({
                blogbody: blogbody,
                blogtitle: blogtitle,
                userid: userid,
                imagepath : classifiedsadd.image
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
    
        }); 

    }catch (err) {console.log(err)}



    
   
        
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