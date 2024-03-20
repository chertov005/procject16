const express = require('express') ;
const router = express.Router() ;
const path = require('path');


/////////////////////////////////////////////////////////////////////////////////////////////


router.post('/' , async(req , res) => {


    try {
        
        let myFile = req.files.file ;
        if(myFile.size <= 1024*1024*5) {

            let extArray = ['.JPEG' ,'.PNG ' ,'.GIF ','.TIFF ','.PSD ','.jpg'] 
            let checkExtFile = path.extname(myFile.name)
            if(extArray.includes(checkExtFile)) {

                myFile.mv(`public/image/${myFile.name}` , (error) => {

                    if(error) {
    
                        return res.status(401) .json(error)
    
                    }
    
                        return res.json({message:'file upload success'})
                })


            }

            else{

                return res.json({message:'file format not allow , only image file '})

            }

   
        
        } 

        else{
            return res.json({message:'file size over 4MB , max 4MB'})
        }



    } catch (error) {
        return res.status(500).json({message:'internal server error, try later1. '})
    }


});






















module.exports=router;