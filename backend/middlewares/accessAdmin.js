const User = require('../Models/User')

const authRole = async (req,res,next) =>{
    try {
        const user = await User.findOne({
            _id: req.user.id
        })
        if (user.role ==='client')
        {return res.status(400).send({msg:'Access denied'})}
        next()
    } catch (error) {
        {return res.status(400).send({msg:error})}
    }
}

module.exports = {authRole}