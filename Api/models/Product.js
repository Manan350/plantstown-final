const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        title:{type: string , required:true, unique:true},
        desc:{type:string, required:true, unique:true},
        img: {type:string, required:true},
        categories: {type: Array, required:true},
        size: {type:string, required:true},
        type: {type:string, required:true},
        price: {type:string, required:true},
      
        
    },{timestamps: true}
);
module.exports = mongoose.model("Product", ProductSchema);