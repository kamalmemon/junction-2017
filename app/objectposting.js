// object class

class Objectposting{
	constructor(objectid, userid, price, discounts, particulars, sellquantity)
	{
		this.objectid = objectid;
		this.userid = userid;
		this.price = price;
		this.discounts = discounts;
		this.particulars = particulars;
		this.sellquantity = sellquantity;	}

	getObjectposting(){
		return {'objectid' : this.objectid, 
				'userid': this.userid,
				'price': this.price,
				'discounts': this.discounts,
				'particulars': this.particulars,
				'sellquantity': this.sellquantity
			};
	}
}