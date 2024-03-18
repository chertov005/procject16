const express = require('express') ;
const router = express.Router() ;


router.post('/' ,async(req , res) => {

    try {

        let myFile = req.files.myFile ;

        if(myFile.size <= 1024 *1024 * 2) {

            return myFile.mv(`public/image/${myFile.name}` , (err) => {

                if(err) {
                    return res.json(err)
                }

                return res.json({message:'success file upload'})

            })

        }

        else{
            return res.json({message:'size of file over 2 Mb'})
        }
  




    } catch (error) {
        return res.status(500).json({message:'internal server error, try later1. '})
    }

});





module.exports=router;