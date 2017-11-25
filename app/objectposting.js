// object class

class Objectposting{
	constructor(objectid, userid, price, discounts, particulars, sellquantity)
	{
		this.objectid = objectid || '0dbbd153-1ae8-4dc3-9a00-02c0a7e3339f';
		this.userid = userid || 'a781d3eb-c058-4415-bd2e-973af579d5e5';
		this.price = price || 0;
		this.discounts = discounts || '1';
		this.particulars = particulars || '';
		this.sellquantity = sellquantity || 10;	}

}
module.exports = Objectposting;