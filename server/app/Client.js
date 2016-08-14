var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Client = function () {
    this.set = {};

    this.add = function (key, user) {
    	this.set[key] = user;
        this.checkName(this.set[key]);
    };

    this.remove = function (key) {
    	delete this.set[key];
    };

    this.checkName = (key) => {
    	if (!this.set[key] || !this.set[key].name) {
    	    this.emit('emptyName');
            return;
        }
        console.log(this.set[key], this.set[key].name);
    };
};

util.inherits(Client, EventEmitter);

module.exports = new Client();