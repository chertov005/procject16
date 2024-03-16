const jwt = require('jsonwebtoken')
const {config} = require('../keys/tokenKey') ;


///////////////////////////////////////////////////////////////////////////////

exports.genToken = (_id ,role) => {

    let token = jwt.sign({_id ,role} ,config.publicKey , {expiresIn:'60mins'});

    return token;

};



////////////////////////////////////////////////////////////////////////////////////





exports.authToken = async(req , res ,next) => {

    if(!req.header('x-api-key')) {

        return res.status(401) .json({message:'no token sent in header req'}) ;
    }

    try {

        let decodeToken = jwt.verify(req.header('x-api-key') , config.publicKey)

        req.tokenData = decodeToken ;

        console.log(req.tokenData);

        next();
        
    } catch (error) {
        return res.status(401) .json({message:'token expired or invalid'})
    }

};


/////////////////////////////////////////////////////////////////////////////////////////
