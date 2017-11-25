// login endpoint


// connect to db
import {db, pgp} from './db_connect'

import auth from './auth'
import User from './user'


let userLogin = (req, res, next) => {
	let new_user = new User(req.body.username, req.body.password);
	db.func('auth_user', [new_user.userName.toString(), new_user.password.toString()])
	.then((data) =>  {
		console.log(data);
		let result = data;
		res.status(200)
          .json(
            result
          ); 
	})
	.catch( err => {
		return(next(err))
	})
}


let userRegister = (req, res, next) => {
	let new_user = new User(req.body.username, req.body.password, req.body.email);
	db.func('add_user', [new_user.userName.toString(), new_user.email.toString(), new_user.password.toString()])
	.then(() =>  {
		res.status(200)
          .json(
            {"message": 'user added'}
          );
	})
	.catch( err => {
		return(next(err))
	})
}

module.exports = {
	userRegister : userRegister,
	userLogin: userLogin
}




