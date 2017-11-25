// object api

const db = require('./db_connect');
const Auth =  require('./auth');
const User = require('./user');
const Objectclass = require('./object');
const Objectposting = require('./objectposting');


let addObject = (req, res, next) => {

	let newauth = new Auth();
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

	db.func('add_object', [new_object.userid,
							new_object.objname,
							'Object dummy info',
							new_object.isavailable,
							new_object.shelfid,
							new_object.rfid,
							new_object.quantity,
							new_object.imagepaths]
							)
	.then((data) =>  {
		let result = data[0].add_object;
		if(new_object.isavailable)
		{
			let object_posting = new Objectposting(result, new_object.userid, req.body.price, req.body.discounts, req.body.particulars, req.body.sellquantity)	
			db.func('add_obj_posting', [object_posting.objectid,
							object_posting.userid,
							object_posting.price,
							object_posting.discounts,
							object_posting.particulars,
							object_posting.sellquantity])
			.then((data) => {
				let result = data[0].add_obj_posting;
				console.log('resrsdasdadasdasd',result)
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

let getAllObjects = (req, res, next) => {
	let newauth = new Auth();
	if(!newauth.verifyToken(req.headers.token))
	{
		res.status(404)
          .json(
            {'message': 'Bad request'}
          );
    }
    let query = "select oi.objectid, objname, up.username, oi.userid, objinfo, isavailable, shelfid, rfid, price, discounts, postingdate, particulars, sellquantity, images from obj_info oi inner join obj_posting op on oi.objectid = op.objectid inner join obj_images oim on oim.objectid = oi.objectid left outer join users up on oi.userid = up.userid";
    db.any(query)
    .then(data =>{
    	res.status(200)
          .json(
            data
          );
    })
    .catch( err => {
		console.log(err)
		return(next(err))
	})
}

let getObjectById = (req, res, next) => {
	let newauth = new Auth();
	if(!newauth.verifyToken(req.headers.token))
	{
		res.status(404)
          .json(
            {'message': 'Bad request'}
          );
    }
    let query = "select * from obj_info oi inner join obj_posting op on oi.objectid = op.objectid where oi.objectid = $1";
    db.any(query,[req.query.objectid])
    .then(data =>{
    	res.status(200)
          .json(
            data
          );
    })
    .catch( err => {
		console.log(err)
		return(next(err))
	})
}

module.exports = {
	addObject : addObject,
	getAllObjects : getAllObjects,
	getObjectById: getObjectById

}