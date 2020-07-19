const jwt = require('jsonwebtoken');
const config = require('config');

class validateTokens {
    validateToken(req,res,next) {
        const authorizationHeader = req.headers.authorization;
        let result;
        if (authorizationHeader) {
            const token = req.headers.authorization.split(' ')[1];
            const option = {expiresIn: '48d'};
            try {
                result = jwt.verify(token, config.get('jwtToken.secret'), option);
                req.decoded = result;
                next();
            } catch (err) {
                throw new Error(err);
            }
        } 
        else {
            result = {
                error: 'Auth error. Token required',
                status: 401
            };
            res.status(401).send(result);
        }
    }
}

module.exports = new validateTokens();