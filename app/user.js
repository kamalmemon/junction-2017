// class User

class User {

	constructor(userName, password, email)
	{
		this.userName = userName;
		this.password = password;
		this.email = email;
	}

	getUser(){
		return {'userId' : this.userId, 'password': this.password, 'email': this.email}
	}

	

}

module.exports = User;