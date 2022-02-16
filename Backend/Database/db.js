const mongoose = require('mongoose')

const DB = "mongodb+srv://khatabook:khatabook@cluster0.ljoho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const ConnectDB = () => {
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },() => {
        console.log("DB connected");
    });
}

module.exports = ConnectDB;