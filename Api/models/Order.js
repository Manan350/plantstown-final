const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String , required:true},
        products: [
            {
                productId:{
                    type:String.apply,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: { type: Number, required: true},
        address:{type: Object, required: true},
        status:{type: String, default: "padding"}
      
        
    },{timestamps: true}
);
module.exports = mongoose.model("Order", OrderSchema);