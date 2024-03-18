const express = require('express') ;
const router = express.Router() ;


router.post('/' ,async(req , res) => {

    try {


        let myFile = req.files.myFile ;
        if(myFile.size <= 1024 * 1024 * 4) {
            return myFile.mv(`public/image/${myFile.name}` , (error) => {
                if(error) {
                    return res.status(401) .json(error)
                }

                else {
                    return res.json({message:'success upload file'})
                }
            })

        }
        
        else {
            return res.json({message:'size over 4 MB  error '})
        }


    } catch (error) {
        return res.status(500).json({message:'internal server error, try later1. '})
    }

});





module.exports=router;