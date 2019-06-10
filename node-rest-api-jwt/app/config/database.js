//Set up mongoose connection
const mongoUrl = 'mongodb+srv://vifanti:280695@crud-nodejs-vf8hk.mongodb.net/dbufc?retryWrites=true';
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost/node_rest_api';
// mongoose.connect(mongoDB);
mongoose.connect(mongoUrl, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;