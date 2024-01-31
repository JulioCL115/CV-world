const jwt = require('../libs/jwt');
const TOKEN_SECRET = require('../config.js')


const authRequired = (req, res , next) => {
    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({message : 'Unauthorized'})
    }
    jwt.verify(token, TOKEN_SECRET, (err, decodedToken) => {
        if (err){
            return res.status(403).json({message : 'Invalid Token'})
        }
        console.log(decodedToken);
        req.user = decodedToken;  
        next();
    })
}

module.exports = {
    authRequired
}

 