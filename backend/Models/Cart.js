// const mongoose = require('mongoose')

// const ItemCartSchema = new mongoose.Schema({
//     productId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"product",
//     },
//     quantity:{
//         type:Number,
//         required:true,
//         min:[1]
//     },
//     productPrice:{
//         type:Number,
//         required:true
//     },
//     total:{
//         type:Number,
//         required:true
//     }
// });

// const CartSchema = new mongoose.Schema({
//     items:[ItemCartSchema],
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"user"
//     }
// })

// module.exports = Cart = mongoose.model('cart', CartSchema)