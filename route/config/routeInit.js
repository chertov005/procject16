
const usersR = require('../route_list/usersRoute')
const foodsR = require('../route_list/foodsRoute')
const indexR = require('../route_list/indexR')

exports.routeInit = (_app) => {

    _app.use('/' , indexR);
    _app.use('/users' , usersR);
    _app.use('/foods' ,foodsR);

};