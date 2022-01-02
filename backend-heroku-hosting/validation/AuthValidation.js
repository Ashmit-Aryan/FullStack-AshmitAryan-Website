const Joi = require('joi')


const registrationValidation = data=>{
    const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().min(6).max(255).required(),
        password: Joi.string().min(8).max(1024).required()
    })
    return schema.validate(data)
}
const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required(),
        password: Joi.string().min(8).max(1024).required()
    })
    return schema.validate(data)
}

module.exports.loginValidation = loginValidation;
module.exports.registrationValidation = registrationValidation;
