const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI  //mernstack : unknow word
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/mernstack';
mongoose.connect(URI
//     , {
//     userNewUrlParser: true,
//     useCreateIndex: true
// }
);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});