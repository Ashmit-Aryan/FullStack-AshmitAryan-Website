const express = require('express');
const User = require('../model/UserModel');
const {registrationValidation , loginValidation} = require('../validation/AuthValidation');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/sign-up', async(req, res)=>{
    // res.clearCookie('session-cookie')
    //validation of data Server Side
    const {error} = registrationValidation(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});

    // Find if Email Exist 
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(409).send({message: "Email Already Exist , Try Login"});

    // Hash Password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password , salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        return res.status(201).send({ user: savedUser._id });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
});


router.post('/login', async(req,res)=> {
    // Validation of Data Server Side
    const {error} = loginValidation(req.body);
    if(error) {return res.status(400).send(error);}

    // Find if Email Exist
    const userExist = await User.findOne({email: req.body.email});
    if(!userExist) {return res.status(503).send({message: "User Dont Exist, Please Sign Up"});}
    

    //Validate Password
    const validPass = await bcryptjs.compare(req.body.password , userExist.password);
    if(!validPass) {return res.status(403).send({message: "Password or Email is Worng"});}

    const token = jwt.sign({_id: userExist._id}, process.env.TOKEN_HIDDEN,{
        expiresIn: '24h'
    });
    res.status(200).send({message:"Logged In",sessionToken:token});
})

module.exports = router