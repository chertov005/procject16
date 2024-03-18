const express = require('express') ;
const router = express.Router() ;


router.post('/' ,async(req , res) => {

    try {
        
        return req.files.myImage.mv(`public/image/${req.files.myImage.name}` ,(err) => {

            if(err) {
                return res.status(401).json(err)
            }

            return res.json({message:'success upload file !! '})

        })

    } catch (error) {
        return res.status(500).json({message:'internal server error, try later. '})
    }

});





module.exports=router;