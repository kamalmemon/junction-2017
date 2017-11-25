// object class

class Objectclass{
	constructor(userid, objname, isavailable, shelfid, rfid, quantity, imagepaths)
	{
		this.userid = userid || '';
		this.objname = objname || '';
		this.isavailable = isavailable || '';
		this.shelfid = shelfid || '';
		this.rfid = rfid || '';
		this.quantity = quantity || '';
		this.imagepaths = imagepaths;
	}

	getObject(){
		return {'userId' : this.userId, 
				'objname': this.objname,
				'isavailable': this.isavailable,
				'shelfid': this.shelfid,
				'rfif': this.rfid,
				'quantity': this.quantity,
				'imagepaths': this.imagepaths
			};
	}


}

module.exports = Objectclass;