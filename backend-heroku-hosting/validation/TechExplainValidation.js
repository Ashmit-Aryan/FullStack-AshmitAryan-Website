const joi = require('joi');

const techExplainValidation = data =>{
    const schema = joi.object({
        title: joi.string().required().max(225),
        img_url: joi.string().required().min(6),
        description: joi.string().required().max(51200000),
        pros: joi.array().required().max(225),
        cons: joi.array().required().max(225),
        video_link: joi.string().required().min(6)
    })
    return schema.validate(data);
}
module.exports = techExplainValidation