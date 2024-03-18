
const usersR = require('../route_list/usersRoute');
const foodsR = require('../route_list/foodsRoute');
const indexR = require('../route_list/indexR');
const fileUploadR = require('../route_list/fileUploadRoute');
const cakesR = require('../route_list/cakesRoute');


exports.routeInit = (_app) => {

    _app.use('/' , indexR);
    _app.use('/users' , usersR);
    _app.use('/foods' ,foodsR);
    _app.use('/upload' , fileUploadR);
    _app.use('/cakes' , cakesR);

};