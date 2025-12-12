const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
    name: {type:String , required : true},
    price : {type : Number,required : true},
    descrip : {type: String}
    },{
    timestamps : true
    }
);
const Productmodel = mongoose.model("ProductDB", productSchema);
module.exports = Productmodel;