const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const Product = require('../Models/Product')
const Cart = require('../Models/UserCart')
const isAuth = require('../middlewares/password')



// Get user detail

router.get('/profile',
isAuth(),
async(req,res)=>{
    try {
        const response = await User.findOne({_id:req.user._id})
        res.send(response)
    } catch (error) {
        res.status(400).send({msg:'No user get it'})
    }
})

// Update user details
router.put('/edit/:id',
isAuth(),
async(req,res)=>{
    try {
        const response = await User.updateOne({_id:req.params.id}, {$set:{...req.body}})
        const edit = await User.findOne({_id:req.params.id})
        response.modifiedCount?
        res.send({edit, msg:'details edited successfully'}):
        res.send({msg:'no details edited'})
    } catch (error) {
        res.status(400).send({error, msg:"cannot edit profile"})
    }
})

//Getting cart
router.get('/cart/:id',
isAuth(),
async(req,res)=>{
    const userId= req.params.id
    try {
        const cart = await Cart.findOne({userId})
        console.log(cart)
        if (cart && cart.items.length>0) {
            res.send({cart, msg:"cart get successfully"})
        } else {
            res.send({msg:"no cart get"})
        }
    } catch (error) {
        res.status(400).send({error, msg:"something wet wrong"})
    }
})

//Adding to cart
router.post('/cart/:id',
isAuth(),
async(req,res)=>{
    const userId=req.params.id;
    const {productId, quantity}=req.body;
    try {
        let cart = await Cart.findOne({userId})
        const product = await Product.findOne({_id:productId})
        if(!product)
        return res.status(400).send({msg:'product not found'})
        
        const productPrice= product.productPrice;
        const productName= product.productName;
        const productSrcUrl= product.productSrcUrl
        if (cart) {
            //if cart exists for the user
            const productIndex = cart.items.findIndex(p => p.productId == productId)
            //Check if product exists
            if (productIndex>-1) {
                const productItem = cart.items[productIndex]
                productItem.quantity+= quantity;
                cart.items[productIndex]= productItem;
            } else {
                cart.items.push({productId,productName,productSrcUrl,quantity,productPrice});
            }
            cart.bill += quantity*productPrice
            cart = await cart.save()
           return  res.send({msg:'product added to cart', cart})
        } else {
            //if no cart exists, then create one
            const newCart = await Cart.create({
                userId,
                items:[{productId,productName,productSrcUrl,quantity,productPrice}],
                bill:quantity*productPrice
            });
           return  res.send({msg:'new cart added', cart:newCart})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({error, msg:'Something went wrong'})
    }
}
);

// Getting cart

module.exports = router;