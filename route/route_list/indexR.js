const express = require('express');
const router = express.Router();


router.get('/' , async(req , res) => {

    try {
        
        return res.status(200) .json({message:'my index route'})


    } catch (error) {
        return res.status(500).json({message:'internal server error 500'})
    }

});




module.exports = router;