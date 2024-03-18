const http = require('http') ;
const path = require('path') ;
const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
require('./DataBase/config/mongoose_connect');
const {routeInit} = require('./route/config/routeInit');
const fileUpload = require('express-fileupload')



const server = http.createServer(app) ;


app.use(cors());
app.use(fileUpload({
    limits:{fileSize:1024*1024*5}
}))
app.use(express.json());
app.use(express.static(path.join(__dirname ,'public')));
routeInit(app);


let port = process.env.PORT || 3002 ;


server.listen(port , (err) => {
    
    if(err) {
        return console.log(err)
    }
    
    return console.log(`server up , running on port ${port}`)
    
    
});


