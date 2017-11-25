// object api

const db = require('./db_connect');
const Auth =  require('./auth');
const User = require('./user');
const Objectclass = require('./object');


let addObject = (req, res, next) => {

	let newauth = Auth();
	if(!newauth.verifyToken(req.headers.token))
	{
		res.status(404)
          .json(
            {'message': 'Bad request'}
          );
    }

	let new_object = new Objectclass(req.body.userid,
								req.body.objname,
								req.body.isavailable,
								req.body.shelfid,
								req.body.rfid,
								req.body.quantity,
								req.body.imagepaths);

	db.func('add_object', [new_object.userid.toString(),
							new_object.objname.toString(),
							'Object dummy info',
							new_object.isavailable.toString(),
							new_object.shelfid.toString(),
							new_object.rfid.toString(),
							new_object.quantity.toString(),
							new_object.imagepaths.toString()]
							)
	.then((data) =>  {
		let result = data[0].add_object;
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
	addObject : addObject
}