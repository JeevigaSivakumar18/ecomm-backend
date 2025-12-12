const mongoose = require('mongoose')

const connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connection success");
        console.log(process.env.MONGODB_URL)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};
module.exports = connection;