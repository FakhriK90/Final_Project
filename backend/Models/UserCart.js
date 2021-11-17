const mongoose =require('mongoose')

const cartSchema = new mongoose.Schema({
    userId:{type: String, ref:"user"},
    items:[{
        productId:{type: String, ref: "product"},
        productName:String,
        productSrcUrl:String,
        quantity:{type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            default: 1},
            productPrice:Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = Cart = mongoose.model('cart', cartSchema)