const jwt = require('jsonwebtoken');



module.exports = function(req , res , next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({message: "Access Denied"});

    try {
        req.user = jwt.verify(token, process.env.TOKEN_HIDDEN)
        next();
    } catch (error) {
        return res.status(400).send({message: "Invalid Token"});
    }
    
}