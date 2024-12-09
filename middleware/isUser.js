

var jwt = require('jsonwebtoken');

const User = require('../models/userModel')

exports.isUser=async(req,res,next)=>{
    try{

     const token = req.header('Authorization')

     var decoder = jwt.verify(token,process.env.privateKey)

     if(!decoder){return res.status(404).json({msg:'ynejimich yodkhel'})}

     const user = await User.findById(decoder.id)
     req.user = user

        next()
    }catch(err){
res.send(err)
    }
}


