const express = require('express');
const router = express.Router();
const {CakesModel,validCakes} = require('../../DataBase/model/cakesModel')


router.get('/' , async(req , res) => {

    let perPage = 5
    let page = req.query.page-1 || 0
    let myFilter = {}
    if(req.query.s) {
        searchExp = new RegExp(req.query.s , 'i')
        myFilter = {$or:[{name:searchExp} , {info:searchExp}]}
    }

    try {
        
        let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*page)
        return res.status(200) .json(data)


    } catch (error) {
        return res.status(500).json({message:'internal server error 500'})
    }

});




module.exports = router;