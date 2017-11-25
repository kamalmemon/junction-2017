// api to authenticate and login
import jwt from 'jsonwebtoken'

class Auth {
	constructor(){}

	createToken(userID){
		let header, payload, token;
		header = {
			"typ": "JWT",
    		"alg": "HS256"
		}

		payload = {
			"userID" : userID 
		}

		// signature algorithm
		data = base64urlEncode( header ) + "." + base64urlEncode( payload )
		token = jwt.sign({
  			data: data	
		}, process.env.APP_ID, { expiresIn: '1h' });

		return token;
	}

	verifyToken(token){
		let decoded = jwt.verify(token, process.env.APP_ID);
		return decoded ? 1 : 0; 
	}
}

export default Auth;