function User(username, password) {
	this.username = username;
	this.password = password;
}
User.prototype.sayHello = function() {
	return 'Hello ' + this.username;
}

module.exports = User;