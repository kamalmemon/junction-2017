// api to authenticate and login
const jwt =  require('jsonwebtoken')
const base64url = require("base64url")

class Auth {
	
	constructor(){
	}

	createToken(userID){
		let payload, token, secret;
		secret = process.env.APP_ID.toString();
		payload = {
			"userID" : userID 
		}

		// signature algorithm
		//let data = header  + "." +  payload 
		token = jwt.sign({
  			data: payload	
		}, secret , { expiresIn: '2 days' });

		return token;
	}

	verifyToken(token){
		let decoded = jwt.verify(token, 'app');
		return decoded ? 1 : 0; 
	}
}

module.exports =  Auth;