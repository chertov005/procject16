const mongoose = require('mongoose') ;
const joi = require('joi') ;



///////////////////////////////////////////////////////////////////////////
const schema = new mongoose.Schema({

    
name:String,
cals:Number,
price:Number,
img_url:String,
category_id:String,
date_created:{type:Date , default:Date.now()},
user_id:String


});



exports.FoodsModel =  mongoose.model('foods' , schema);

/////////////////////////////////////////////////////////////////////////////

exports.validFoods = (req_body) => {
    
    let schemaJoi = joi.object({
        

        name: joi.string() .min(2) .max(999999) .required() ,
        cals:joi.number() .min(1) .max(99999) .required() ,
        price:joi.number() .min(1) .max(99999) .required() ,
        img_url:joi.string() .min(1) .max(9999999) .allow(null ,'') ,
        category_id:joi.string() .min(2) .max(999999999) .required() ,
        


    });


    return schemaJoi.validate(req_body)




};

