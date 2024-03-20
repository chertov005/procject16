const express = require('express');
const router = express.Router();
const {CakesModel,validCakes} = require('../../DataBase/model/cakesModel')






router.get('/' , async(req , res) => {

    let perPage = 20
    let page = req.query.page -1

    let myFilter = {}
    if(req.query.s) {
        let sExp = new RegExp(req.query.s ,'i')
        myFilter = {$or:[{name:sExp} ,{info:sExp}]}
    }


    try {

        let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*page)
        return res.status(200) .json(data)
        
    } catch (error) {
        return res.status(500) .json({message:'there was problem with server , try later'})
    }


});



















module.exports = router;