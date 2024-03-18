const mongoose = require('mongoose');
const joi = require('joi');



const cakeSchema = new mongoose.Schema({

    name:String ,
    info:String ,
    price:Number ,
    img_url:String ,
    date_created:{type:Date , default:Date.now()}

});


exports.CakesModel = mongoose.model('cakes' , cakeSchema);


exports.validCakes = (_req_body) => {

    let schema = joi.object({

        name:joi.string().min(2).max(99).required() ,
        info:joi.string().min(2).max(99).required() ,
        price:joi.string().min(1).max(9999).required() ,
        img_url:joi.string().min(3).max(500).allow(null ,'') 


    })

    return schema.validate(_req_body)

};