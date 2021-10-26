const express = require('express');
const router = express.Router();
// const Product = require('../Models/Product');
const User = require('../Models/User')
const isAuth = require('../middlewares/password')

// Add product to cart

router.post('/addcart',
isAuth(),
async(req,res) => {
    try {
        const user = await User.findById(req.user._id)
        
        if(!user) { return res.send({msg:'You must loggin'})}
        await User.findOneAndUpdate({id:req.user._id}, {cart:req.body})
        const userm = await User.findById(req.user._id)

        res.send({msg:'Added to cart',user:userm})
    } catch (error) {
        res.status(400).send({error, msg:'Nothing to add'})
    }
})

module.exports = router;