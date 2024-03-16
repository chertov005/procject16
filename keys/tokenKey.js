
require('dotenv').config();



exports.config = {
    
    publicKey:process.env.PUBLICKEY_TOKEN ,
     db_name:process.env.DB_NAME,
     db_pass:process.env.DB_PASSWORD 
    
    };