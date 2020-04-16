const jwt = require('jsonwebtoken');
exports.auth = function (req, res, next){
    if(!req.headers.authorization){
        res.status(401).end();
        return;
    }
    if(req.headers.authorization.indexOf('Bearer') == -1){
        res.status(401).end();
        return;
    }
    jwt.verify(removeBearer(req.headers.authorization), process.env.JTW_SECRET, function(error, token){
        if(error){
            if(error.name == 'TokenExpiredError'){
                res.status(400).json(error.message).end();
                return;
            }
            res.status(400).end();
            return;
        }
        next();
    })
}

function removeBearer(authorization){
    return authorization.split(' ')[1];
}