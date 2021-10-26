const {check, validationResult} = require('express-validator')

exports.registerCheck=()=>[
    check("lastName","lastName is required").notEmpty(),
    check("firstName","firstName is required").notEmpty(),
    check("userName","userName is required").notEmpty(),
    check("email",'this field must be a valid email').isEmail(),
    check("password","password should have 6 chars").isLength({min:6})
]

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {return res.status(400).send({errors:errors.array()})}
    next()
}