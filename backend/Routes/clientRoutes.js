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

// Update cart

router.put('/cart/edit/:id',isAuth(),async (req,res)=>{
    const userId=req.params.id
    const {productId,quantity}=req.body
    try {
        let cart= await Cart.findOne({userId})
        let item = await Product.findOne({_id:productId})
        if (!item)
        return res.status(400).send({msg:'product not found'})
        if (!cart) {
            return res.status(400).send({msg:'Cart not found'})
        } else {
            // if cart exists for tis user
            let itemIndex = cart.items.findIndex(p=> p.productId == productId)
            // check if product exists or not in cart
            if (itemIndex == -1) {
                return res.status(400).send({msg:' product not found in this cart'})
            } else {
                let productItem = cart.items[itemIndex];
                productItem.quantity=quantity;
                cart.items[itemIndex]=productItem;
            }
            cart.bill = cart.items.reduce((sum, item)=> sum + item.productPrice*item.quantity,0)
            cart =await cart.save()
            return res.send(cart)
        }
    } catch (error) {
        return res.status(400).send({error, msg:"something went wrong"})
    }
})

// delete item from cart
router.delete('/cart/delete/:id/:productId',isAuth(), async(req,res)=>{
    const userId=req.params.id;
    const productId=req.params.productId;
    try {
        let cart = await Cart.findOne({userId})
        let itemIndex = cart.items.findIndex(p=> p.productId == productId)
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex]
            cart.bill -= productItem.quantity*productItem.productPrice;
            cart.items.splice(itemIndex,1)
        }
        // console.log(cart)
        cart = await cart.save();
        return res.send({msg:' item deleted successfully',cart})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:'something went wrong', error})
    }
})

module.exports = router;