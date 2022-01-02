const joi = require('joi');

const appsValidation = data =>{
    const schema = joi.object({
        name: joi.string().required().max(225),
        price: joi.string().required().max(225),
        logo: joi.string().required().min(6),
        platforms: joi.array().required().max(225),
        description: joi.string().required().max(51200000),
        tech_stack: joi.array().required().max(225),
        code: joi.object().keys({
            name: joi.string().required().max(225).min(6),
            icon: joi.string().required().max(225).min(6),
            link: joi.string().required().min(6)
        }).required().max(3)
    })
    return schema.validate(data);
}


module.exports = appsValidation