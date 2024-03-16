const express = require('express');
const router = express.Router() ;
const {UserModel,validUser , validLoginUser} = require('../../DataBase/model/usersModel');
const bcrypt = require('bcrypt');
const {authToken,genToken} = require('../../AuthToken/config_AuthToken');




//////////////////////////////////////////////////////////////////////////////
router.get('/' ,authToken, async(req , res) => {

    try {
    
        let data ;

        if(req.tokenData.role == 'admin') {

            data = await UserModel.find({})
            return res.status(200) .json(data)

        }


            return res.status(200) .json({error:'you dont have permission for this route , please connect administrator  '})

       

    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
    }
    
});


////////////////////////////////////////////////////////////////////////////////////
router.post('/' , async(req , res) => {
    
    let valid = validUser(req.body) 
    if(valid.error) {
        return res.status(400) .json(valid.error.details) 
    }
    
    try {

        let data = new UserModel(req.body) ;
        data.password = await bcrypt.hash(data.password , 10);
        await data.save() ;
        return res.status(201) .json(data);
        
    } catch (error) {
        
        return res.status(500) .json({message:`'internal server error 500 ${error}'`})
    }
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/login' , async(req , res) => {
    
    let valid = validLoginUser(req.body);
    if(valid.error) {
        return res.status(400) .json(valid.error.details) 
        
    };
    
    
    
    try {
        
        let user = await UserModel.findOne({email:req.body.email}) ;
        if(!user) {
            return res.status(401) .json({message:'wrong user'}) ;
        }

        let passValid =  await bcrypt.compare(req.body.password , user.password) ;
        if(!passValid) {
            return res.status(401) .json({message:'wrong password'})
        }

        let token = genToken(user._id , user.role);
        return res.json({message:`success , you log in` , myToken:token});


    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }
    
});

///////////////////////////////////////////////////////////////////////////

router.delete('/:id' , async(req , res) => {
    
    try {
        
        let data = await UserModel.deleteOne({_id:req.params.id})
        return res.status(data)


    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }


});

///////////////////////////////////////////////////////////////////////////////////////////


router.put('/:id' , async(req , res) => {
    
    let valid = validUser(req.body) 
    if(valid.error) {
        return res.status(400) .json(valid.error.details) 
    }


    try {
        
        let data = await UserModel.updateOne({_id:req.params.id})
        return res.status(data)


    } catch (error) {
        return res.status(500) .json({message:'internal server error 500'})
        
    }


});


//////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/info' ,authToken , async(req , res) => {
    
    try {
        
        let data = await UserModel.findOne({_id:req.tokenData} ,{password:0});
        return res.status(200) .json(data)


    } catch (error) {
        
        return res.status(500) .json({message:'internal server error 500'})
    }

})


module.exports = router;