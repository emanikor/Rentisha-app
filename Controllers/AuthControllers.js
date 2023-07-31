const UserModel = require("../Models/UserModel");


const jwt =require("jsonwebtoken")

const maxAge = 3* 24* 60 *60;

const createToken =(id) =>{
    return jwt.sign({id}, "rentisha supper secret key",{
        expiresIn: maxAge,
    }
)}

module.exports.register = async(req, res, next) =>{
    try{
        const{email,password} = req.body;
        const user = await UserModel.create(email,password)
        const token = createToken(user._id);
        
        
        res.cookie("jwt", token,{
            withCridentials:true,
            httpOnly: false,
            maxAge:maxAge * 1000,
        });
        
        res.status(201).json({user:user._id, created: true})
        
            }catch(err){
           console.log(err);
           res.status(500).json({ error: "Something went wrong" });
            }
};


module.exports.signin = async(req, res, next) =>{
    
};