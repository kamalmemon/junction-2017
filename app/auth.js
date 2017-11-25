// api to authenticate and login
import jwt from 'jsonwebtoken'
import base64url from "base64url"

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

export default Auth;