// object class

class Objectclass{
	constructor(userid, objname, isavailable, shelfid, rfid, quantity, imagepaths)
	{
		this.userid = userid || 'a781d3eb-c058-4415-bd2e-973af579d5e5';
		this.objname = objname || 'test1234';
		this.isavailable = isavailable || false;
		this.shelfid = shelfid || '1';
		this.rfid = rfid || '1';
		this.quantity = quantity || 1;
		this.imagepaths = imagepaths || 'test';
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