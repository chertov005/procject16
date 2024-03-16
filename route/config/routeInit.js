
const usersR = require('../route_list/usersRoute')
const foodsR = require('../route_list/foodsRoute')

exports.routeInit = (_app) => {

    _app.use('/users' , usersR);
    _app.use('/foods' ,foodsR);

};