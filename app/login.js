// login endpoint


// connect to db
const db = require('./db_connect');
const Auth =  require('./auth');
const User = require('./user');


let userLogin = (req, res, next) => {
	let new_user = new User(req.body.username, req.body.password);
	let auth = new Auth();
	db.func('auth_user', [new_user.userName.toString(), new_user.password.toString()])
	.then((data) =>  {
		console.log(data);
		if (!data[0].auth_user)
		{
			res.status(404)
          	.json(
            	{
            		'message': 'user not found'
            	}
          	); 
		}
		let result = data[0].auth_user.toString();
		let token = auth.createToken(result);
		console.log(token)
		res.status(200)
          .json(
            token
          ); 
	})
	.catch( err => {
		console.log(err)
		return(next(err))
	})
}


let userRegister = (req, res, next) => {
	let new_user = new User(req.body.username, req.body.password, req.body.email);
	db.func('add_user', [new_user.userName.toString(), new_user.email.toString(), new_user.password.toString()])
	.then((data) =>  {
		let result = data[0].add_user;
		res.status(200)
          .json(
            result
          );
	})
	.catch( err => {
		console.log(err)
		return(next(err))
	})
}

module.exports = {
	userRegister : userRegister,
	userLogin: userLogin
}




