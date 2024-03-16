const express = require('express');
const router = express.Router() ;
const {FoodsModel,validFoods} = require('../../DataBase/model/foodsModel');
const {authToken} = require('../../AuthToken/config_AuthToken')


router.get('/' ,authToken, async(req , res) => {

    try {
        
        let data ;

        if(req.tokenData.role == 'admin') {
            data = await FoodsModel.find({})
            return res.status(200) .json(data)
        }
        
        else{
            data = await FoodsModel.find({user_id:req.tokenData._id})
            return res.status(200) .json(data)
        }




    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
    }
    
});

//////////////////////////////////////////////////////////////////////////////////////////


router.post('/' ,authToken, async(req , res) => {
    
    let valid = validFoods(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    };

    try {
      
        let data = new FoodsModel(req.body) ;
        data.user_id = req.tokenData._id
        await data.save() ;
        return res.status(201).json(data) ;
        


    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }
    
});

////////////////////////////////////////////////////////////////////////////////////////


router.delete('/:id' ,authToken, async(req , res) =>{ 
    
    
    try {
        
        let data ;

        if(req.tokenData.role == 'admin') {
            data = await FoodsModel.deleteOne({_id:req.params.id})
            return res.json(data)
        }

        else{
            data = await FoodsModel.deleteOne({_id:req.params.id , user_id:req.tokenData._id})
            return res.json(data)
        }




    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }

});

///////////////////////////////////////////////////////////////////////////////////


router.put('/:id' , async(req , res) => {

    let valid = validFoods(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    };


    try {
        
        let data ;

        if(req.tokenData.role == 'admin') {
            data = await FoodsModel.updateOne({_id:req.params.id}, req.body)
            return res.json(data)
        }

        else{
            data = await FoodsModel.updateOne({_id:req.params.id , user_id:req.tokenData._id} , req.body)
            return res.json(data)
        }




    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }


});






module.exports = router ;