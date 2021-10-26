const express = require('express')
const router = express.Router()
const User = require('../Models/User')


//get all users
router.get('/users',async (req,res)=>{
    try { 
        const users= await  User.find()
        res.send({users,msg:"users successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot get users :( "})
    }
})


//Delete user
router.delete('/manageusers/:id', async(req,res)=>{
    try {
        const result = await User.deleteOne({_id:req.params.id})
        result.deletedCount?
        res.send({msg:"User deleted successfully :) "}):
        res.send({msg:"User already deleted :( "})
    } catch (error) {
        res.status(400).send({msg:"cannot delete users :( "})
    }
})

module.exports = router