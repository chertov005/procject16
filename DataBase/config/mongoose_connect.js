const mongoose = require('mongoose');
const {config} = require('../../keys/tokenKey')

mongoose.connect(`mongodb+srv://${config.db_name}:${config.db_pass}@cluster.w5tvj76.mongodb.net/DataBaseStore`)
  .then(() => console.log('Connected DataBaseStore'));