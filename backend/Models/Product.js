const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{type: String, required:true},
    productPrice:{type: Number, required:true},
    productDesc:{type: String, required:true},
    productSrcUrl:{type: String, required:true},
    productCategory:{type: String, required:true}
})

module.exports = Product = mongoose.model('product', productSchema)