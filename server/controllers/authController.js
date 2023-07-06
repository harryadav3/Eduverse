const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');


exports.signup = async (req,res) => {
    const { role } = req.body;
    // let user; 
    // console.log(req.body.data);
    // if(role === 'user'){
    //      user = await User.create({...req.body, role:"User"});
    // } else if (role === 'admin') {
    //      user = await User.create({...req.body, role: "Admin"})
        
    // }
   const user = await User.create({...req.body.data, role:"User"});

    console.log(user);
    const token = await jwt.sign({ userId: user._id.toString() }, process.env.TOP_SECRET, { expiresIn: '1h' });
    
    res.status(201).json({
        status: "succes",
        token,
        data: {
            user
        }
    })
}



exports.login = async (req,res) => {

    const {email , password} = req.body;

    if(!email || !password) {
       return res.status(400).json({ message: "Please provide a email and password"});
        
    }
    const user = await User.findOne({email}).select("+password")
    console.log(user);
    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!user || !passwordMatch){
        return res.status(401).json({message: "Incorrect email or password"})
    }

    const token = jwt.sign({ userId: user._id.toString() }, process.env.TOP_SECRET, {expiresIn: '1h'});

    res.status(200).json({ message : "success", token, data : { user }})
}

exports.verifyToken = (req,res,next) => {
    let token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer")){
        return res.status(401).json({message: "please provide a token"})
    }

    token = token.split(' ')[1];

    jwt.verify(token , process.env.TOP_SECRET, (err, decoded) => {
        if(err) {
            return res.status(403).json({ message: "Invalid token"});
        } 
        req.user = decoded;
        next();
    });
}