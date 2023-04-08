const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

mongoose
    .connect(mongoURI)
    .then(()=> {
        console.log("connected to Mongo successfully");
    })
    .catch((error)=>{
        console.log("error",error);
    })

module.exports = mongoose.connectToMongo;