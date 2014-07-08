var assert = require('assert');
var User = require('../user');

describe('Hello NPM Mocha Test', function() {

	describe('Create new User', function() {
		it('should have a default Constructor', function() {
			var user = new User('admin', '5555');
			assert.equal(user.username, 'admin');
		});
	});

	describe('User#sayHello', function() {

		it('should sayHello to username', function() {
			var hello = new User('demo', 'demo').sayHello();
			assert.equal(hello, 'Hello demo');
		});

	});

});